import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "j6uxuv",
  env: {
    CYPRESS_RECORD_KEY: "CYPRESS_RECORD_KEY_TEST",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
