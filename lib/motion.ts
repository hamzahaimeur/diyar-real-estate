export const MOTION_DURATION_MS = 350;
export const MOTION_EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

export function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  if (!id) return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
