const app = new Vue({
  el: "#app",
  data: {
    x: 40,
    y: 50,
  },
  created() {
    console.log(this.x);
  },
});
