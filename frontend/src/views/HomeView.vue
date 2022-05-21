<template>
  <div class="home">
    <li v-for="book in books" :key="book.isbn">
      <router-link :to="{ name: 'about', params: { bookId: book.id } }">
        {{ book.id }}. {{ book.naziv }}, {{ book.isbn }}</router-link
      >
    </li>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  async mounted() {
    const response = await fetch("http://localhost:3000/knjige");
    const data = await response.json();
    this.books = data;
  },
  data: () => ({
    books: [],
  }),
};
</script>
