<template>
  <div class="wrapper">
    <div class="middle-screen">
      <form id="login_form" @submit="loginCheck">
        <p>Вход в аккаунт</p>
        <input type="text" placeholder="Имя пользователя" v-model="login" required>
        <input type="password" placeholder="Пароль" v-model="password" required>
        <div class="incorrect" v-bind:class="{'visibility':error}">Неверное имя пользователи или пароль</div>
        <button type="submit" form="login_form" class="button">Войти</button>
      </form>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      login: '',
      password: '',
      error: false
    }
  },
  methods: {
    loginCheck(e) {
      e.preventDefault();
      if (this.login === 'admin' && this.password === 'admin') {
        // this.$router.push('/list');
         this.$emit("authenticated", true);
         this.$router.replace({ name: "list" });
      }
      else {
        this.error = true;
      }
    }
  }
}
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  font-size: 14px;
  padding: 6px 12px 8px;
  height: 35px;
  border-radius: 3px;
  border: 1px solid #d3d9de;
  box-sizing: border-box;
  margin-top: 15px;
  background-color: #eee;
}

p {
  margin: 0;
  margin-bottom: 25px;
  text-align: center;
  color: #333;
  font-size: 22px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6a62d2;
}

.middle-screen {
  width: 25%;
  padding: 25px;
  border-radius: 4px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  background-color: #fff;
}

.button {
  padding: 9px 16px 11px;
  cursor: pointer;
  border: 0;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: #746bde;
  color: #fff;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
}

.button:hover {
  background-color: #6a62d2;
}

.incorrect {
  color: #ff4b3b;
  border: 0;
  border-radius: 3px;
  margin: 5px 0;
  visibility: hidden;
}

.visibility {
  visibility: visible;
}
</style>