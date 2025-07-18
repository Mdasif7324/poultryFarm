<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About Us</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/contact">Contact</router-link>
      <router-view :key="$route.fullPath" /> -->
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
