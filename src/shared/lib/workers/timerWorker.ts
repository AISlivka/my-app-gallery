let intervalId: ReturnType<typeof setInterval> | null = null;

self.onmessage = (e: MessageEvent) => {
  const { data } = e;

  if (data === 'start') {
    intervalId = setInterval(() => {
      self.postMessage(Date.now());
    });
  }

  if (data === 'stop') {
    if (intervalId) {
      clearInterval(intervalId);
    }
  }
};
