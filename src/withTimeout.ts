function withTimeout(callback: (...args: any[]) => any, time: number) {
  return setTimeout(callback, time);
}

export default withTimeout;
