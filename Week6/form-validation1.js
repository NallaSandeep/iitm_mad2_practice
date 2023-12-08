const app = new Vue({
  el: "#app",
  data: {
    errors: [],
    item1: 0,
    item2: 0,
    item3: 0,
    item4: 0,
  },
  computed: {
    total: function () {
      return (
        Number(this.item1) +
        Number(this.item2) +
        Number(this.item3) +
        Number(this.item4)
      );
    },
  },
  methods: {
    checkForm: function (event) {
      this.errors = [];
      if (this.total != 100) {
        this.errors.push("Total should be 100");
      }
      event.preventDefault();
    },
  },
});
