<template>
  <div class="about">
    <router-link to="/"><h1>This is a back button</h1></router-link>
    <p>Name: {{ book.name }}</p>
    <p>Authors: {{ book.authors }}</p>
    <p>ISBN: {{ book.isbn }}</p>
    <p>Pages: {{ book.numberOfPages }}</p>
    <p>Publisher: {{ book.publisher }}</p>
    <p>Country: {{ book.country }}</p>
    <p>Number of characters: {{ book.characters.length }}</p>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  props: ["bookUrl"],
  data: () => ({
    book: {},
  }),
  async mounted() {
    console.log(this.bookUrl);
    const response = await fetch(`${this.bookUrl}`);
    const data = await response.json();
    this.book = data;
  },
};
</script>
