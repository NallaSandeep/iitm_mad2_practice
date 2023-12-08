function CustomError(message) {
  this.message = message;
}
const app = new Vue({
  el: "#app",
  data: {
    message: "Test",
  },
  methods: {
    imageTest: async function () {
      url = "http://localhost:5000/api/users/1/post/7/image";
      fetch(url)
        .then((response) => {
          console.log(response);
          if (response.ok) {
            console.log("Success");
          } else {
            console.log("error");
            throw new CustomError("Invalid response", response.status);
          }
          return response.json();
        })
        .then((data) => {
          const url = window.URL.createObjectURL(
            new Blob([data.image, { type: "image/png" }])
          );
          const link = document.createElement("a");
          console.log(link);
          link.href = url;
          this.message = link;
          link.setAttribute("download", fileName);

          // Force download
          link.click();
        })
        .catch((error) => {
          console.log("caught error: " + error.message);
        });
    },
  },
});
