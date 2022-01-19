<template>
  <div class="memorygame">
      <Header/>
      <CardsBoard/>
  </div>
</template>


<script>
// @ is an alias to /src
import Header from '@/components/Header/Header.vue'
import CardsBoard from '@/components/CardsBoard/CardsBoard.vue'

export default {
  name: 'MemoryGame',
  components: {
    Header,
    CardsBoard
  }
}
</script>