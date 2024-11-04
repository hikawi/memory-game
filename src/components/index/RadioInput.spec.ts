import { cleanup, render } from "@testing-library/vue";
import { page } from "@vitest/browser/context";
import { afterEach, describe, expect, it } from "vitest";
import RadioInput from "./RadioInput.vue";

describe("RadioInput", () => {
  const props = {
    name: "test",
    options: ["test1", "test2", "test3", "test4"],
    legend: "testtest",
    values: ["test1", "test2", "test3", "test4"],
  }

  afterEach(() => {
    cleanup();
  });

  it("should have no form if ignored", async () => {
    render(RadioInput, { props: { ...props, noSubmit: true } });
    const inputs = page.getByRole("radio").all();
    for (const input of inputs) {
      await expect.element(input).toHaveAttribute("form", "");
    }
  });

  it("should not have form attribute if not ignored", async () => {
    render(RadioInput, { props });
    const inputs = page.getByRole("radio").all();
    for (const input of inputs) {
      await expect.element(input).not.toHaveAttribute("form");
    }
  });
});
