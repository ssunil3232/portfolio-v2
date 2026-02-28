const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}`;

const getAssetExtension = (publicId: string) => {
  const cleaned = publicId.split("?")[0].toLowerCase();
  const match = cleaned.match(/\.([a-z0-9]+)$/);
  return match?.[1] ?? "";
};

const shouldUseDirectDelivery = (publicId: string) => {
  const ext = getAssetExtension(publicId);
  return ext === "svg" || ext === "gif";
};

export const getCloudinaryVideoUrl = (publicId: string) =>
  `${CLOUDINARY_BASE_URL}/video/upload/${publicId}`;

export const getCloudinaryDirectImageUrl = (publicId: string) =>
  shouldUseDirectDelivery(publicId)
    ? `${CLOUDINARY_BASE_URL}/image/upload/${publicId}`
    : `${CLOUDINARY_BASE_URL}/image/upload/f_auto,q_auto/${publicId}`;

export const getCloudinaryRawFileUrl = (publicId: string) =>
  `${CLOUDINARY_BASE_URL}/raw/upload/${publicId}`;

export const toCloudinaryVideoPublicId = (previewVideo: string) => {
  const normalized = previewVideo.replace(/^\/+/, "");
  return normalized.replace(/^assets\//, "");
};

export const getVideoSrc = (previewVideo: string) => {
  if (/^https?:\/\//.test(previewVideo)) {
    return previewVideo;
  }

  if (!CLOUDINARY_CLOUD_NAME) {
    return "";
  }

  return getCloudinaryVideoUrl(toCloudinaryVideoPublicId(previewVideo));
};
