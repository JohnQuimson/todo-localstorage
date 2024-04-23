<script>
import { store } from '../store';

export default {
  name: 'AddTodo',
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
        this.$router.push({ name: 'home' });
      } else {
        alert('inserisci un todo valido');
      }
    },
  },
};
</script>

<template>
  <main>
    <h2>crea todo</h2>
    <form @submit.prevent="addTodo">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >scrivi un to-do</label
        >
        <input type="text" class="form-control" v-model="todoInput" />
      </div>

      <button type="submit" class="btn btn-primary">Aggiungi</button>
      <!-- <router-link type="sumbit" class="btn btn-primary" :to="{ name: 'home' }"
        >add</router-link
      > -->
    </form>
  </main>
</template>

<style scoped lang="scss">
/* Stili CSS qui */
</style>
