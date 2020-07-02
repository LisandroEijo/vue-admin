<template>
  <div class="switch-button__container">
    <label for="switch">
      <input type="checkbox" id="switch" @click="toggleDarkMode" />
      <span class="switch-button__trigger"></span>
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: "SwitchButton",
  props: {
    label: String
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
input {
  display: none;
}
label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.switch-button__trigger {
  position: relative;
  display: block;
  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 25px;
    border: 2px solid lighten($dark-bg, 50);
    background: lighten($dark-bg, 60);
    border-radius: 15px;
    transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  &::before {
    content: "";
    display: block;
    width: 23px;
    height: 23px;
    background: darken($teal, 30);
    border-radius: 15px;
    position: absolute;
    top: 3px;
    left: 4px;
    transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
}
input:checked + .switch-button__trigger {
  &::after {
    background: lighten($dark-bg, 70);
  }
  &::before {
    position: absolute;
    top: 3px;
    left: 28px;
    background: $teal;
    box-shadow: inset 0 0 5px darken($teal, 30);
  }
}
</style>
