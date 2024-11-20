// @ts-ignore
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: import.meta.env.VITE_APP_KEY_CLOAK_URL,
  realm: import.meta.env.VITE_APP_REALM,
  clientId: import.meta.env.VITE_APP_CLIENT_ID,
});

export default keycloak;
