<template>
    <section>
      <slot></slot>
    </section>
</template>


<style scoped>
section {
  max-width: 40rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 20px;
}

h2 {
  text-align: center;
}
</style>