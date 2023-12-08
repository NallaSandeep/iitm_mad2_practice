const Home = Vue.component("home", {
  template: `
  <div>
    <p>
      <router-link to="/sub1">Sub1</router-link>
      <router-link to="/sub2">Sub2</router-link>
    </p>
  <router-view></router-view>
</div>
  `,
  // router: new VueRouter({
  //   routes: [
  //     {
  //       path: "/sub1",
  //       component: Sub1,
  //     },
  //     {
  //       path: "/sub2",
  //       component: Sub2,
  //     },
  //   ],
  // }),
});

const Sub1 = Vue.component("sub1", {
  template: `
  <div>Sub1</div>
  `,
});

const Sub2 = Vue.component("sub2", {
  template: `
  <div>Sub2</div>
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
