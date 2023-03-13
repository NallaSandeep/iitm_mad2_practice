const app = new Vue({
  el: "#app",
  data: {
    lowerColor: "black",
    upperColor: "black",
    numberColor: "black",
    specialColor: "black",
    password: "",
  },
  methods: {
    changeColor: function () {
      if (/[a-z]/.test(this.password)) {
        this.lowerColor = "green";
      } else {
        this.lowerColor = "black";
      }
      if (/[A-Z]/.test(this.password)) {
        this.upperColor = "green";
      } else {
        this.upperColor = "black";
      }
      if (/[0-9]/.test(this.password)) {
        this.numberColor = "green";
      } else {
        this.numberColor = "black";
      }
      if (/[^A-Za-z 0-9]/.test(this.password)) {
        this.specialColor = "green";
      } else {
        this.specialColor = "black";
      }
    },
  },
  computed: {
    style1: function () {
      return "{color:green}";
    },
  },
});
