import type { ConfigService } from "@nestjs/config";

import { applicationDefault, cert, initializeApp } from "firebase-admin/app";
import type { Credential, ServiceAccount } from "firebase-admin/app";

import { FIREBASE_SDK_ADMIN } from "../constant/firebase.admin.constant";
import { isObjectEmpty } from "@fsdp0/common";

const {
  CONFIG: { NAMESPACE }
} = FIREBASE_SDK_ADMIN;

export function firebaseSdkAdminInitialize(configService: ConfigService) {
  let credential: Credential;

  if (process.env["GOOGLE_APPLICATION_CREDENTIALS"]) {
    credential = applicationDefault();
  } else {
    const serviceAccountCredentialFilePath = configService.get<string>(
      "FIREBASE_SVC_CREDENTIAL_FILE_PATH"
    );

    if (serviceAccountCredentialFilePath) {
      credential = cert(serviceAccountCredentialFilePath);
    } else {
      const serviceAccount = configService.get<ServiceAccount>(
        NAMESPACE.CREDENTIAL.SERVICE_ACCOUNT
      );

      if (serviceAccount && !isObjectEmpty(serviceAccount as object)) {
        credential = cert(serviceAccount);
      } else {
        throw Error("Error occured when initalize firebase service");
      }
    }
  }

  initializeApp({ credential });
}
