<template>
  <div
    class="container"
    :class="{ 'light-mode': !isDarkMode, 'dark-mode': isDarkMode }"
  >
    <Header />
    <h2>Gallery</h2>
    <div class="switch-button__container">
      <SwitchButton label="Switch Theme" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import SwitchButton from "@/components/SwitchButton/SwitchButton.vue";
export default {
  name: "Gallery",
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
