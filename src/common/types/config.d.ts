declare namespace Firebase {
  namespace Env {
    interface Variables extends Record<string, string> {
      FIREBASE_SVC_PROJECT_ID: string;

      FIREBASE_SVC_PRIVATE_KEY: string;

      FIREBASE_SVC_CLIENT_EMIAL: string;
    }
  }
}
