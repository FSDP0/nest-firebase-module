import { registerAs } from "@nestjs/config";
import type { ConfigService } from "@nestjs/config";

import { applicationDefault, cert, initializeApp, ServiceAccount } from "firebase-admin/app";

import { FIREBASE_SDK_ADMIN } from "../constant/firebase.admin.constant";

const {
  CONFIG: { NAMESPACE }
} = FIREBASE_SDK_ADMIN;

export const firebaseSdkAdminInitialize = (configService: ConfigService) => {
  const serviceAccount: ServiceAccount | undefined = configService.get<ServiceAccount>(
    NAMESPACE.CREDENTIAL.SERVICE_ACCOUNT
  );

  console.log(serviceAccount);

  // if (process.env["GOOGLE_APPLICATION_CREDENTIALS"]) {
  //   return initializeApp({ credential: applicationDefault() });
  // } else {
  //   return initializeApp({ credential: cert() });
  // }
};
