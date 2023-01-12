<template>
  <div class="container">
    <div class="mx-auto">
      <p class="bg-success">
        <b>Total: ${{ getTotal }}</b>
      </p>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Qty</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        <cart-row
          v-for="cart in carts"
          :key="cart.id"
          :id="cart.id"
          :title="cart.title"
          :image="cart.image"
          :price="cart.price"
          :qty="cart.qty"
        ></cart-row>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import CartRow from "./CartRow.vue";
const store = useStore();
const carts = store.state.carts;

const getTotal = computed(() => {
  return store.getters.getTotal;
});
</script>
