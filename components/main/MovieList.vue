<template>
  <b-container class="movieListContainer">
    <h4>Results for Query</h4>
    <br />
    <ul>
      <li>Title (Year) <button>Nominate</button></li>
      <li>Title (Year) <button>Nominate</button></li>
      <li>Title (Year) <button>Nominate</button></li>
    </ul>
  </b-container>
</template>
<script>
export default {
  name: 'MovieList',
}
</script>
<style scoped>
.movieListContainer {
  background-color: var(--bg-secondary);
  padding: 20px;
  border-radius: 7px;
  border: 0.5px solid rgba(160, 156, 156, 0.452);
}
</style>
