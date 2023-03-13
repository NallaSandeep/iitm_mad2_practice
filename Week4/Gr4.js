const app = new Vue({
  el: "#app",
  data: {
    x: 0,
    y: 0,
  },
  watch: {
    x(p, q) {
      console.log(p, q);
      if (p > q && p > 10) {
        this.y = 1;
      }
    },
  },
});
for (let i = 1; i < 20; i++) {
  app.x++;
}
