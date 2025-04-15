import { model } from '@olli/kvdex';

export type Application = {
  applicationId: string;
  publicKey: string;
  clientId: string;
  clientSecret: string;
  token: string;
};

export const ApplicationModel = model<Application>();
