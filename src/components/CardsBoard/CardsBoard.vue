<template>
  <div class="cardsboard">
       <div v-for="carte in cartes" :key="carte.id">
         <!-- Passer les props à Card et faire l'affichage d'une card (enfin de toutes du coup)-->
         <Card :carte = 'carte' />
       </div>
  </div>
  
</template>


<script>
import './styles.css';
import Card from '@/components/CardsBoard/Card/Card.vue';
import data from '/src/data.js'

export default {
  name: 'CardsBoard',
  components: {
    Card
  },
  data: data,
}
</script>
