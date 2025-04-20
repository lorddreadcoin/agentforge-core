// DelayManager: triggers a 3-second cinematic pause
export function delay(ms: number = 3000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
