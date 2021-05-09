<template>
  <b-container class="movieListContainer">
    <h4>Results for {{ query }}</h4>
    <br />
    <div v-for="(movie, index) in movies" :key="index" class="movieCard">
      <b-row>
        <b-col sm="5">
          <img
            class="d-block w-100 movieCardPoster"
            :src="movie.Poster"
            alt=""
          />
        </b-col>
        <b-col sm="7">
          <div class="movieCardTextBlock">
            {{ movie.Title }} ( {{ movie.Year }} ) <br /><br />
            <b-button
              variant="success"
              :disabled="disablingList[index]"
              class="float-right nominateButton"
              @click="nominateMovie(movie)"
              >Nominate</b-button
            >
          </div>
        </b-col>
      </b-row>
    </div>
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
  height: auto;
}

.movieCard {
  font-size: 1.3rem;
  overflow: hidden;
  padding: 5;
  border: none;
  border-radius: 2rem;
  margin-top: 20px;
  border: none;
  background: linear-gradient(var(--card-top), var(--card-bottom));
}

.movieCardTextBlock {
  font-size: 1em;
  position: relative;
  margin: 0;
  padding: 1em;
  border: none;
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  box-shadow: none;
  font-weight: 700;
  color: white;
}

.nominateButton {
  background-color: var(--button-primary);
  color: black;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 35px;
  border: none;
  /* padding: 14px; */
  padding: 5px 15px;
  margin: 13px;
}

.movieCardPoster {
  border-radius: 20px;
  margin: 10px;
}
</style>
