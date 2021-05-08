<template>
  <b-container class="searchBarContainer">
    <h4>Movie Title</h4>
    <b-form-input
      v-model="input"
      placeholder="Enter your movie title"
    ></b-form-input>
  </b-container>
</template>
<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      input: '',
    }
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
