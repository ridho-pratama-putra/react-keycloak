import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "http://localhost:8080/auth/",
    realm: "oauth2-demo",
    resource: "react-login-client",
    // sslRequired: "external",
    // publicClient: true,
    // confidentialPort: 0
});

export default keycloak;
