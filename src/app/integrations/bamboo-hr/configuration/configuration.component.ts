import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownFilterOptions } from 'primeng/dropdown';
import { BambooHRConfiguration, BambooHRConfigurationPost, BambooHrModel, EmailOption } from 'src/app/core/models/bamboo-hr/bamboo-hr.model';
import { Org } from 'src/app/core/models/org/org.model';
import { OrgService } from 'src/app/core/services/org/org.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  @Input() bambooHrConfiguration: BambooHRConfiguration;

  @Input() additionalEmails: EmailOption[];

  @Input() isConfigurationSaveInProgress: boolean;

  @Output() updateConfiguration = new EventEmitter<BambooHRConfigurationPost>();

  emails: EmailOption[];

  selectedEmail: string | null;

  cofigurationForm: FormGroup;

  addEmailForm: FormGroup = this.formBuilder.group({
    email: [null, Validators.compose([Validators.email, Validators.required])],
    name: [null, Validators.required]
  });

  showDialog: boolean;

  private readonly org: Org = this.orgService.getCachedOrg();

  constructor(
    private formBuilder: FormBuilder,
    private orgService: OrgService
  ) { }

  clearSearch(options: DropdownFilterOptions): void {
    if (options.reset) {
      options.reset();
    }
    this.cofigurationForm.controls.search.reset();
  }

  removeEmail(): void {
    const selectedEmails = this.cofigurationForm.value.emails;
    selectedEmails.splice(0, 1);

    this.cofigurationForm.controls.emails.patchValue(selectedEmails);
    this.selectedEmail = this.cofigurationForm.value.emails.length ? this.cofigurationForm.value.emails[0].email : null;
  }

  addEmail(): void {
    const selectedEmails = this.cofigurationForm.value.emails || [];
    selectedEmails.push(this.addEmailForm.value);

    const additionalEmails = this.cofigurationForm.value.additionalEmails || [];
    additionalEmails.push(this.addEmailForm.value);

    this.emails.push(this.addEmailForm.value);

    this.cofigurationForm.controls.emails.patchValue(selectedEmails);
    this.cofigurationForm.controls.additionalEmails.patchValue(additionalEmails);
    this.addEmailForm.reset();
    this.showDialog = false;
  }

  saveSettings(): void {
    const payload = BambooHrModel.constructBambooConfigurationPayload(this.cofigurationForm, this.org.id);
    this.updateConfiguration.emit(payload);
  }

  private assignSelectedEmail(emails: EmailOption[]): void {
    if (emails.length) {
      this.selectedEmail = emails[0].email;
    } else {
      this.selectedEmail = null;
    }
  }

  private createEmailAdditionWatcher(): void {
    this.assignSelectedEmail(this.cofigurationForm.value.emails);
    this.cofigurationForm.controls.emails.valueChanges.subscribe((emails: EmailOption[]) => {
      this.assignSelectedEmail(emails);
    });
  }

  private getEmailOptions(additionalEmails: EmailOption[], adminEmails: EmailOption[]): EmailOption[] {
    return additionalEmails.concat(adminEmails).filter((email: EmailOption, index: number, self: EmailOption[]) => {
      return index === self.findIndex((e: EmailOption) => {
        return e.email === email.email;
      });
    });
  }

  private setupPage(): void {
    this.cofigurationForm = this.formBuilder.group({
      additionalEmails: [this.bambooHrConfiguration?.additional_email_options ? this.bambooHrConfiguration.additional_email_options : []],
      emails: [this.bambooHrConfiguration?.emails_selected ? this.bambooHrConfiguration?.emails_selected : [], Validators.required],
      search: []
    });

    this.emails = this.getEmailOptions(this.cofigurationForm.value.additionalEmails, this.additionalEmails);

    this.createEmailAdditionWatcher();
  }

  openDialog(): void {
    this.showDialog = true;
  }

  ngOnInit(): void {
    this.setupPage();
  }

}
