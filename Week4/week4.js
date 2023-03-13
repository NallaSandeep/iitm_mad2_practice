let app = new Vue({
  el: "#app",
  data: {
    message: "hello",
  },
  methods: {
    updateMsg: function () {
      this.message = "Updated message";
    },
  },
  computed: {
    updateStyle: function () {
      return this.message.length + "px";
    },
  },
});