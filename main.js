const dataChecksForTodo = [{
    title: "teste :\)",
    check: false
  },
];

const app = new Vue({
  el: '#app',
  data: {
    dataTodo: dataChecksForTodo,
    modelTask: "",
  },
  methods: {
    saveTodo: function() {
      let vm = this;
      if (this.modelTask) {
        this.dataTodo.unshift({
          title: vm.modelTask,
          check: false
        });
      }
    },
    deleteTodo: function(index) {
        let vm = this;
        vm.dataTodo.splice(index, 1);
    }
  },
  vuetify: new Vuetify(),
});
