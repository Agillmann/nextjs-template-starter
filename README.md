# STARTER PLATFORM

### Stack

- TypeScript - 4.5.5 - [Doc](https://www.typescriptlang.org/docs/)

- React - 17.0.2 - [Doc](https://fr.reactjs.org/)

- Nextjs - 12.0.10 - [Doc](https://nextjs.org/)

- EmotionJS - 11.6.0 - (CSS-in-JS) [Doc](https://emotion.sh/docs/introduction)

- Material UI - 5.4.0 - [Doc](https://material-ui.com/)

- Hightcharts - 9.3.3 - [Doc](https://www.highcharts.com/docs/index)

- Zustand - 3.6.9 - (State Management) [Doc](https://github.com/pmndrs/zustand)

- Axios - 0.25.0 - (Data Fetching) [Doc](https://axios-http.com/docs/intro)

- SWR - 1.2.1 - (Data Fetching) [Doc](https://swr.vercel.app/)

- Cypress - 9.4.1 - (E2E testing) [Doc](https://docs.cypress.io/examples/examples/recipes)

- Husky (Git Hooks) [Doc](https://typicode.github.io/husky/#/)

- ESLint + Prettier (Formatting) [ESLint rules](https://eslint.org/docs/rules/)

---

## Getting Started

Prerequisites:

- npm (>= version 14.10) (https://nodejs.org/en/download/)
- docker, docker-compose (Windows : https://docs.docker.com/docker-for-windows/install/, Linux: https://docs.docker.com/engine/install/ubuntu/, Amazon EC2: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html)

### 🏡 Local Development

- Install deps

```bash
npm run install:clean
```

- Start development

```bash
npm run dev
```

- Format all project with prettier

```bash
npm run format
```

- Check ESLint warnings or errors

```bash
npm run lint
```

- Test deployment with docker-compose

```bash
docker-compose up --build
```

- Check updates

```bash
# Install package
npm install -g npm-check-updates

# Check, change and upgrade
ncu && ncu -u && npm run install:clean
```

### 🚀 Deployment

- Test deployment with docker-compose

```bash
docker-compose up --build
```

- Run docker-compose in daemon mode

```bash
docker-compose up -d
```

## 📦️ File Structure

```bash
tree -I 'node_modules'

├── components      # Components folder
│   ├── elements    # Simple components
│   ├── layouts     # Layouts (sidebar, navbar...)
│   ├── modules     # More complexe components (Charts, Overview..)
│   └── templates   # Pages to render
├── config          # Config
├── constants       # Const and TS types
├── cypress         # E2E testing
├── hooks           # Custom Hooks
├── pages           # Routes
├── public          # Public folder (assets, favicon, doc ...)
├── store           # Store (state management)
├── styles          # Globales Styles folder
└── utils           # Utils folder
```
