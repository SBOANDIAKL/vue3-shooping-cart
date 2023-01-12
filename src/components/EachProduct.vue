<template>
  <nav-bar></nav-bar>
  <div class="card w-50 mx-auto" v-if="isLoading">
    <img
      class="card-img-top mx-auto"
      :src="thisProduct.image"
      :alt="thisProduct.title"
    />
    <div class="card-body">
      <h5 class="card-title">{{ thisProduct.title }}</h5>
      <p class="card-text">
        {{ thisProduct.description }}
      </p>
      <p class="card-text">Price: ${{ thisProduct.price }}</p>
      <hr />
      <div v-if="inCart">In Cart: {{ inCartt }}</div>
      <div class="m-1">
        <button class="btn btn-warning text-danger" @click="decreaseCount">
          -
        </button>
        <span width="5px" class="mx-2">{{ count }}</span>
        <button class="btn btn-success" @click="increaseCount">+</button>
        <a class="btn btn-primary ml-3 text-white" @click="addToCart">{{
          inCart ? "Update" : "Add to cart"
        }}</a>
      </div>
    </div>
  </div>
  <div v-else class="mx-auto changeHeight align-middle">
    <h1>Loading...</h1>
  </div>
</template>

<script setup>
import { computed, defineProps, onMounted, ref } from "vue";
import { useStore } from "vuex";

const props = defineProps(["id"]);
const thisProduct = ref([]);
const count = ref(1);
const store = useStore();
const inCart = ref(0);
const isLoading = ref(false);

const inCartt = computed(() => inCart.value);

function decreaseCount() {
  count.value--;
  if (count.value < 0) count.value = 0;
}
function increaseCount() {
  count.value++;
  //   console.log(count.value);
}

function addToCart() {
  const found = store.state.carts.findIndex((cart) => cart.id == props.id);
  if (found > -1) {
    store.state.carts[found].qty = count;
    inCart.value = count.value;
  } else {
    store.commit("addToCart", {
      id: thisProduct.value.id,
      title: thisProduct.value.title,
      image: thisProduct.value.image,
      price: thisProduct.value.price,
      qty: count.value,
    });
    inCart.value = count.value;
  }
}

onMounted(() =>
  fetch("https://fakestoreapi.com/products/" + props.id)
    .then((res) => res.json())
    .then((json) => {
      thisProduct.value = json;
      const foundd = store.state.carts.find(
        (cart) => cart.id == thisProduct.value.id
      );
      isLoading.value = true;
      //   console.log(foundd);
      //   console.log(foundd.qty);
      if (foundd) {
        inCart.value = foundd.qty;
        console.log(foundd.qty);
        count.value = foundd.qty;
        console.log(foundd);
      }
    })
);
</script>

<style scoped>
.card-img-top {
  height: 400px;
  width: 300px;
}
</style>
