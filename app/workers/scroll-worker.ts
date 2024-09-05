self.onmessage = function (e) {
  if (e.data === "getScrollPosition") {
    // En un Web Worker, 'self' se refiere al contexto global del worker
    const scrollPosition = self.scrollY;
    self.postMessage({ scrollPosition });
  }
};
