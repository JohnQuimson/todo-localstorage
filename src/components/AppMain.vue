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

    removeTodo(index) {
      if (index >= 0 && index < store.todos.length) {
        const deletedTodo = store.todos.splice(index, 1)[0];
        console.log('Todo rimosso:', deletedTodo);
        localStorage.setItem('todos', JSON.stringify(store.todos));
      } else {
        console.error('Indice del todo non valido');
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

  <h3 v-if="store.todos == ''">Non sono presenti todo</h3>
  <div v-else>
    <h3>I tuoi todo:</h3>
    <ul>
      <li v-for="(todo, index) in store.todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">Rimuovi</button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
