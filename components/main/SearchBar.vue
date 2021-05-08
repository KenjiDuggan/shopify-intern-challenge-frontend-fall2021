<template>
  <b-container class="searchBarContainer">
    <h4>Movie Title</h4>
    <b-form-input
      v-model="input"
      placeholder="Enter your movie title"
      @change="updateMovieSearch"
    ></b-form-input>
  </b-container>
</template>
<script>
import axios from 'axios'
let cancelToken

export default {
  name: 'SearchBar',
  data() {
    return {
      input: '',
    }
  },
  methods: {
    async updateMovieSearch() {
      const url = process.env.omdbUrl
      const apiKey = process.env.omdbApiKey
      const searchTerm = this.input
      // Check if there are any previous pending requests
      if (typeof cancelToken !== typeof undefined) {
        cancelToken.cancel('Operation canceled due to new search query.')
      }
      // Save the cancel token for the current request
      cancelToken = axios.CancelToken.source()

      try {
        const results = await axios.get(
          `${url}?apikey=${apiKey}&t=${searchTerm}`,
          { cancelToken: cancelToken.token } // Pass the cancel token to the current request
        )
        this.$nuxt.$emit('searchResults', results.data)
        console.log('Results for ' + searchTerm + ': ', results.data)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
<style scoped>
.searchBarContainer {
  background-color: var(--bg-secondary);
  padding: 20px;
  border-radius: 7px;
  border: 0.5px solid rgba(160, 156, 156, 0.452);
}
</style>
