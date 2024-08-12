import * as prettierTailwindcss from 'prettier-plugin-tailwindcss'

export default {
  semi: false,
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  plugins: [prettierTailwindcss],
  tailwindConfig: './tailwind.config.js',
}
