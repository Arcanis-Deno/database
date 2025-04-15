import { collection, type Database, kvdex } from '@olli/kvdex';
import { ApplicationModel } from './lib/models.ts';
import { env } from './lib/util/env.ts';

const ruri: string = env('DENO_KV_RCONF_URL');
// const buri = env('DENO_KV_BUCKET_URL');
env('DENO_KV_ACCESS_TOKEN');

const rconf: Deno.Kv = await Deno.openKv(ruri);
// const bucket = await Deno.openKv(buri);

const rconfSchemaDefinition = {
  application: collection(ApplicationModel, {
    history: true,
    indices: {
      applicationId: 'primary',
      publicKey: 'primary',
      token: 'secondary',
    },
  }),
};
const rconfModelSchema: Database<typeof rconfSchemaDefinition> = kvdex({
  kv: rconf,
  schema: rconfSchemaDefinition,
});

/** bucket */
// const bucketModelSchema = kvdex({
//   kv: bucket,
// });

export class KVDatabase {
  public static getRemoteConfigurationDatabase(): typeof rconfModelSchema {
    rconfModelSchema.application;
    return rconfModelSchema;
  }

  // public static getBucketConfigurationDatabase(): typeof bucketModelSchema {
  //   return bucketModelSchema;
  // }
}
