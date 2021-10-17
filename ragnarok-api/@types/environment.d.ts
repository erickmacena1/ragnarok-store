declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      PORT: number;
      DEV_PORT: number;
      AWS_BUCKET_NAME: string;
      STRIPE_API_TOKEN: string;
      SUCCES_URL: string;
      CANCEL_URL: string;
    }
  }
}

export {};
