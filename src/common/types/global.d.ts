declare global {
  namespace NodeJS {
    interface ProcessEnv
      extends Dict<string>,
        Record<string, string | number>,
        Firebase.Env.Variables {
      GOOGLE_APPLICATION_CREDENTIALS: string;
    }
  }
}

export = global;
