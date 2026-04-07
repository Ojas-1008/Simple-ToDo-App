# The Curator – Simple ToDo App

A modern, minimalist, and highly functional ToDo application built with React and Vite. Designed with a focus on clean aesthetics and smooth user experience.

![The Curator Demo](https://via.placeholder.com/800x400?text=The+Curator+Demo+Placeholder) 
*(You can replace this with a real screenshot of your app)*

## ✨ Features

- **Task Management**: Add, toggle, and delete tasks with ease.
- **Categorization**: Filter tasks by "All", "Active", and "Completed" to stay focused.
- **Fluid UI**: Built with a custom design system ("Task Workspace") for a premium feel.
- **Persistent Logic**: Fast, reactive updates powered by React state.
- **Auto Deployment**: Integrated with GitHub Actions for seamless updates to GitHub Pages.

## 🚀 Live Demo

Check out the live application here:  
👉 **[https://ojas-1008.github.io/Simple-ToDo-App/](https://ojas-1008.github.io/Simple-ToDo-App/)**

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: [GitHub Actions](https://github.com/features/actions)

## 📦 Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ojas-1008/Simple-ToDo-App.git
   cd Simple-ToDo-App
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm dev
   ```

4. **Build for production**:
   ```bash
   pnpm build
   ```

## 🌐 Deployment

This project is configured to automatically deploy to GitHub Pages whenever changes are pushed to the `main` branch.

The setup includes:
- `vite.config.js` configured with the correct base path.
- A GitHub Action in `.github/workflows/deploy.yml` that handles the build process.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
Created by [Ojas](https://github.com/Ojas-1008)