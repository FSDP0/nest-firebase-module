import { Module } from "@nestjs/common";

import { FirebaseMessagingService } from "./service";

@Module({
  exports: [FirebaseMessagingService]
})
export class MessagingModule {}
