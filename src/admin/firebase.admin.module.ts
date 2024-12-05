import { Logger, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { firebaseSdkAdminServiceAccount } from "./config/credential.config";
import { firebaseSdkAdminInitialize } from "./config/firebase.admin.config";

@Module({
  imports: [ConfigModule.forFeature(firebaseSdkAdminServiceAccount)]
})
export class FirebaseAdminModule {
  private readonly logger = new Logger(FirebaseAdminModule.name);

  constructor(private readonly configService: ConfigService) {
    firebaseSdkAdminInitialize(this.configService);
  }
}
