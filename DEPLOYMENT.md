# Publishing to GitHub Pages

I have already prepared your project for deployment by:
1.  Updating `vite.config.js` with the correct `base` path (`/Simple-ToDo-App/`).
2.  Creating a GitHub Actions workflow in `.github/workflows/deploy.yml` that uses `pnpm` to build and deploy your site automatically.

Follow these final steps to go live:

### 1. Push Changes to GitHub
Open your terminal and run these commands to push the configuration changes I just made:
```powershell
git add .
git commit -m "chore: setup github pages deployment"
git push origin main
```

### 2. Enable GitHub Pages Actions
Once you've pushed the code, follow these steps on GitHub:
1.  Go to your repository: [Simple-ToDo-App](https://github.com/Ojas-1008/Simple-ToDo-App)
2.  Click on **Settings** (top tab).
3.  Click on **Pages** in the left sidebar.
4.  Under **Build and deployment** > **Source**, change the dropdown from "Deploy from a branch" to **"GitHub Actions"**.

### 3. Verify Deployment
1.  Click on the **Actions** tab at the top of your repository.
2.  You should see a workflow named "Deploy to GitHub Pages" running.
3.  Once it finishes (turns green), your site will be live at:
    `https://ojas-1008.github.io/Simple-ToDo-App/`

> [!TIP]
> From now on, every time you push to the `main` branch, your site will automatically update!
