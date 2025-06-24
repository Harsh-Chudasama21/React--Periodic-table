# React Periodic Table

An interactive, responsive periodic table web app built with React. Explore elements, their history, and related resources with a modern UI and smooth navigation.

---

## 🚀 Features
- Interactive periodic table with hover and click actions
- Navigation to History, Alchemy, Podcast, Video, and Trends pages
- Responsive design for desktop and mobile
- Modular React component structure
- Code splitting and async loading for performance
- Social and feedback links

---

## 🛠 Tech Stack
- **React** (UI library)
- **React Router** (routing/navigation)
- **Webpack** (module bundler)
- **Babel** (JS transpiler)
- **JavaScript (ES6+)**
- **CSS** (modular, with potential for SCSS)
- **react-imported-component** (code splitting)

---

## 📁 Project Folder Structure
```
react-periodic-table/
├── public/                # Static files (index.html, favicon, etc.)
├── src/
│   ├── assets/            # Data and large JS assets (PeriodicTable.js)
│   ├── css/               # CSS files for components
│   ├── js/
│   │   ├── components/    # Reusable React components (Header, Footer, etc.)
│   │   ├── pages/         # Page-level React components (Home, History, etc.)
│   │   ├── index.js       # Main entry point
│   │   ├── routes.js      # Route definitions
│   └── ...
├── package.json           # Project metadata and scripts
├── webpack.config.js      # Webpack configuration
└── ...
```

---

## 🗺 Route Structure & Navigation
| Path         | Page      | Description                |
|--------------|-----------|----------------------------|
| `/`          | Home      | Interactive periodic table |
| `/history`   | History   | History of elements        |
| `/alchemy`   | Alchemy   | Alchemy-related content    |
| `/podcast`   | Podcast   | Chemistry podcasts         |
| `/video`     | Video     | Chemistry videos           |
| `/trends`    | Trends    | Trends and data            |

Navigation is handled via the Header component using React Router's `<Link>` for client-side routing.

---

## 🏁 How to Run
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm start
   ```
3. **Build for production:**
   ```bash
   npm run production
   ```
4. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

---

## ⚙️ How Each Tool Works
- **Webpack**: Bundles JS, CSS, and assets for development and production.
- **Babel**: Transpiles modern JS (ES6+) and JSX to browser-compatible JS.
- **React Router**: Handles navigation and route rendering.
- **react-imported-component**: Enables code splitting and async loading of page components for faster initial load.
- **CSS Modules**: Provides locally-scoped CSS for each component.

---

## 🔒 Security & Notes
- No authentication; all data is public.
- Follows React best practices for XSS and injection prevention.
- No sensitive data is stored or processed.
- Always keep dependencies up to date for security.

---

## 🙏 Credits
- **Royal Society of Chemistry** for periodic table data and images.
- Open source contributors and the React community.

---

## 📄 License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details. 
