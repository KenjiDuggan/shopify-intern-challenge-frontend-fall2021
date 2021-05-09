<template>
  <b-container class="searchBarContainer">
    <h4>Movie Title</h4>
    <b-input-group>
      <b-input-group-prepend>
        <span class="input-group-text">
          <font-awesome-icon :icon="['fas', 'search']" />
        </span>
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
      // Check if there are any previous pending requests
      if (typeof cancelToken !== typeof undefined) {
        cancelToken.cancel('Operation canceled due to new search query.')
      }
      // Save the cancel token for the current request
      cancelToken = this.$axios.CancelToken.source()

      // Try the axios request with the query that search bar contains
      try {
        const params = {
          apiKey: this.$config.omdbApiKey,
          s: this.input,
        }

        const results = await this.$axios(
          {
            params,
            baseURL: this.$config.omdbUrl,
            cancelToken: cancelToken.token,
          } // Pass the cancel token to the current request
        )

        if (results.data.Response) {
          // Search array exists, emit the new results
          const searchResults = { query: this.input, data: results.data.Search }
          this.$nuxt.$emit('searchResults', searchResults)
        } else {
          // Show request message
          this.requestMessage = results.data.Message
          this.showMessage = true
        }
      } catch (error) {
        /* eslint no-console: ["error", { allow: ["error"] }] */

        console.error(error)
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
