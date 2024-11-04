import { persistentMap } from "@nanostores/persistent";

const $settings = persistentMap<{
  theme: string,
  players: number,
  grid: number,
}>("settings:", {
  theme: "numbers",
  players: 1,
  grid: 4,
}, {
  encode(val) {
    return String(val);
  },
  decode(val) {
    try {
      return JSON.parse(val);
    } catch (e) {
      return val;
    }
  },
  listen: false,
});

export { $settings };
