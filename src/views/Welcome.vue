<template>
  <div id="welcome">
    <form
        id="user-identification"
        @submit.prevent="saveName"
    >
      <p>Bonjour ! Qui êtes-vous ?</p>
      <input v-model.trim="username"> 
    </form>
  </div>
</template>

<script>

export default {
  data () {
      return {
      username: 'nom'
    }
  },
  methods : {
    saveName() {
      alert('Bonjour' + this.username)
      this.$router.push('records')
    }
  }
}

</script>

<style>

#welcome {
  font-size: 25px;
}

input { 
  padding: 5px 5px;
  font-size: 25px;
}

</style>