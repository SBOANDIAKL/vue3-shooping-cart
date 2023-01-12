<template>
  <div class="col-sm mb-3">
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top mx-auto"
        :src="image"
        alt="Card image cap"
        width="50%"
      />
      <div class="card-body">
        <h5 class="card-title">{{ props.title.slice(0, 30) }}</h5>
        <p class="card-text">
          {{ props.description.slice(0, 50) }}
        </p>
        <p class="card-text">Price: ${{ props.price }}</p>
        <router-link
          class="text-warning btn btn-danger"
          :to="'/home/' + props.id"
          >View Product</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["id", "title", "description", "price", "image"]);
</script>

<style scoped>
.card-img-top {
  width: 50%;
  height: 200px;
}
.card-title {
  height: 40px;
}
a {
  color: aliceblue;
}
</style>
