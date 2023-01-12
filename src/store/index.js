import { createStore } from "vuex";

export default createStore({
  state: {
    datas: [],
    carts: [],
    qty: 0,
    total: 0,
    foundItem: -1,
  },
  getters: {
    getTotal(state) {
      state.total = 0;
      let totalPrice = 0;
      state.carts.forEach((cart) => {
        totalPrice = state.total += cart.price * cart.qty;
      });
      // console.log("getter called" + totalPrice);
      return totalPrice.toFixed(2);
    },
  },
  mutations: {
    addToCart(state, payload) {
      state.carts.push(payload);
      state.qty++;
      // console.log("Added to Cart");
    },
    findCartItem(state, n) {
      state.foundItem = -1;
      console.log(n);
      const found = state.carts.findIndex((cart) => cart.id == n);
      return found;
    },
    removeFromCart(state, n) {
      const index = state.carts.findIndex((cart) => cart.id == n);
      state.carts.splice(index, 1);
      state.qty--;
    },
  },
  actions: {
    getItem(state, n) {
      return state.commit("findCartItem", n.id);
    },
  },
  modules: {},
});
