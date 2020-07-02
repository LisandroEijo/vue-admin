<template>
  <div class="container" :class="{ 'light-mode': !isDarkMode, 'dark-mode': isDarkMode }">
    <Header />
    <h3>Team</h3>
    <div class="cards__container">
      <div class="cards">
        <img src="https://www.fillmurray.com/300/300/" alt />
        <p class="name">Bill Murray</p>
      </div>
      <div class="cards">
        <img src="https://www.fillmurray.com/302/302/" alt />
        <p class="name">Bill Muray</p>
      </div>
      <div class="cards">
        <img src="https://www.fillmurray.com/304/304/" alt />
        <p class="name">Bill Muray</p>
      </div>
      <div class="cards">
        <img src="https://www.fillmurray.com/400/400/" alt />
        <p class="name">Bill Murray</p>
      </div>
      <div class="cards">
        <img src="https://www.fillmurray.com/g/350/300/" alt />
        <p class="name">Bill Murray</p>
      </div>
      <div class="cards">
        <img src="https://www.fillmurray.com/g/353/300/" alt />
        <p class="name">Bill Murray</p>
      </div>
    </div>
    <div class="switch-button__container">
      <SwitchButton label="Switch Theme" />
    </div>
  </div>
</template>

<script>
import SwitchButton from "@/components/SwitchButton/SwitchButton";
import Header from "@/components/Header";
export default {
  name: "Team",
  components: {
    Header,
    SwitchButton
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
.cards__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-evenly;
  gap: 20px;
}
.cards {
  width: 100%;
  /* max-width: 300px; */
  height: 100%;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: 2px solid #000;
  overflow: hidden;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .light-mode & {
    background: lighten($light-bg, 5);
    border-color: darken($light-bg, 5);
  }
  .dark-mode & {
    background: lighten($dark-bg, 5);
    border-color: darken($dark-bg, 5);
  }
}
</style>
