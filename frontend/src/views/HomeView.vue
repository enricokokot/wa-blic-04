<template>
  <div class="home">
    <li v-for="book in books" :key="book.isbn" :bookUrl="book.url">
      <router-link :to="{ name: 'about', params: { bookUrl: book.url } }">
        {{ book.name }}, {{ book.authors[0] }}, {{ book.released }}</router-link
      >
    </li>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  async mounted() {
    const response = await fetch("https://www.anapioficeandfire.com/api/books");
    const data = await response.json();
    this.books = data;
  },
  data: () => ({
    books: [],
  }),
};
</script>
