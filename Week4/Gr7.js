const players = [
  { team: "MI", name: "Rohith" },
  { team: "DC", name: "Laxman" },
  { team: "MI", name: "SKY" },
];
const app = new Vue({
  el: "#app",
  data: {
    players: players,
  },
});
