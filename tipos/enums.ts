(() => {
  enum AudioLevel {
    min = 1,
    medium,
    max = 10,
  }

  const currentAudio: AudioLevel = AudioLevel.medium;

  //el siguiente codigo hace que si no lo usamos no se transpila, es decir, optimiza
  const enum levels {
    success,
    error,
  }
})();
