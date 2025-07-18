<!-- <template>
    <div class="about-us">
      <h1>About Us</h1>
      <p>Our farm has been raising quality poultry for over a decade. We are committed to sustainable practices and high standards in all that we do.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutusPage',
  }
  </script>
  
  <style scoped>
  .about-us {
    padding: 20px;
  }
  </style>
   -->


   <template>
    <div class="about-us">
      <h1 class="title">About Us</h1>
      <p class="description">
        Our farm has been raising quality poultry for over a decade. We are committed to sustainable practices and high standards in all that we do.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutusPage',
  }
  </script>
  
  <style scoped>
  .about-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    min-height: 100vh;
    background: linear-gradient(135deg, #1e1e2f, #3a3a5f);
    color: #e0e0e0;
    font-family: 'Arial', sans-serif;
    text-align: center;
  }
  
  .title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }
  
  .description {
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 600px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  </style>
  