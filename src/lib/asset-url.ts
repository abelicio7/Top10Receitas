// Ensures Lovable CDN assets (/__l5e/...) load from any domain (custom domains included)
// by resolving relative asset paths against the canonical Lovable published origin.
const ASSET_ORIGIN = "https://sabor-mocambique-em-casa.lovable.app";

export const assetUrl = (url: string): string => {
  if (!url) return url;
  if (/^https?:\/\//i.test(url)) return url;
  return `${ASSET_ORIGIN}${url.startsWith("/") ? "" : "/"}${url}`;
};
