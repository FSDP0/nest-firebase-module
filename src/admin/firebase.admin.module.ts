import { Logger, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import type { ServiceAccount } from "firebase-admin/app";

import { FIREBASE_SDK_ADMIN } from "./constant";
import { firebaseSdkAdminServiceAccount } from "./config";

const {
  CONFIG: { NAMESPACE }
} = FIREBASE_SDK_ADMIN;

@Module({
  imports: [ConfigModule.forFeature(firebaseSdkAdminServiceAccount)]
})
export class FirebaseAdminModule {
  private readonly logger = new Logger(FirebaseAdminModule.name);

  constructor(private readonly configService: ConfigService) {
    this.configService.getOrThrow<ServiceAccount>(
      NAMESPACE.CREDENTIAL.SERVICE_ACCOUNT,
      {},
      { infer: true }
    );
  }
}
