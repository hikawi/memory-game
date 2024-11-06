import { i18n } from "@/stores/locale";

const $form = i18n("form", {
  "selectTheme": "Select Theme",
  "themeNumbers": "Numbers",
  "themeIcons": "Icons",
  "numberOfPlayers": "Number of Players",
  "gridSize": "Grid Size",
  "language": "Language",
  "english": "English",
  "japanese": "Japanese",
  "vietnamese": "Vietnamese",
  "englishSmall": "Eng",
  "japaneseSmall": "Jpn",
  "vietnameseSmall": "Vie",
  "start": "Start Game",
});

const $language = i18n("language", {
  "english": "English",
  "japanese": "Japanese",
  "vietnamese": "Vietnamese",
  "englishSmall": "Eng",
  "japaneseSmall": "Jpn",
  "vietnameseSmall": "Vie",
});

const $game = i18n("game", {
  "menu": "Menu",
  "restart": "Restart",
  "new": "New Game",
  "resume": "Resume Game",
  "language": "Language",
});

export { $form, $game, $language };

