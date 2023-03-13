Vue.component("comp1", {
  template: "<h4>This is {{name}}</h4>",
  data: function () {
    return {
      name: "Component 1",
    };
  },
});

const app = new Vue({
  el: "#app",
});
