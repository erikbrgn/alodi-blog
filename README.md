# Alodi (blog)

This is the blog behind Alodi, meant to document the progress of developing [Alodi](https://about.alodi.app).

## Get started

This repo uses Yarn. To get started, you must first make sure you have the correct version of node. Preferably, use `nvm` for this by doing the following `nvm use`. This command takes the listed node version in `.nvmrc` and tries to use it. If you don't have the listed node version, you'll have to install it first with `nvm install <VERSION>`.

Install dependencies:
```bash
yarn
```
Run strapi:
```bash
yarn start
```

You'll also have to build the nextjs client by navigating to the nextjs client directory. Repeat the procedure above.

Run nextjs in development mode:
```bash
yarn dev
```
## Author

[Erik Berggren](https://github.com/erikbrgn)
