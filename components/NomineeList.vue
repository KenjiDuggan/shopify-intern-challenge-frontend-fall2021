<template>
  <b-container class="nomineeListContainer">
    <h4>Nominations</h4>
    <br />
    <div v-for="(nominee, index) in nominees" :key="index" class="movieCard">
      <b-row>
        <b-col>
          <div class="movieCardTextBlock">
            {{ nominee.Title }} ( {{ nominee.Year }} ) <br /><br />
            <b-button
              variant="success"
              class="float-right removeButton"
              @click="removeNominee(index)"
              >Remove</b-button
            >
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
<script>
export default {
  name: 'NomineeList',
  props: {
    nominees: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    removeNominee(index) {
      this.$nuxt.$emit('removeNominee', index)
    },
  },
}
</script>
<style scoped>
.nomineeListContainer {
  background-color: var(--bg-secondary);
  padding: 20px;
  border-radius: 7px;
  border: 0.5px solid rgba(160, 156, 156, 0.452);
}

.removeButton {
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
</style>
