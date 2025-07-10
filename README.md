# 🖼 Image Gallery – React + TypeScript Project

![Project Preview 1](./public/2.png)
![Project Preview 2](./public/1.png)
![Project Preview 3](./public/3.png)

## 🎯 Project Goal

This is a simple front-end online store built to showcase key front-end skills, including:
- building dynamic interfaces with React,  
- managing application state (Zustand, Context),  
- working with REST APIs (via React Query),  
- handling cart logic with localStorage persistence,  
- filtering products and implementing a responsive layout. 

## ⚙️ Technologies

- **React**
- **TypeScript**
- **Vite**
- **Zustand** – global cart state management  
- **React Query** – API data fetching and caching  
- **Context API** – used for product filtering  
- **ESLint + Prettier** – code formatting and quality  
- **HTML, CSS, Tailwind** – custom styles  
- **localStorage** – persistent cart between sessions 

## ✨ Features

- 🧾 Add/remove products from the cart  
- 💾 Cart saved to localStorage  
- 📦 Product list fetched from a REST API  
- 🔍 Filter products by category  
- 👁️ View product details on a separate page  
- 🔎 Search products by name  
- 📱 Fully responsive design  
- ✅ Clean, modular code with ESLint + Prettier  

## 📂 Code Structure

- Components split into logical modules (`Cart`, `ProductList`, `Search`, `ProductDetails`)
- State management split into global (`Zustand`, `Context`) and local (`useState`)
- Typed hooks and components with TypeScript
- Clean class organization and styling with plain CSS

---

## 🛠 Advanced setup 

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
