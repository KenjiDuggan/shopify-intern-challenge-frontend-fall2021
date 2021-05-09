<template>
  <b-container class="nomineeListContainer">
    <h4>Nominations</h4>
    <br />
    <ul>
      <li v-for="(nominee, index) in nominees" :key="index">
        {{ nominee.Title }} ( {{ nominee.Year }} )
        <b-button variant="success" @click="removeNominee(index)"
          >Remove</b-button
        >
      </li>
    </ul>
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
</style>
