import { $locale, $localeStore } from "@/stores/locale";
import { cleanTestStorage, useTestStorageEngine } from "@nanostores/persistent";
import { cleanup, render, within } from "@testing-library/vue";
import { page } from "@vitest/browser/context";
import { allTasks } from "nanostores";
import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import Form from "./Form.vue";

describe("Form", () => {
  beforeAll(() => {
    useTestStorageEngine();
  });

  beforeEach(() => {
    $locale.set("en");
  });

  afterEach(() => {
    cleanup();
    cleanTestStorage();
  });

  it("should have theme defaults selected", async () => {
    const comp = render(Form);

    const theme = comp.getByRole("group", { name: /theme/i });
    const themeNumbers = within(theme).getByRole("radio", { name: /numbers/i });
    const themeIcons = within(theme).getByRole("radio", { name: /icons/i });

    expect(themeNumbers).toBeChecked();
    expect(themeIcons).not.toBeChecked();
  });

  it("should have players defaults selected", async () => {
    const comp = render(Form);

    const players = comp.getByRole("group", { name: /players/i });
    const one = within(players).getByRole("radio", { name: /1/i });
    const two = within(players).getByRole("radio", { name: /2/i });
    const three = within(players).getByRole("radio", { name: /3/i });
    const four = within(players).getByRole("radio", { name: /4/i });

    expect(one).toBeChecked();
    expect(two).not.toBeChecked();
    expect(three).not.toBeChecked();
    expect(four).not.toBeChecked();
  });

  it("should have size defaults selected", async () => {
    const comp = render(Form);

    const size = comp.getByRole("group", { name: /size/i });
    const fourByFour = within(size).getByRole("radio", { name: /4x4/i });
    const sixBySix = within(size).getByRole("radio", { name: /6x6/i });

    expect(fourByFour).toBeChecked();
    expect(sixBySix).not.toBeChecked();
  });

  it("should have language defaults selected", async () => {
    await page.viewport(1280, 720);
    const comp = render(Form);

    const language = comp.getByRole("group", { name: /language/i });
    const en = page.getByRole("radio", { name: /english/i });
    const ja = page.getByRole("radio", { name: /japanese/i });
    const vi = page.getByRole("radio", { name: /vietnamese/i });

    expect(language).toBeInTheDocument();
    await expect.element(en).toBeChecked();
    await expect.element(ja).not.toBeChecked();
    await expect.element(vi).not.toBeChecked();
  });

  it("should handle resize", async () => {
    await page.viewport(1280, 720);
    render(Form);

    const english = page.getByText("English", { exact: true });
    const eng = page.getByText("Eng", { exact: true });
    await expect.element(english).toBeInTheDocument();
    await expect.element(eng).not.toBeInTheDocument();

    await page.viewport(400, 720);
    await expect.element(english).not.toBeInTheDocument();
    await expect.element(eng).toBeInTheDocument();
  });

  it("should change language", async () => {
    await page.viewport(1280, 720);
    render(Form);

    const english = page.getByRole("radio", { name: "English" });
    const japanese = page.getByText("Japanese"); // The input radio is hidden, we need to click the label.
    const englishJa = page.getByRole("radio", { name: "英語" });

    await expect.element(english).toBeChecked();

    await japanese.click();
    await allTasks();
    expect($locale.get()).toEqual("ja");
    expect($localeStore.get()).toEqual("ja");

    await expect.element(english).not.toBeInTheDocument();
    await expect.element(englishJa).toBeInTheDocument();
  });

  function getInputLabelPair(name: string) {
    return [page.getByText(name), page.getByRole("radio", { name })];
  }

  it("can input theme", async () => {
    await page.viewport(1280, 720);
    render(Form);

    const [_, numbers] = getInputLabelPair("Numbers");
    const [iconsLabel, icons] = getInputLabelPair("Icons");

    await expect.element(numbers).toBeChecked();
    await expect.element(icons).not.toBeChecked();
    await iconsLabel.click();

    await expect.element(numbers).not.toBeChecked();
    await expect.element(icons).toBeChecked();
  });

  it("can input players", async () => {
    await page.viewport(1280, 720);
    render(Form);

    const [_, one] = getInputLabelPair("1");
    const [twoLabel, two] = getInputLabelPair("2");

    await expect.element(one).toBeChecked();
    await expect.element(two).not.toBeChecked();
    await twoLabel.click();

    await expect.element(one).not.toBeChecked();
    await expect.element(two).toBeChecked();
  });

  it("can input sizes", async () => {
    await page.viewport(1280, 720);
    render(Form);

    const [_, four] = getInputLabelPair("4x4");
    const [sixLabel, six] = getInputLabelPair("6x6");

    await expect.element(four).toBeChecked();
    await expect.element(six).not.toBeChecked();
    await sixLabel.click();

    await expect.element(four).not.toBeChecked();
    await expect.element(six).toBeChecked();
  });
});
