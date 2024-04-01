<template>
    <div class="login-page">
      <div class="login-form">
        <h2>Login</h2>
        <form @submit="submitForm">
          <input type="text" v-model="username" placeholder="Username" />
          <input type="password" v-model="password" placeholder="Password" />
          <label>
            <input type="checkbox" v-model="rememberMe" />
            Remember me
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        rememberMe: false
      };
    },
    methods: {
      submitForm(event) {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
        // por meio de uma chamada HTTP ou usar uma biblioteca de gerenciamento de estado como Vuex
      }
    }
  };
  </script>
  
  <style>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-form {
    max-width: 400px;
    padding: 20px;
    background: #f7f7f7;
    border-radius: 5px;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  input[type='text'],
  input[type='password'] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
  }
  </style>