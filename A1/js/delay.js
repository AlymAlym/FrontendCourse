export function delay() {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved');
        }, 200);
      });
}