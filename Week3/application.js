let app = new Vue({
  el: "#app",
  data: {
    message: "Hello World",
    visitorName: "",
    sessionTimeout: 10000,
    visitors: [],
    messageStyle: {
      backgroundColor: "yellow",
      padding: "2em",
      fontSize: "20px",
    },
    fontSize: 10,
  },
  methods: {
    sayHi() {
      this.message = "Hi !!";
      if (this.visitorName.length !== 0) {
        this.visitors.push(this.visitorName);
      }
      this.visitorName = "";
      this.fontSize += 1;
    },
  },
  computed: {
    count: function () {
      return this.visitors.length;
    },
  },
});
setInterval(() => {
  app.sessionTimeout -= 1;
}, 1000);
