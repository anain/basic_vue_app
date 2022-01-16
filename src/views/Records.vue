<template>
  <div id="records">
    <form
        id="record-description"
        @submit.prevent="saveRecord"
    >
    <label for="address">Adresse ou mieu du signalement</label><br/>
    <textarea id="address" v-model="address" name="address" placeholder="Ex: 1 Cours de la Marne, Bordeaux"></textarea><br/>
    <label for="description">Description de la situation</label><br/>
    <textarea id="description" v-model="description" name="description" placeholder="2 personnes en situation de malnutrition"></textarea><br/>
    <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>

import { db } from "../main.js"; 
import { collection, addDoc } from "firebase/firestore"; 

export default {
  name: 'Records',
  data () {
      return {
      author: '',
      address: '',
      description: ''
    }
  },
  methods : {
    async saveRecord() {
      const docRef = await addDoc(collection(db, "records"), {
        author: this.author,
        adress: this.address,
        description: this.description,
        timestamp: Date.now()
        })
      console.log("Document written with ID: ", docRef.id)
      }
  }
}

</script>

<style>

#records {
  width: 100%;
  font-size: 25px;
  height: 500px;
}

form {
  max-width: 100%;
}

textarea {
  font-size: 20px;
  resize : none;
  min-width: 80%;
  min-height: 300px;
  margin-left: 5%;
  margin-right: 5%;
  border: 1px solid #000;
  padding: 0;
  margin: 0;
  overflow:scroll;
}

</style>