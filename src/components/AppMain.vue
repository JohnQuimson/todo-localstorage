<script>
import { store } from '../store';

export default {
  name: 'Main',
  data() {
    return {
      store,
      todoInput: '',
    };
  },

  methods: {
    addTodo() {
      console.log('Metodo addTodo chiamato');
      if (this.todoInput.trim() != '') {
        store.todos.push(this.todoInput);
        console.log('Todo aggiunto:', this.todoInput);
        this.todoInput = '';
        console.log('Store:', store.todos);

        // Salva il todo nel local storage dopo averlo aggiunto all'array
        localStorage.setItem('todos', JSON.stringify(store.todos));
      } else {
        alert('inserisci un todo valido');
      }
    },
  },

  created() {
    // Carica i todos dal localStorage quando il componente viene creato
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON) {
      store.todos = JSON.parse(todosJSON);
    }
  },
  components: {},
};
</script>

<template>
  <h2>crea todo</h2>
  <form @submit.prevent="addTodo">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">scrivi un to-do</label>
      <input type="text" class="form-control" v-model="todoInput" />
    </div>

    <button type="submit" class="btn btn-primary">Aggiungi</button>
  </form>

  <h3>I tuoi todo:</h3>
  <ul>
    <li v-for="todo in store.todos">{{ todo }}</li>
  </ul>
</template>

<style lang="scss" scoped></style>
