<!-- <template>
    <div class="contact">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us with any questions or orders.</p>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
  
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
  
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
      }
    },
    methods: {
      submitForm() {
        alert(`Thank you, ${this.form.name}! We'll be in touch soon.`)
        this.form = { name: '', email: '', message: '' }  // Reset the form
      },
    },
  }
  </script>
  
  <style scoped>
  .contact {
    padding: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input, textarea {
    margin-bottom: 10px;
  }
  button {
    width: 100px;
  }
  </style>
   -->


   <template>
    <div class="contact">
      <h1 class="title">Contact Us</h1>
      <p class="description">Feel free to reach out to us with any questions or orders.</p>
      <form @submit.prevent="submitForm" class="contact-form">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
  
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
  
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
        alert(`Thank you, ${this.form.name}! We'll be in touch soon.`);
        this.form = { name: '', email: '', message: '' }; // Reset the form
      },
    },
  };
  </script>
  
  <style scoped>
  .contact {
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
    margin-bottom: 20px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
  }
  
  .contact-form label {
    margin-bottom: 5px;
    font-size: 1rem;
    font-weight: bold;
  }
  
  .contact-form input,
  .contact-form textarea {
    margin-bottom: 15px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    background: #3a3a5f;
    color: #e0e0e0;
    outline: none;
    box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.5);
    transition: background 0.3s ease;
  }
  
  .contact-form input:focus,
  .contact-form textarea:focus {
    background: #57578f;
  }
  
  .contact-form button {
    width: 100%;
    max-width: 150px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: #feb47b;
    color: #1e1e2f;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.2s ease, background 0.3s ease;
  }
  
  .contact-form button:hover {
    transform: scale(1.05);
    background: #ff7e5f;
    color: #ffffff;
  }
  </style>