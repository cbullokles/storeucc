<template>
  <v-flex>
    <div v-for="product in productList" :key="product.id" :product="product">
      <component :is="type"
                :product="product" 
                @save-favorite="favorite">
      </component>
    </div>
  </v-flex>
</template>

<script>
import {products} from '../resources/products.js';
import LineCard from '../components/LineCard.vue';
import SmallCard from '../components/SmallCard.vue';
import BigCard from '../components/BigCard.vue';

export default {
  data : function () {
    return {
      type: 'small-card',
      productList : [],
      msg: 'Hola'
    }
  },
  methods : {
    currentView( value ){
      this.type = value+'-card';
    },
    favorite( favoriteId ) {
      alert('Favorite:'+favoriteId);
    } 
  },
  mounted () {
    products.find().then( response => {
      console.log(response);
      this.productList = response;
    });
  },
  components : {
    LineCard,
    SmallCard,
    BigCard
  }
}
</script>
