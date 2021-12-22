<template>
  <div class="memorygame">
    <MemoryGame msg="Bienvenue sur le jeu de mémory"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MemoryGame from '@/components/MemoryGame.vue'

export default {
  name: 'MemoryGame',
  components: {
    MemoryGame
  }
}
</script>
