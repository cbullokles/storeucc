<template>
  <div class="card" @click="handleClick(employee.Id)" >
    <img src="https://image.flaticon.com/icons/svg/147/147144.svg" alt="Avatar" style="width:10%"/>
      <div class="container">
        <h4><b>{{employee.Name}}</b></h4> 
        <p>{{employee.Position}}</p> 
      </div>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  name: 'big-card',
  mixins: [Card]
}
</script>


<style scoped>
  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    max-width: 300px;
    margin-bottom: 10px;
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
