/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  printWidth: 80,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSameLine: false,
  singleAttributePerLine: true,
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^@/(lib|components|app)/(.*)$',
    '^@/types',
    '^[./]',
    '.*\\.(css|scss|glsl)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  arrowParens: 'always',
  bracketSpacing: true,
  trailingComma: 'es5',
  proseWrap: 'always',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  embeddedLanguageFormatting: 'auto',
  quoteProps: 'as-needed',
  overrides: [
    {
      files: '*.test.js',
      options: {
        semi: true,
      },
    },
    {
      files: ['*.html', 'legacy/**/*.js'],
      options: {
        tabWidth: 4,
      },
    },
  ],
}
