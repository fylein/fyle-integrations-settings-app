export type Org = {
    id: number;
    name: string;
    user: number[];
    fyle_org_id: string;
    managed_user_id: string;
    cluster_domain: string;
    is_bamboo_connector: boolean;
    is_fyle_connected: boolean;
    is_sendgrid_connected: boolean;
    created_at: Date;
    updated_at: Date;
}
