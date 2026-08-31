import { describe, expect, test } from "vitest";
import { Cache } from "./pokecache.js";

describe("Cache", () => {
  test("adds and gets a value", () => {
    const cache = new Cache(1000);

    cache.add("pikachu", "electric");

    const entry = cache.get<string>("pikachu");

    expect(entry?.val).toBe("electric");

    cache.stopReapLoop();
  });
});
