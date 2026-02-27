import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideKeycloak } from 'keycloak-angular';
import { keycloakConfig } from './keycloak.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloak(keycloakConfig),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
  ],
};
