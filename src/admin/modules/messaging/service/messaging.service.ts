import { Injectable } from "@nestjs/common";

import { MessagingService as AbstractMessagingService } from "./abstract.messaging.service";

@Injectable()
class MessagingService extends AbstractMessagingService {}

export { MessagingService as FirebaseMessagingService };
