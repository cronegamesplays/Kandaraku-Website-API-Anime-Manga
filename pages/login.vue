<!-- LoginPage.vue -->
<template>
  <div class="login-page">
    <div class="background-image">
      <img src="https://iili.io/JwEEL9p.jpg" alt="Background Image">
    </div>
    <div class="login-container">
      <h1 class="title">KANDARAKU</h1>
      <div class="login-form">
        <h2 class="form-title">Fazer login</h2>
        <input
          type="text"
          placeholder="NOME DE USUÁRIO OU EMAIL"
          v-model="username"
          class="input-field"
        >
        <input
          type="password"
          placeholder="SENHA DE SUA CONTA"
          v-model="password"
          class="input-field"
        >
        <div class="form-links">
          <NuxtLink to="/recover-password" class="link">Esqueceu sua senha?</NuxtLink>
          <NuxtLink to="/register" class="link">Não possui conta?</NuxtLink>
        </div>
        <button class="login-button" @click="login">Entrar</button>
        <div class="other-login">
          <p>Outras formas de login:</p>
          <div class="other-login-icons">
            <img src="https://iili.io/JNj4kn1.png" alt="Discord Icon">
          </div>
          <p class="recommended">(Recomendado)</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>Copyright © Kandaraku Studios 2020 - 2024</p>
      <p>Todos os direitos reservados</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      // Implement your login logic here
      console.log('Username:', this.username)
      console.log('Password:', this.password)
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
/* Estilos Globais */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #1c1c1c;
  color: #fff;
}

/* Container Principal */
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}

/* Imagem de Fundo */
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Container do Login */
.login-container {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  max-width: 400px;
  width: 100%;
}

.title {
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
  color: #7a00ff;
  text-shadow: 0 0 10px rgba(122, 0, 255, 0.5);
}

/* Formulário de Login */
.login-form {
  display: flex;
  flex-direction: column;
}

.form-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.input-field {
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 16px;
}

.form-links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.link {
  color: #7a00ff;
  text-decoration: none;
  font-size: 14px;
}

.login-button {
  padding: 10px;
  background-color: #7a00ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #6200cc;
}

.other-login {
  margin-top: 20px;
  text-align: center;
}

.other-login-icons img {
  width: 40px;
  height: 40px;
  margin: 10px;
}

.recommended {
  font-size: 12px;
  color: #999;
}

/* Rodapé */
.footer {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 12px;
  color: #999;
}
</style>