import { Module } from "@nestjs/common";

import { FirebaseAndroidModule } from "./android/firebase.android.module";
import { FirebaseIOSModule } from "./ios/firebase.ios.module";
import { FirebaseFlutterModule } from "./flutter/firebase.flutter.module";

@Module({
  imports: [FirebaseAndroidModule, FirebaseIOSModule, FirebaseFlutterModule]
})
export class FirebaseAppModule {}
