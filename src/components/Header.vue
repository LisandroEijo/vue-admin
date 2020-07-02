<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/gallery">Gallery</router-link>
    <router-link to="/team">Team</router-link>
    <router-link to="/signin">
      <button>Sign In</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.nav {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    font-family: $title-text;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
  }
  button {
    padding: 0.5em 1rem;
  }
}
.light-mode {
  .nav a {
    color: black;
  }
}
</style>
