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
    <div v-if="store.todos == ''" class="no-task">
      <h3>Non sono presenti Tasks</h3>
      <p>premi il bottone per aggiungerne</p>
    </div>

    <div v-else>
      <h2>I tuoi To-Do:</h2>
      <ul class="p-0">
        <li class="todo" v-for="(todo, index) in store.todos">
          <span>{{ todo }}</span>
          <button class="delete-btn" @click="removeTodo(index)">
            <i class="fa-solid fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>

    <router-link
      class="btn-custom text-decoration-none"
      :to="{ name: 'addtodo' }"
      >+</router-link
    >
  </main>
</template>

<style lang="scss" scoped>
.no-task {
  margin: 50px;
  h3 {
    color: #fbfbfc;
    text-align: center;
  }

  p {
    color: #752fd0;
    font-size: 14px;
    text-align: center;
  }
}

h2 {
  color: #fbfbfc;
  width: 90%;
  margin: 20px auto;
}

ul {
  height: 70vh;
  overflow: scroll;

  li {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    width: 90%;
    margin: 20px auto;
    border-radius: 10px;

    span {
      background-color: transparent;
    }
  }
}

.delete-btn {
  background-color: transparent;
  border: none;
  color: #a73c46;

  &:hover {
    color: #d43242;
  }
}

.todo {
  background-color: #242329;
  color: white;
  list-style-type: none;
}

.btn-custom {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #752fd0;
  color: white;
  text-align: center;
  line-height: 45px;
  border-radius: 50%;
  font-size: 24px;

  &:hover {
    background-color: #8a5bc9;
  }
}
</style>
