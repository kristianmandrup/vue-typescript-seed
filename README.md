# vue-typescript-seed
A starter project for [vue-typescript](https://github.com/itsFrank/vue-typescript) using webpack.

**Now supports [Vue 2.0](https://vuejs.org/guide/)**

This seed repo comes with all you need to start building a vuejs project using typescript.

Packages included:
- vue
- vue-router
- vuex
- webpack (and all the loaders and utilities necessary)

Scripts:

`npm run dev` - will start a local dev server at localhost:8080

`npm run build` - will build your project into the /dist folder

`npm run clean` - will delete the dist folder

Setup: run `npm install`

Clone it and get started!

PS: To check for Vue 2.x compatibility use the [migration CLI](https://github.com/vuejs/vue-migration-helper)

## Install Typings

Use `dt~` to download typings from [definitely typed](https://github.com/DefinitelyTyped/DefinitelyTyped):

`typings install dt~vue dt~vue-router --global --save`

vuex typings:

`typings install vuex=github:vuejs/vuex/types/index.d.ts#4a6dee4a83f49dcbb24043ae1a3f08a85eb1fd45 --save`

## TODO

Add support PostCSS ;)