const app = new Vue({
  el: "#app",
  data: {
    errors: [],
    name: null,
    age: null,
    movie: null,
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }
      this.errors = [];
      if (!this.name) {
        this.errors.push("Name is required");
      }
      if (!this.age) {
        this.errors.push("Age is required");
      }
      e.preventDefault();
    },
  },
});
