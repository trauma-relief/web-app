// DATABASE
export const CLOUDANT_FLASHCARD_DB_DEV =
  process.env.CLOUDANT_FLASHCARD_DB || "dev_flashcard";
export const CLOUDANT_RESULTS_DB_DEV =
  process.env.RESULTS_DB || "flashcard_results";
export const CLOUDANT_PERCENTAGE_DB_DEV =
  process.env.CLOUDANT_PERCENTAGE || "experience_percentages";
export const CLOUDANT_USEFUL_TIPS_DB_DEV =
  process.env.CLOUDANT_USEFUL_TIPS_DB || "useful_tips";
export const CLOUDANT_FLASHCARD_SELECT_DB_DEV =
  process.env.CLOUDANT_FLASHCARD_SELECT_DB || "dev_flashcard_select";
export const CLOUDANT_FLASHCARD_SELECT_COUNTS_DB_DEV =
  process.env.CLOUDANT_FLASHCARD_SELECT_COUNTS_DB ||
  "dev_flashcard_select_counts";
export const CLOUDANT_PSYCHOTHERAPISTS_DB_DEV = process.env.CLOUDANT_THERAPISTS_DB || "dev_therapists";
export const CLOUDANT_OURVALUESCARD_DB = "ourvaluescard";

// CONTENT
export const COS_FLASHCARD_IMAGE_BUCKET = process.env.COS_FLASHCARD_IMAGE_BUCKET || "lrn-flashcard-images";
export const COS_FLASHCARD_RESULT_IMAGE_BUCKET = process.env.COS_FLASHCARD_RESULT_IMAGE_BUCKET || "lrn-flashcard-images-results";
export const COS_URL = "s3.eu-de.cloud-object-storage.appdomain.cloud";
export const PRESIGNED_URL_EXPIRY = 3600; // 1 hour
export const COS_OURVALUESCARD_IMAGE_BUCKET =  process.env.COS_OURVALUESCARD_IMAGE_BUCKET || "lrn-ourvaluecard-images";
