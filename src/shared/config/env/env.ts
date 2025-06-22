function getEnvVar(key: string) {
  const envVar = import.meta.env[key];

  if (envVar === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }

  return envVar;
}

enum BuildMode {
  Development = 'dev',
  DevelopmentStage = 'devstage',
  // Production = 'prod',
}

export const MODE = getEnvVar('MODE');

export const isDev: boolean = MODE === BuildMode.Development;
export const isDevStage: boolean = MODE === BuildMode.DevelopmentStage;
// export const isProd: boolean = MODE === BuildMode.Production;
