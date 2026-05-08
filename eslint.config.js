import importPlugin from "eslint-plugin-import-x";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.ts"],
    plugins: {
      import: importPlugin,
    },
    extends: [
      ...tseslint.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
    },
    rules: {
      quotes: ["error", "single", { avoidEscape: true }],
      semi: ["error", "always"],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      indent: ["error", 2, { SwitchCase: 1 }],
    },
  },
]);