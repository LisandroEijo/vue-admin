<template>
  <div
    class="container"
    :class="{ 'light-mode': !isDarkMode, 'dark-mode': isDarkMode }"
  >
    <Header />
    <div class="about">
      <h2>This is an about page</h2>
      <div class="switch-button__container">
        <SwitchButton label="Switch Theme" />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import SwitchButton from "@/components/SwitchButton/SwitchButton.vue";
export default {
  name: "About",
  components: {
    SwitchButton,
    Header
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
.switch-button__container {
  width: 100%;
  position: absolute;
  bottom: 1.5rem;
  left: 0;
}
</style>
