const app = new Vue({
  el: "#app",
  data: {
    message: "Hello World!",
    test: "",
  },
  beforeCreate: function () {
    console.log("Before Created", this.message);
  },
  created: function () {
    console.log("Created", this.message);
  },
  beforeMount: function () {
    console.log("Before mount", this.message);
  },
  mounted: function () {
    console.log("Mounted", this.message);
  },
  beforeDestroy: function () {
    console.log("Before destroy", this.message);
  },
  destroyed: function () {
    console.log("Destroyed", this.message);
  },
  beforeUpdate: function () {
    console.log("Before update", this.message);
  },
  updated: function () {
    console.log("Updated", this.message);
  },
  methods: {
    buildTest: function () {
      this.message = "Sandeep";
      console.log("Method called");
    },
  },
});
