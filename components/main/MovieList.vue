<template>
  <b-container class="movieListContainer">
    <h4>Results for {{ query }}</h4>
    <br />
    <ul>
      <li v-for="(movie, index) in movies" :key="index">
        {{ movie.Title }} ( {{ movie.Year }} )
        <b-button
          variant="success"
          :disabled="disablingList[index]"
          @click="nominateMovie(movie)"
          >Nominate</b-button
        >
      </li>
    </ul>
  </b-container>
</template>
<script>
export default {
  name: 'MovieList',
  props: {
    query: {
      type: String,
      default: () => '',
    },
    movies: {
      type: Array,
      default: () => [],
    },
    disablingList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    nominateMovie(nomineeMovie) {
      this.$nuxt.$emit('nomineeMovie', nomineeMovie)
    },
  },
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
