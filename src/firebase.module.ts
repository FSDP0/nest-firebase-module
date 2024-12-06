import { Module } from "@nestjs/common";

import { FirebaseAdminModule } from "./admin";
import { FirebaseWebModule } from "./web";
import { FirebaseAppModule } from "./app";
import { FirebaseUnityModule } from "./unity";

@Module({
  imports: [FirebaseAdminModule, FirebaseWebModule, FirebaseAppModule, FirebaseUnityModule]
})
export class FirebaseModule {}
