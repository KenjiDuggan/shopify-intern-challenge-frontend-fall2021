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
      <!-- Search Bar Desktop Container -->
      <b-col cols="12">
        <SearchBar />
      </b-col>
    </b-row>
    <br /><br /><br />
    <b-row>
      <!-- Movie List Desktop Container -->
      <b-col cols="6">
        <MovieList />
      </b-col>
      <!-- Nomine List Desktop Container -->
      <b-col cols="6">
        <NomineeList />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SearchBar from '../components/main/SearchBar'
import MovieList from '../components/main/MovieList'
import NomineeList from '../components/main/NomineeList'

export default {
  components: {
    SearchBar,
    MovieList,
    NomineeList,
  },
  layout: (ctx) => (ctx.isMobile ? 'mobile' : 'default'),
  data() {
    return {
      title: 'The Shoppies',
      checked: false,
    }
  },
  computed: {
    colorMode() {
      if (this.checked) {
        return 'Dark'
      } else {
        return 'Light'
      }
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
}
</script>

<style scoped>
.pageBody {
  color: var(--color);
}
</style>
