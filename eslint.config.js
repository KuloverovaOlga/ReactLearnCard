import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [js.configs.recommended, reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    }
  }
]);

// import js from "@eslint/js";
// import globals from "globals";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// import { defineConfig, globalIgnores } from "eslint/config";
// import prettier from "eslint-plugin-prettier";

// export default defineConfig([
//   globalIgnores(["dist", "node_modules", "build"]),
//   {
//     files: ["**/*.{js,jsx}"],
//     extends: [
//       js.configs.recommended,
//       reactHooks.configs.flat.recommended,
//       reactRefresh.configs.vite,
//     ],
//     languageOptions: {
//       ecmaVersion: "latest",
//       globals: {
//         ...globals.browser,
//         ...globals.es2021,
//       },
//       parserOptions: {
//         ecmaVersion: "latest",
//         ecmaFeatures: { jsx: true },
//         sourceType: "module",
//       },
//     },
//     plugins: {
//       "react-hooks": reactHooks,
//       "react-refresh": reactRefresh,
//       prettier,
//     },
//     rules: {
//       // --- ОСНОВНЫЕ ПРАВИЛА ЛОГИКИ ---

//       // Запрещает неиспользуемые переменные, кроме тех, что начинаются с заглавной буквы (компоненты) или подчеркивания
//       "no-unused-vars": [
//         "error",
//         {
//           varsIgnorePattern: "^[A-Z_]",
//           argsIgnorePattern: "^_",
//         },
//       ],

//       // Требует использовать const для переменных, которые не переназначаются (защита от случайных мутаций)
//       "prefer-const": "error",

//       // Выдает предупреждение при забытых console.log (разрешает warn и error для критических случаев)
//       "no-console": ["warn", { allow: ["warn", "error"] }],

//       // Запрещает использование переменных до их объявления
//       "no-use-before-define": [
//         "error",
//         { functions: false, classes: true, variables: true },
//       ],

//       // --- REACT & HOOKS (Критично для анимаций и эффектов) ---

//       // Проверяет зависимости в useEffect/useMemo. Помогает не поймать "замыкание" старых данных в GSAP анимациях
//       "react-hooks/exhaustive-deps": "warn",

//       // Гарантирует, что хуки используются только внутри компонентов
//       "react-hooks/rules-of-hooks": "error",

//       // Позволяет Fast Refresh работать корректно (Vite будет обновлять только измененный компонент)
//       "react-refresh/only-export-components": [
//         "warn",
//         { allowConstantExport: true },
//       ],

//       // Запрещает использование индекса массива как key в итерациях (улучшает производительность рендеринга)
//       "react/no-array-index-key": "off", // Можно включить 'warn', если хочешь следить за этим строго

//       // Требует, чтобы у компонентов, не имеющих детей, был самозакрывающийся тег (например, <Component />)
//       // 'react/self-closing-comp': 'warn', // Обычно полезно, если не конфликтует с Prettier

//       // --- ЧИСТОТА КОДА ---

//       // Запрещает дублирование импортов
//       "no-duplicate-imports": "error",

//       // Запрещает пустые блоки (кроме catch)
//       "no-empty": ["error", { allowEmptyCatch: true }],

//       // Требует использования === вместо == (исключая проверку на null/undefined)
//       eqeqeq: ["error", "always", { null: "ignore" }],

//       "prettier/prettier": [
//         "error",
//         {
//           trailingComma: "none",
//           tabWidth: 2,
//           useTabs: false,
//           arrowParens: "always",
//           semi: true,
//           singleQuote: true,
//           printWidth: 130,
//           htmlWhitespaceSensitivity: "ignore",
//         },
//       ],
//     },
//   },
// ]);
