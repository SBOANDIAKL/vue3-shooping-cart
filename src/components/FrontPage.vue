<template>
  <div class="container mt-3">
    <div class="row">
      <each-card
        v-for="data in datas"
        :key="data.id"
        :id="data.id"
        :image="data.image"
        :title="data.title"
        :description="data.description"
        :price="data.price"
      ></each-card>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import EachCard from "./EachCard.vue";

const store = useStore();
const datas = computed(() => store.state.data);
</script>
