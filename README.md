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


## Features & Requirements

### Core  
* Search OMDB and display movies using [OMDB's API](http://www.omdbapi.com/apikey.aspx) (done)
* Each search result should list film title, year of release and a button to nominate it (Keep track of nominated movies) (done)
* Updates to the search terms will update the result list (done)
* Movies in the search results can be added and removed from search results (done)
* If a movie is nominated then its nomination button should be disabled (done)
* If user reaches five nominations, display an information banner saying so (done)

### Extra  
* Maintained nomination list state when user leaves page
* Animations everywhere it seems appropriate
* Create shareable links (to share movies list I assume)
* Very optional: Dark mode toggle (done, easily done with nuxtjs plugin)
* Very optional: Third-party authentication and user profile page
and potentially more


## Design Inspirations
* [Desktop Version: Screenshot of Challenge Creators](https://docs.google.com/document/d/1SdR9rQpocsH5rPTOcxr9noqHRld5NJlylKO9Hf94U8U/edit#)
* [Mobile Dark Mode](https://dribbble.com/shots/15248148-Cinema-App-P1) 


## Hosting Details
Netlify, Static Build Hosting: https://shoppiesfall2021.netlify.app/
