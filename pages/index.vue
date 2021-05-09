<template>
  <b-container class="pageBody">
    <br /><br /><br />
    <b-row>
      <b-col cols="6">
        <h1 class="bold">{{ title }}</h1>
      </b-col>
      <b-col cols="6">
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="7"
          :description="colorMode + ' Mode'"
          label-for="input-horizontal"
          class="float-right"
        >
          <b-form-checkbox
            v-model="checked"
            name="check-button"
            switch
          ></b-form-checkbox>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <!-- Search Bar Component - Input Text for Movie Title Search -->
        <SearchBar />
      </b-col>
    </b-row>
    <br />
    <!-- Banner Component - Shows when there are 5 nominees in the list -->
    <b-row v-if="nomineeCount == 5">
      <b-col cols="12">
        <CompletionBanner :nominees="nominees" />
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col cols="6">
        <!-- Movie List Component - Cards Listing Movies from Search Requests -->
        <MovieList
          :query="query"
          :movies="movies"
          :disabling-list="validMovieList"
        />
      </b-col>
      <b-col cols="6">
        <!-- Nominee List Component - Cards Listing Movies That Were Selected By User For Nomination -->
        <NomineeList :nominees="nominees" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'
import NomineeList from '../components/NomineeList'
import CompletionBanner from '../components/CompletionBanner'

export default {
  components: {
    SearchBar,
    MovieList,
    NomineeList,
    CompletionBanner,
  },
  layout: (ctx) => (ctx.isMobile ? 'mobile' : 'default'),
  data() {
    return {
      title: 'The Shoppies',
      checked: false,
      movies: [],
      query: '',
      nominees: [],
      nominated: [],
    }
  },
  computed: {
    validMovieList() {
      let valid = []
      if (this.nomineeCount === 5) {
        valid = new Array(this.movies.length).fill(true)
      } else {
        // Iterate through all nominees and provide true/false array for every movie in movie search list
        this.movies.forEach((movie) => {
          valid.push(
            this.nominees.some((nominee) => nominee.imdbID === movie.imdbID)
          )
        })
      }
      return valid
    },
    colorMode() {
      if (this.checked) {
        return 'Dark'
      } else {
        return 'Light'
      }
    },
    nomineeIdList() {
      const currentNominees = this.nominees
      const nomineeIdList = []
      currentNominees.forEach((nominee) => {
        nomineeIdList.push(nominee.imdbID)
      })
      return nomineeIdList
    },
    nomineeCount() {
      return this.nominees.length
    },
  },
  watch: {
    checked() {
      if (this.checked) {
        this.$nuxt.$colorMode.preference = 'dark'
      } else {
        this.$nuxt.$colorMode.preference = 'light'
      }
    },
  },
  created() {
    // Listening for search results from SearchBar component
    this.$nuxt.$on('searchResults', (movies) => {
      this.query = movies.query
      this.movies = movies.data
    })

    // Listening for nominated movie from MovieList component
    this.$nuxt.$on('nomineeMovie', (nominee) => {
      this.nominees.push(nominee)
    })

    // Listening for ID of movie to be removed
    this.$nuxt.$on('removeNominee', (index) => {
      this.nominees.splice(index, 1)
    })
  },
}
</script>

<style scoped>
.pageBody {
  color: var(--color);
}
</style>
