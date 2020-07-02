<template>
  <div
    class="container"
    :class="{ 'light-mode': !isDarkMode, 'dark-mode': isDarkMode }"
  >
    <p class="request">
      don't you have an account
      <router-link to="/request">click me</router-link>
    </p>
    <div class="login">
      <img src="@/assets/logo-admin.svg" alt />
      <h2>Login to this:</h2>
      <input type="email" placeholder="Your email" />
      <input type="password" placeholder="Your password" />
      <button>Sign In</button>
      <router-link to="/recover">Forgot your pass?</router-link>
      <SwitchButton label="Switch Theme" />
    </div>
  </div>
</template>

<script>
import SwitchButton from "@/components/SwitchButton/SwitchButton.vue";
export default {
  name: "SignIn",
  components: {
    SwitchButton
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  @include centered;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  max-width: 350px;
}
label {
  display: block;
  margin: 1.5em;
}
input[type="password"],
input[type="email"],
input[type="text"] {
  border-radius: 5px;
  line-height: 1;
  width: 100%;
  padding: 1rem 0.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s;
  &:focus {
    background: white;
  }
}

a {
  display: inline-block;
  margin: 1.5rem 0;
}
.request {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  margin: 0;
  a {
    margin: 0;
  }
}
</style>
