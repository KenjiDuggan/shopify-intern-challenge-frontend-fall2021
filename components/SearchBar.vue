<template>
  <b-container class="searchBarContainer">
    <h4>Movie Title</h4>
    <b-input-group>
      <b-input-group-prepend>
        <span class="input-group-text"><fa :icon="['fas', 'search']" /></span>
      </b-input-group-prepend>
      <b-form-input
        v-model="input"
        placeholder="Enter your movie title"
        @change="updateMovieSearch"
      ></b-form-input>
    </b-input-group>
    <div v-if="showMessage">{{ requestMessage }}</div>
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
      requestMessage: '',
      showMessage: false,
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

      // Try the axios request with the query that search bar contains
      try {
        const results = await axios.get(
          `${url}?apikey=${apiKey}&s=${searchTerm}`,
          { cancelToken: cancelToken.token } // Pass the cancel token to the current request
        )
        if (results.data.Response) {
          // Search array exists, emit the new results
          const searchResults = { query: searchTerm, data: results.data.Search }
          this.$nuxt.$emit('searchResults', searchResults)
        } else {
          // Show request message
          this.requestMessage = results.data.Message
          this.showMessage = true
        }
      } catch (error) {
        alert(error)
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
