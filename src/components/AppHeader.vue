<script>
export default {
  name: 'Header',
  data() {
    return {
      name: '',
      inputValue: '',
      editingName: false,
    };
  },
  mounted() {
    const savedValue = localStorage.getItem('inputValue');
    if (savedValue) {
      this.inputValue = savedValue;
    }

    const savedName = localStorage.getItem('name');
    if (savedName) {
      this.name = savedName;
    }
  },
  methods: {
    saveToLocalStorage() {
      localStorage.setItem('inputValue', this.inputValue);
    },
    toggleEditing() {
      this.editingName = !this.editingName;
      if (!this.editingName) {
        this.changeName();
      }
    },
    changeName() {
      if (this.inputValue.trim() !== '') {
        this.name = this.inputValue;
        localStorage.setItem('name', this.name);
        console.log('Nome salvato nel localStorage:', this.name); // Aggiungi il console.log qui
        this.inputValue = '';
      } else {
        alert('Il nome non può essere vuoto!');
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>Ciao {{ name }}!</h1>
    <input
      v-if="editingName"
      type="text"
      v-model="inputValue"
      @input="saveToLocalStorage"
    />
    <button @click="toggleEditing">
      {{ editingName ? 'conferma' : name ? 'cambia nome' : 'inserisci nome' }}
    </button>
  </div>
</template>

<style scoped lang="scss">
/* Stili CSS qui */
</style>
