var app = new Vue({
  el: "#app",
  data: {
    message: "Hello World",
    vistor_name: null,
    names: [],
    buttonStyle: "btn btn-primary",
    testStyle: "btn btn-primary",
    primaryStyle: "btn btn-primary",
    successStyle: "btn btn-success",
    theme: true,
  },
  methods: {
    sayHi: function () {
      this.message = " hi ";
      this.names.push(this.vistor_name);
      this.vistor_name = "";
      this.buttonStyle = "btn btn-success";
    },
    changeTheme: function () {
      // console.log(this);
      if (this.theme) {
        this.testStyle = this.successStyle;
        this.theme = false;
      } else {
        this.testStyle = this.primaryStyle;
        this.theme = true;
      }
    },
  },
  computed: {
    count: function () {
      return this.names.length;
    },
  },
});
