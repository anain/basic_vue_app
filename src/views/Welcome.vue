<template>
  <div id="welcome">
    <form
        id="user-identification"
        @submit.prevent="saveName"
    >
      <p>Bonjour ! Qui êtes-vous ?</p>
      <input v-model.trim="username" placeholder="nom"><br>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>

export default {
  data () {
      return {
      username: ''
    }
  },
  mounted() {
    if (localStorage.username) {
      this.username = localStorage.username;
    }
  },
  methods : {
    saveName() {
      alert('Bonjour ' + this.username)
      localStorage.username = this.username;
      this.$router.push('records')
    }
  }
}

</script>

<style>

#welcome {
  font-size: 25px;
}

form {
  max-width: 100%;
}

input { 
  padding: 5px 5px;
  font-size: 25px;
}

</style>