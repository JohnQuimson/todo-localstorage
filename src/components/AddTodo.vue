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
    <h2>Crea Task</h2>
    <form @submit.prevent="addTodo">
      <div class="custom-container">
        <input
          type="text"
          class="form-control"
          v-model="todoInput"
          placeholder="scrivi la tua task"
        />
        <button type="submit" class="btn-custom my-3">Aggiungi</button>
      </div>

      <!-- <router-link type="sumbit" class="btn btn-primary" :to="{ name: 'home' }"
        >add</router-link
      > -->
    </form>

    <router-link :to="{ name: 'home' }" class="go-back">
      <i class="fa-solid fa-xmark"></i
    ></router-link>
  </main>
</template>

<style scoped lang="scss">
h2 {
  color: #fbfbfc;
  width: 90%;
  margin: 20px auto;
}

.custom-container {
  width: 90%;
  margin: 30px auto 0;

  .btn-custom {
    background-color: #752fd0;
    color: white;
    padding: 5px 10px;
    font-size: 16px;
    border: none;
    border-radius: 10px;

    &:hover {
      background-color: #8a5bc9;
    }
  }
}

.go-back {
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #331755;

  &:hover {
    color: #8a5bc9;
  }
}
</style>
