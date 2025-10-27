# Lazy Loading Scattegories

A lightweight demo built with **Vite** and **TypeScript** to illustrate how **lazy loading** and **dynamic imports** work in modern JavaScript applications. Each category (like *Cartoon Characters*, *Flowers*, *Nicknames*, etc.) is loaded only when requested, demonstrating the principle of **on-demand code execution** and **bundle splitting**.

## Demo Overview
The app displays five buttons, each representing a category. When a button is clicked, its corresponding module is dynamically imported and rendered in the view.

### Example categories
- Cartoon Characters  
- Flowers  
- Things You Shout  
- Nicknames  
- Foods You Eat Raw  

Each category loads its own JS chunk only when needed, reducing initial load size.

## Key Concepts Demonstrated

| Concept | Description |
|----------|--------------|
| **Dynamic Imports** | Uses `import()` to load JavaScript modules only when triggered. |
| **Lazy Loading** | Loads content or components asynchronously for better performance. |
| **Code Splitting** | Vite automatically creates separate chunks for each dynamically imported module. |
| **Minimal UI Demo** | A simple interface using TailwindCSS classes to visualize the lazy loading flow. |

## Tech Stack

- [Vite](https://vitejs.dev/) – Fast build tool for modern web apps  
- [TypeScript](https://www.typescriptlang.org/) – Type-safe JavaScript  
- [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS styling  

## Getting Started

### Clone the repo
```bash
git clone https://github.com/nikitapoyarekar05/scattegories.git
cd scattegories
```

### Install dependencies
```bash
npm install
```

### Run the dev server
```bash
npm run dev
```
The app will start at `http://localhost:5173` by default.

## Project Structure

```
scattegories/
│
├── src/
│   ├── main.ts               # Entry file
│   ├── App.tsx               # Root component
│   ├── components/
│   │   ├── Dashboard.tsx
│   │   ├── CategoryLoader.tsx
│   │   ├── categories/
│   │   │   ├── CartoonCharacters.ts
│   │   │   ├── Flowers.ts
│   │   │   ├── Shout.ts
│   │   │   ├── Nicknames.ts
│   │   │   └── RawFood.ts
│   └── ...
│
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Author
Built with ❤️ by [@nikitapoyarekar05](https://github.com/nikitapoyarekar05)
