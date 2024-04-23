<script>
import { store } from '../store';

export default {
  name: 'Main',
  data() {
    return {
      store,
    };
  },

  methods: {
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
  <main>
    <h3 v-if="store.todos === ''">Non sono presenti todo</h3>
    <div v-else>
      <h3>I tuoi todo:</h3>
      <ul>
        <li v-for="(todo, index) in store.todos">
          {{ todo }}
          <button @click="removeTodo(index)">Rimuovi</button>
        </li>
      </ul>
    </div>

    <router-link
      class="btn btn-primary text-decoration-none"
      :to="{ name: 'addtodo' }"
      >+</router-link
    >
  </main>
</template>

<style lang="scss" scoped></style>
