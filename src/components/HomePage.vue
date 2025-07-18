<!-- <template>
  <div class="home">
    <h1>Welcome to Our Poultry Farm</h1>
    <p>Your source for fresh poultry products, raised with care and quality.</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
</style> -->

<template>
  <div class="home">
    <div class="hero">
      <h1 class="title">Welcome to Our Poultry Farm</h1>
      <p class="subtitle">Your source for fresh poultry products, raised with care and quality.</p>
      <button class="cta-button" @click="navigateToProducts">Explore Products</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    navigateToProducts() {
      this.$router.push('/products');
    }
  }
}
</script>
<!-- 
<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #1e1e2f, #3a3a5f);
  color: #e0e0e0;
  font-family: 'Arial', sans-serif;
  text-align: center;
  /* animation: backgroundFade 5s infinite alternate; */
}

.hero {
  animation: fadeIn 1.5s ease-in-out, bounceIn 2s ease-in-out;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  animation: pulse 2s infinite;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 30px;
  opacity: 0.9;
  animation: fadeIn 2.5s ease-in-out;
}

.cta-button {
  background: #3a3a5f;
  color: #e0e0e0;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s ease, background 0.3s ease;
  animation: buttonHover 3s infinite alternate;
}

.cta-button:hover {
  transform: scale(1.1);
  background: #57578f;
  color: #ffffff;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
  }
  50% {
    text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.8);
  }
  100% {
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
  }
}

@keyframes buttonHover {
  0% {
    transform: translateY(0);
    background: #3a3a5f;
  }
  50% {
    transform: translateY(-5px);
    background: #57578f;
  }
  100% {
    transform: translateY(0);
    background: #3a3a5f;
  }
}

@keyframes backgroundFade {
  from {
    background: linear-gradient(135deg, #1e1e2f, #3a3a5f);
  }
  to {
    background: linear-gradient(135deg, #3a3a5f, #1e1e2f);
  }
}
</style> -->
