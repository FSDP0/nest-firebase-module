import type { ServiceAccount } from "firebase-admin/app";

declare namespace FirebaseAdmin {
  interface ServiceAccountCredential extends Required<ServiceAccount> {
    type?: string;
    project_id: string;
    private_key: string;
    private_key_id?: string;
    client_email: string;
    client_id?: string;
    auth_uri?: string;
    token_uri?: string;
    auth_provider_x509_cert_url?: string;
    client_x509_cert_url?: string;
    universe_domain?: string;
  }
}
