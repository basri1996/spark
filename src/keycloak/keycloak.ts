// @ts-ignore
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: process.env.REACT_APP_KEY_CLOAK_URL,
  realm: process.env.REACT_APP_REALM,
  clientId: process.env.REACT_APP_CLIENT_ID,
});

export default keycloak;
