function CustomError(message) {
  this.message = message;
}
CustomError.prototype = new Error();
const app = new Vue({
  el: "#app",
  data: {
    message: "Test",
    messages: [],
  },
  methods: {
    promiseTest: function () {
      validateText = new Promise((resolve, reject) => {
        if ("Test".toLowerCase() === this.message.toLowerCase()) {
          reject("Your text should not be text");
        } else {
          this.messages.push(this.message);
          resolve(this.message);
        }
      });
      validateText
        .then((data) => console.log(data))
        .then(() => console.log("sandeep"))
        .catch((error) => {
          if (error instanceof CustomError) {
            console.log(error, "catch1");
          } else {
            console.log("not met");
            throw error;
          }
        })
        .then(() => console.log("anitha"))
        .catch((error) => console.log(error, "catch2"))
        .then(() => console.log("prasad"))
        .catch((error) => console.log(error, "catch3"));
    },
  },
});
