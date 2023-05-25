<template>
  <header class="my-header">
    <img src="../../assets/icons/logo.svg" alt="logo" class="my-header__icon" />
    <nav class="my-header__navigation">
      <router-link to="/" active-class="router-link-active">Форма</router-link>
      <router-link to="/preview" active-class="router-link-active"
        >Превью</router-link
      >
    </nav>
  </header>
</template>

<style scoped>
.my-header {
  @apply relative flex justify-center items-center h-17 shadow;
}

.my-header__icon {
  @apply absolute left-6 top-6 cursor-pointer active:scale-95 transition-all;
}

.my-header__navigation {
  @apply flex gap-6;
}

.my-header__navigation a {
  @apply transition-all hover:text-primary active:scale-95;
}

.router-link-active {
  @apply text-primary-dark;
}
</style>
