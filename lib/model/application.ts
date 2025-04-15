import { type Model, model } from '@olli/kvdex';

export type Application = {
  applicationId: string;
  publicKey: string;
  clientId: string;
  clientSecret: string;
  token: string;
};

export const ApplicationModel: Model<Application> = model<Application>();
