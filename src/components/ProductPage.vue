<!-- <template>
    <div class="products">
      <h1>Our Products</h1>
      <ul>
        <li>Fresh Eggs</li>
        <li>Whole Chickens</li>
        <li>Free-range Turkeys</li>
        <li>Organic Chicken Feed</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductsPage',
  }
  </script>
  
  <style scoped>
  .products {
    padding: 20px;
  }
  ul {
    list-style-type: none;
  }
  li {
    padding: 5px 0;
  }
  </style>
   -->


   <template>
    <div class="products">
      <h1 class="title">Our Products</h1>
      <ul class="product-list">
        <li>Fresh Eggs</li>
        <li>Whole Chickens</li>
        <li>Free-range Turkeys</li>
        <li>Organic Chicken Feed</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductsPage',
  }
  </script>
  
  <style scoped>
  .products {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    min-height: 100vh;
    background: linear-gradient(135deg, #1e1e2f, #3a3a5f);
    color: #e0e0e0;
    font-family: 'Arial', sans-serif;
  }
  
  .title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    text-align: center;
  }
  
  .product-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
  }
  
  .product-list li {
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    transition: color 0.3s ease, transform 0.2s ease;
  }
  
  .product-list li:hover {
    color: #feb47b;
    transform: scale(1.05);
  }
  </style>
  