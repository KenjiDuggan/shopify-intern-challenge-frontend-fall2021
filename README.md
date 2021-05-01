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


## Features Chosen

### Core Features & Requirements
* Search OMDB and display movies using [OMDB's API](http://www.omdbapi.com/apikey.aspx) 
* Each search result should list film title, year of release and a button to nominate it (Keep track of nominated movies) 
* Updates to the search terms will update the result list  
* Movies in the search results can be added and removed from search results  
* If a movie is nominated then its nomination button should be disabled
* If user reaches five nominations, display an information banner saying so

### Extra Features & Requirements
* Maintained nomination list state when user leaves page
* Animations everywhere it seems appropriate
* Create shareable links (to share movies list I assume)
* Third-party authentication and user profile page
and potentially more


## Hosting Details

Coming soon, probably going to use Heroku
