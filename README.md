# UX Developer Intern & Web Developer Intern Challenge - Fall 2021

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## General Approach

I decided I would use this challenge as a practice to try out Test-Driven Development with NuxtJS(VueJS):

1. Decide needed features for the application, decide the pages required and then the breakdown into components required
2. Write source code required to make the pages and their components "work"(features are functional)
3. Write unit tests for each component with Vue Test Utils and Jest
4. Style components until they reach their expected designs and making a great 
5. Add snapshot tests on completed components
6. Test code manually (+ add Cypress tests if I have time)
7. Write end-to-end testing, probably going to try out Nightwatch