export function throttle(func: Function, wait: number) {
  let timeout: number | null = null;
  return function(...args: any[]) {
    if (!timeout) {
      // Execute the function
      func.apply(this, args);
      // Start the cooldown timer
      timeout = setTimeout(() => {
        timeout = null; // Reset the timeout flag after the wait period
      }, wait);
    }
    // Subsequent calls within the 'wait' period are ignored
  };
}
