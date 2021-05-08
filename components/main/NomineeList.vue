<template>
  <b-container class="nomineeListContainer">
    <h4>Nominee List will go here</h4>
    <br />
    <ul>
      <li>Title (Year) <button>Remove</button></li>
      <li>Title (Year) <button>Remove</button></li>
      <li>Title (Year) <button>Remove</button></li>
    </ul>
  </b-container>
</template>
<script>
export default {
  name: 'NomineeList',
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
