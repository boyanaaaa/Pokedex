export type CacheEntry<T> = {
  createdAt: number;
  val: T;
};

export class Cache {
  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  #reap(): void {
    const now = Date.now();
    for (const [key, entry] of this.#cache) {
      if (entry.createdAt < now - this.#interval) {
        this.#cache.delete(key);
      }
    }
  }

  stopReapLoop(): void {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }

  #startReapLoop(): void {
    this.#reapIntervalId = setInterval(() => {
      this.#reap();
    }, this.#interval);
  }

  add<T>(key: string, val: T): void {
    this.#cache.set(key, {
      createdAt: Date.now(),
      val: val,
    });
  }

  get<T>(key: string): CacheEntry<T> | undefined {
    return this.#cache.get(key);
  }
}
