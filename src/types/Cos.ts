export interface CosCredentials {
  endpoint: string;
  apiKeyId: string;
  serviceInstanceId: string;
  signatureVersion: string;
  accessKeyId: string;
  secretAccessKey: string;
}

export interface PreSignedUrlResponse {
  cosUri: string;
  preSignedUrl: string;
}