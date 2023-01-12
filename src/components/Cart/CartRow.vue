<template>
  <tr>
    <th>{{ props.id }}</th>
    <td>{{ props.title.slice(0, 20) }}</td>
    <td><img class="myImage" :src="props.image" :alt="props.title" /></td>
    <td>{{ props.price }}</td>
    <td>{{ props.qty }}</td>
    <td><button @click="removeItem" class="btn btn-danger">Remove</button></td>
  </tr>
</template>

<script setup>
import { defineProps } from "vue";
import { useStore } from "vuex";

const props = defineProps(["id", "title", "image", "price", "qty"]);

const store = useStore();
function removeItem() {
  store.commit("removeFromCart", props.id);
}
</script>
<style>
.myImage {
  width: 50px;
}
</style>
