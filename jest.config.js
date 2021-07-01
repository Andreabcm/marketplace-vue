/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  testMatch: ["**/*.spec.ts"],
  restoreMocks: true,
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
};

module.exports = config;
