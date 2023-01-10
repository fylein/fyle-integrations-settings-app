# Fyle Integrations Settings App
Frontend Repository for Fyle Integrations Settings Dashboard App

## Documentation
Please refer this link to find the [documentation](https://fylein.github.io/fyle-integrations-settings-app) of the project.

## Local development setup
### Setup - 1 (Recommended)
Follow instructions mentioned in [Integrations Central](https://github.com/fylein/fyle-integrations-central/)

### Setup - 2
* Install dependencies

    ```bash
    npm install
    ```

* Copy `environment.json` from integrations-central/ and add it to `src/environments`

    ```bash
    cp ../fyle-integrations-central/app-secrets/integrations-settings-app/environment.json src/environments/environment.json
    ```

* Run app

    ```bash
    ng serve
    ```

* App url

    ```bash
    http://localhost:4200/auth/redirect
    ```