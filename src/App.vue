<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  background: $dark-bg;
  font-size: 16px;
  @include body;
}
h1 {
  @include title1;
}
h2 {
  @include title2;
}
h3 {
  @include title3;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a {
  color: $teal;
  &:hover {
    color: saturate(lighten($teal, 10), 20);
  }
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
