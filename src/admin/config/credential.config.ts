import { registerAs } from "@nestjs/config";

import type { ServiceAccount } from "firebase-admin/app";

import { FIREBASE_SDK_ADMIN } from "../constant/firebase.admin.constant";

const {
  CONFIG: { NAMESPACE }
} = FIREBASE_SDK_ADMIN;

export const firebaseSdkAdminServiceAccount = registerAs(
  NAMESPACE.CREDENTIAL.SERVICE_ACCOUNT,
  (): ServiceAccount => {
    return {
      projectId: process.env["FIREBASE_SVC_PROJECT_ID"] ?? undefined,
      privateKey: process.env["FIREBASE_SVC_PRIVATE_KEY"].replace(/\\n/g, "\n") ?? undefined,
      clientEmail: process.env["FIREBASE_SVC_CLIENT_EMIAL"] ?? undefined
    };
  }
);
