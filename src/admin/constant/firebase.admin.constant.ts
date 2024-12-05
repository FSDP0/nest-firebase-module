export const FIREBASE_SDK_ADMIN = {
  CONFIG: {
    NAMESPACE: {
      get APP(): string {
        return "FIREBASE_SDK_ADMIN_APP";
      },
      CREDENTIAL: {
        get SERVICE_ACCOUNT(): string {
          return "FIREBASE_SDK_ADMIN_SERVICE_ACCOUNT";
        }
      }
    }
  }
};
