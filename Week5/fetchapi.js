function CustomError(message) {
  this.message = message;
}
const app = new Vue({
  el: "#app",
  data: {
    message: "Test",
  },
  methods: {
    fetchTest: async function () {
      url = "https://api.github.com/users/NallaSandeep1254";
      fetch(url)
        .then((response) => {
          if (response.status === 200) {
            console.log("Success");
          } else {
            console.log("error");
            throw new CustomError("Invalid response", response.status);
          }
          return response.json();
        })
        .then((data) => {
          this.message = data.login;
        })
        .catch((error) => {
          console.log("caught error: " + error.message);
        });
    },
  },
});
