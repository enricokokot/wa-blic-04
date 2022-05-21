<template>
  <div class="about">
    <router-link to="/"><h1>This is a back button</h1></router-link>
    <p>Id: {{ book.id }}</p>
    <p>Naziv: {{ book.naziv }}</p>
    <p>ISBN: {{ book.isbn }}</p>
    <p>Autori: {{ book.autori }}</p>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  props: ["bookId"],
  data: () => ({
    book: {},
  }),
  async mounted() {
    console.log(this.bookUrl);
    const response = await fetch(`http://localhost:3000/knjige/${this.bookId}`);
    const data = await response.json();
    this.book = data;
  },
};
</script>
