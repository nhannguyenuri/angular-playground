export const keycloakConfig = {
  config: {
    url: 'http://localhost:8080',
    realm: 'personal',
    clientId: 'personal',
  },
  initOptions: {
    onLoad: 'login-required',
    checkLoginIframe: false,
  },
} as any;
