<template>
  <div class="allscores">
      <Header />
      <AllScores />
  </div>
</template>


<script>
// @ is an alias to /src
import Header from '@/components/Header/Header.vue'
import AllScores from '@/components/AllScores/AllScores.vue'

import data from '/src/data.js'

export default {
  name: 'MemoryGame',
  components: {
    Header,
    AllScores,
  },
    data: data,

}
</script>