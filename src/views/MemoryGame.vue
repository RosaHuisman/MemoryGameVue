<template>
  <div class="memorygame">
      <Header/>
      <NewGame/>
      <CardsBoard/>
  </div>
</template>


<script>
// @ is an alias to /src
import Header from '@/components/Header/Header.vue'
import NewGame from '@/components/NewGame.vue'
import CardsBoard from '@/components/CardsBoard/CardsBoard.vue'

export default {
  name: 'MemoryGame',
  components: {
    Header,
    NewGame,
    CardsBoard
  }
}
</script>