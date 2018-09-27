<template>
  <v-flex xs12   ma-3 >
  <v-card ref="productCard" color="gray darken-2" v-bind:class="{favorite: isFavorite}" class="black--text" height="80px" :to="'/details/'+product.id">
    <v-layout>
      <v-flex xs4>
        <v-card-media ma-3>
        <img :src="imageUrl"
          :alt="product.name"      
          height="80px"/>
        </v-card-media>
      </v-flex>
      <v-flex xs9>
        <v-card-title>
          <div class="headline">{{product.name}}</div>
          <div>{{product.description}}</div>
        </v-card-title>
      </v-flex>
    </v-layout>
  </v-card>
  </v-flex>
</template>

<script>
import Card from './Card.vue'
export default {
  name: 'small-card',
  mixins: [Card],
  computed: {
    imageUrl: function(){
      return require('../assets/img/' + this.product.pictures[0].url);
    }
  }
}
</script>


<style scoped>
  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    max-width: 800px;
    max-height: 50px;
    margin-bottom: 10px;
}
.favorite {
  background-color: lightgray;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
    padding: 2px 16px;
}
</style>
