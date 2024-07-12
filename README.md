# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


What was the purpose of the project?

Today we present you a product landing page about a financial application.

Usually, we show the product through the screens of the mobile application.

This time we wanted to broadcast the meaning of the product through cute illustrations with scenes of using the app.

The style was chosen to be minimalist and with accent colors. We will be glad to hear your feedback about this work. What do you say?

Thank you for staying with us!

What was done

Research
UX/UI design
Illustrations
Interaction
What tools did we use?

Figma
Adobe Illustrator
Adobe After Effects
⭐️ ⭐️ ⭐️

Who are we?

We are a full-cycle agency that delivers turnkey design projects, and by identifying the branding, creating the web design, and mobile app we turn it into a live product. The detailed process of our work is described on the website emote.agency

We are open to new projects

💌 hey@emote.agency