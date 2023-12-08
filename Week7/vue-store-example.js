Vue.config.devtools = true;
const store = new Vuex.Store({
  state() {
    return {
      count: 1,
    };
  },
  mutations: {
    incrementCount(state, n) {
      state.count += n;
    },
  },
  actions: {
    incrementCount({ commit }) {
      commit("incrementCount", 2);
    },
  },
});

const Counter = {
  template: `<div><p>{{count}}</p><button @click="incrementCount">Click</button></div>`,
  computed: {
    count() {
      return store.state.count;
    },
  },
  methods: {
    incrementCount() {
      store.commit("incrementCount", 10);
    },
  },
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  // methods: {
  //   incrementCount() {
  //     this.count++;
  //   },
  // },
};

const app = new Vue({
  el: "#app",
  components: { Counter },
  store: store,
});
