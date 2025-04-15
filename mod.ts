import { collection, kvdex } from '@olli/kvdex';
import { ApplicationModel } from './lib/models.ts';
import { env } from './lib/util/env.ts';

const ruri = env('DENO_KV_RCONF_URL');
const buri = env('DENO_KV_BUCKET_URL');
env('DENO_KV_ACCESS_TOKEN');

const rconf = await Deno.openKv(ruri);
const bucket = await Deno.openKv(buri);

/** rconf */
const rconfModelSchema = kvdex({
  kv: rconf,
  schema: {
    application: collection(ApplicationModel, {
      history: true,
      indices: {
        applicationId: 'primary',
        publicKey: 'primary',
        token: 'secondary',
      },
    }),
  },
});

/** bucket */
const bucketModelSchema = kvdex({
  kv: bucket,
});

export class KVDatabase {
  public static getRemoteConfigurationDatabase(): typeof rconfModelSchema {
    return rconfModelSchema;
  }

  public static getBucketConfigurationDatabase(): typeof bucketModelSchema {
    return bucketModelSchema;
  }
}
