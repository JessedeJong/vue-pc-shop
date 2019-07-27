<!-- Main template-->
<template>
  <div id="app" class="container my-5">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link><span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
    </div>
    <!-- <router-view/> -->
    <div class="row mb-3 justify-content-end">
      <div class="col-md-9">
        <h1>My online store</h1>
      </div>
      <div class="col-md-3">
        <ShoppingCart />
      </div>
      <Item
        v-for="item in forSale"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price"
      />
    </div>
  </div>
</template>

<script>
// Imports
import Item from './Item';
import ShoppingCart from './ShoppingCart';

export default {
  name: 'app',
  computed: {
    forSale() {
      return this.$store.getters.forSale;
    },
  },

  components: {
    Item,
    ShoppingCart,
  },
};
</script>

<style>

</style>
