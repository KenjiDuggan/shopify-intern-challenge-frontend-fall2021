<template>
  <b-container class="completionListContainer">
    <b-alert show variant="success">You have completed 5 nominations!</b-alert>
    <br />
    <b-row>
      <b-col class="jsonContainer">
        {{ nominees }}
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col md="3">
        <button class="jsonButton" @click="copyJSON">
          <font-awesome-icon :icon="['fas', 'database']" /> Copy JSON Data
        </button>
      </b-col>
      <b-col md="3">
        <ShareNetwork
          network="email"
          :url="this.baseUrl"
          title="OMDB Nominations"
          description="Here are my top 5 movie nominations!"
          quote=""
          hashtags="Shopify,Shoppies,OMDB,internships"
          class="emailButton"
        >
          <font-awesome-icon :icon="['fas', 'envelope']" />
          <span>Share with Email</span>
        </ShareNetwork>
      </b-col>
      <b-col md="3">
        <ShareNetwork
          network="facebook"
          :url="this.baseUrl"
          title="OMDB Nominations"
          description="Here are my top 5 movie nominations!"
          quote=""
          hashtags="Shopify,Shoppies,OMDB,internships"
          class="fbButton"
        >
          <font-awesome-icon :icon="['fab', 'facebook']" />
          <span>Share on Facebook</span>
        </ShareNetwork>
      </b-col>
      <b-col md="3">
        <ShareNetwork
          network="twitter"
          :url="this.baseUrl"
          title="OMDB Nominations"
          description="Here are my top 5 movie nominations!"
          quote=""
          hashtags="Shopify,Shoppies,OMDB,internships"
          class="twitterButton"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <span>Share on Twitter</span>
        </ShareNetwork>
      </b-col>
    </b-row>
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
  data() {
    return {
      baseUrl: 'https://shoppiesfall2021.netlify.app/',
    }
  },
  methods: {
    async copyJSON() {
      try {
        await this.$copyText(JSON.stringify(this.nominees))
      } catch (e) {
        /* eslint no-console: ["error", { allow: ["error"] }] */

        console.error(e)
      }
    },
  },
}
</script>
<style scoped>
.completionListContainer {
  background-color: var(--bg-secondary);
  padding: 20px;
  border-radius: 7px;
  border: 0.5px solid rgba(160, 156, 156, 0.452);
}
.jsonContainer {
  height: 150px;
  overflow-y: scroll;
}
.jsonButton {
  background-color: var(--button-primary);
  font-size: 1.1rem;
  padding: 6px;
  border-radius: 20px;
  color: white;
  margin-top: -7px;
  border: none;
}
.emailButton {
  background-color: #b61d1d;
  font-size: 1.1rem;
  padding: 10px;
  border-radius: 20px;
  color: white;
  border: none;
}
.twitterButton {
  background-color: #00a2ff;
  font-size: 1.1rem;
  padding: 10px;
  border-radius: 20px;
  color: white;
  border: none;
}
.fbButton {
  background-color: #0026ff;
  font-size: 1.1rem;
  padding: 10px;
  border-radius: 20px;
  color: white;
  border: none;
}
</style>
