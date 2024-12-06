import { Logger, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { firebaseSdkAdminServiceAccount } from "./config";
import { firebaseSdkAdminInitialize } from "./util";

@Module({
  imports: [ConfigModule.forFeature(firebaseSdkAdminServiceAccount)]
})
export class FirebaseAdminModule {
  private readonly logger = new Logger(FirebaseAdminModule.name);

  constructor(private readonly configService: ConfigService) {
    this.logger.log("\\... Initialize ....");

    firebaseSdkAdminInitialize(this.configService);
  }
}
