const Home = Vue.component("home", {
  template: `
  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit scelerisque
   aliquam. In convallis mauris in quam auctor vulputate. Fusce a efficitur augue. Quisque mollis
    accumsan leo at facilisis. Morbi nibh lectus, hendrerit sit amet eleifend in, lobortis hendrerit
     est. Nulla pellentesque, ex ac faucibus aliquam, libero ligula interdum tortor, id interdum diam 
      eget nisi. Curabitur ullamcorper egestas arcu, congue condimentum mi porttitor et. In sodales
       at urna in dapibus. Nunc in tempus justo. Nunc sollicitudin tellus ligula, eu vehicula diam
        pellentesque vitae. Praesent mattis eget mi at egestas.</div>
  `,
});

const About = Vue.component("about", {
  template: `
  <div>Nullam gravida nisl id urna gravida ultricies. Donec nec tortor enim. Fusce eu elit vestibulum,
   cursus nibh sed, euismod mauris. Ut fringilla, eros at accumsan suscipit, massa nisl malesuada leo,
    a bibendum enim magna eu mauris. Nulla ullamcorper rhoncus sapien ac mattis. Etiam mauris leo, interdum
     nec tristique et, elementum a eros. Vestibulum pretium dictum est sit amet iaculis. Nulla tincidunt nisi
      id augue dictum luctus. Pellentesque et sapien purus. Aenean eu felis at nisi varius luctus et nec
       sapien.</div>
  `,
});

const PrivacyPolicy = Vue.component("privacy-policy", {
  template: `
  <div>Vestibulum ut ante eu nunc pretium lobortis in et ipsum. Donec pretium turpis non nisi varius eleifend.
   Phasellus lacinia blandit ligula, non malesuada tortor venenatis eu. Fusce lectus purus, fermentum vitae
    tellus nec, venenatis bibendum sem. Morbi eu volutpat nisi. Cras sem nisi, bibendum sed nibh a, vehicula
     sagittis dui. Morbi cursus elit id mi eleifend rhoncus. Proin placerat nulla ipsum, eu aliquet lorem
      commodo eu. Duis posuere leo ut bibendum dictum. Mauris ante tellus, sagittis nec suscipit vitae,
       pellentesque in massa. Etiam semper mauris sit amet velit consequat, at laoreet nisl finibus. Sed
        iaculis elit a est dapibus varius. Aliquam a felis mauris.</div>
  `,
});

const User = Vue.component("user", {
  template: `
  <div>{{$route.params.id}}</div>
  `,
});

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/privacy-policy",
    component: PrivacyPolicy,
  },
  {
    path: "/user/:id",
    component: User,
  },
];

const router = new VueRouter({
  routes,
});
const app = new Vue({
  el: "#app",
  router: router,
});
