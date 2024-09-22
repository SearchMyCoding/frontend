/**
 * Expenential Backoff with Jitter
 * 
 * e^(num - 1) <= delay <= e^num
 * 
 * @param num 
 * @returns delay
 */
export function GetDelayDuration(num: number): number {
  const min: number = Math.exp(num - 1);
  const max: number = Math.exp(num);
  const offset: number = Math.random() * (max - min);
  
  return min + offset;
}