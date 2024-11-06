/// <reference types="vitest" />
import { getViteConfig } from "astro/config";
import { coverageConfigDefaults } from "vitest/config";

export default getViteConfig({
  test: {
    css: true,
    logHeapUsage: true,
    include: ["./src/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    setupFiles: ["./src/vitest-setup.ts"],
    reporters: process.env.CI ? ["github-actions", ["junit", { outputFile: "./test-results/tests.xml" }]] : "default",
    coverage: {
      enabled: true,
      provider: "istanbul",
      reporter: process.env.CI ? ["json", "text"] : ["text-summary", "text"],
      reportOnFailure: process.env.CI === "true",
      reportsDirectory: "./test-results",
      exclude: [...coverageConfigDefaults.exclude, "./src/pages", "./src/layouts"],
    },
    browser: {
      enabled: true,
      provider: "playwright",
      name: "chromium",
      screenshotDirectory: "./fails/",
    },
  }
});
