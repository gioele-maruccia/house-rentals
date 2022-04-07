/**
 * 
 * @param min 
 * @param max 
 * @returns Random number between min and max (default 0 and 1)
 */
export function random (min = 0, max = 1) : number {
   return Math.random() * (max-min) +min
}