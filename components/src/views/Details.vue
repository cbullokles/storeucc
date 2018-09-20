<template>
  <v-flex xs12>
    <v-card>
      <v-card-media>
      <img :src="imageUrl" height="400px" />
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{productDetails.name}}</h3>
          <div>{{productDetails.description}}</div>
        </div>
      </v-card-title>
      <v-card-actions align-start>
        <v-btn @click="back">Back</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import {products} from '../resources/products.js'
import router from '../router.js'

export default {
  name: 'details',
  props : [
    'id'
  ],
  data: () => ({
    productDetails: {}
  }),
  methods : {
    back : function(){
      router.go(-1);
    }
  },
  mounted () {
    products.findById( this.id ).then( response => {
      console.log( 'Buscando producto ' + this.id);
      this.productDetails = response;
    });
  },
  computed: {   
    imageUrl: function(){
      if(this.productDetails.pictures)
        return require('../assets/img/' + this.productDetails.pictures[0].url);
      else
        return '';
    }
  },
  created () {
  }
}
</script>

<style>

</style>
