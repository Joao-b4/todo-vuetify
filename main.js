const dataChecksForTodo = [{
    title: "teste :\)",
    check: false
  },
];

let taskValue = "";

const app = new Vue({
  el: '#app',
  data: {
    dataTodo: dataChecksForTodo,
    modelTask: taskValue,
  },
  methods: {
    saveTodo: function() {
           let vm = this;
      if (this.modelTask != "") {
        this.dataTodo.unshift({
          title: vm.modelTask,
          check: false
        });

      }

    },
    deleteTodo: function(index) {
        let vm = this;
      if (index != 0) {
        vm.dataTodo.splice(index, index);
      } else {
        vm.dataTodo.shift();
      }
    }
  },
  vuetify: new Vuetify(),
});
