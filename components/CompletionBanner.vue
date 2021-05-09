<template>
  <b-container class="completionListContainer">
    <b-alert show variant="success">You have completed 5 nominations!</b-alert>
  </b-container>
</template>
<script>
export default {
  name: 'CompletionBanner',
  props: {
    nominees: {
      type: Array,
      default: () => [],
    },
  },
  methods: {},
}
</script>
<style scoped>
.completionListContainer {
  background-color: var(--bg-secondary);
  padding: 20px;
  border-radius: 7px;
  border: 0.5px solid rgba(160, 156, 156, 0.452);
}
</style>
