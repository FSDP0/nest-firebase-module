import { Logger } from "@nestjs/common";

import { messaging } from "firebase-admin";

import type {
  BaseMessage,
  TokenMessage,
  MulticastMessage,
  ConditionMessage,
  TopicMessage
} from "firebase-admin/lib/messaging/messaging-api";

export abstract class MessagingService {
  private readonly logger = new Logger(`Firebase${MessagingService.name}`);

  protected async sendMessageByToken(token: string, message: BaseMessage) {
    const payload: TokenMessage = { token, ...message };

    return await messaging()
      .send(payload)
      .then((response) => response)
      .catch((error) => this.logger.error(error));
  }

  protected async sendMessageByMultipleToken(tokens: [string], message: BaseMessage) {
    const payload: MulticastMessage = { tokens, ...message };

    return await messaging()
      .sendEachForMulticast(payload)
      .then((response) => {
        this.logger.log(`Success : ${response.successCount}`);
        this.logger.log(`Failure : ${response.failureCount}`);

        return response;
      })
      .catch((error) => this.logger.error(error));
  }

  protected async sendMessageByTopic(topic: string, message: BaseMessage) {
    const payload: TopicMessage = { topic, ...message };

    return await messaging()
      .send(payload)
      .then((response) => response)
      .catch((error) => this.logger.error(error));
  }

  protected async sendMessageByConditionalInfo(condition: string, message: BaseMessage) {
    const payload: ConditionMessage = { condition, ...message };

    return await messaging()
      .send(payload)
      .then((response) => response)
      .catch((error) => this.logger.error(error));
  }
}
