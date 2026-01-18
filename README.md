# Node + TypeScript Starter Template

This repository contains a **starter template** for building Node.js backends with:

- TypeScript
- Express
- CommonJS module system
- Development tooling (nodemon, ts-node)
- bun

This template sets up the folder structure, TypeScript configuration, and basic scripts to get started quickly.

---

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/AyjuYaas/nodejs-tsc-starter-template <your-folder-name>
```

### 2. Cd into your folder

```
cd <your-folder-name>
```

### 3. Install dependencies

```
bun install
```

### 4. Copy the .env file

```
mv .env.example .env
```

### 5. Change the information in package.json

Edit the author, package name and other information inside package.json, with your favorite editor

---

### 5. Change the git user (optional)

Edit the local git user email and name for the project

---

## Available Scripts

### Development mode (auto-reload)

```
bun run dev
```

### Build the project (outputs to dist/)

```
bun run build
```

### Start production build

```
bun start
```

---

## Project Status

This repository currently contains only the **starter template**.  
You can now add your own routes, controllers, database integrations, and other features for any backend project.

---

## Notes

Use this template as a starting point for any Node + TypeScript project.  
Add your own modules, database setup, testing, and deployment configurations as needed.
