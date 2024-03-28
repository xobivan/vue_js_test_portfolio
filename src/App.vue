<template>
  <transition name="fade" tag="div" class="wrapper" mode="out-in">
    <div class="wrapper" v-if="isLoaded" id="app">
      <profile-card :user="user"></profile-card>
      <description></description>
      <the-experience></the-experience>
      <skills></skills>
    </div>
  </transition>
</template>

<script>
import ProfileCard from"@/components/ProfileCard.vue";
import Description from "./components/Description.vue";
import TheExperience from './components/TheExperience.vue';
import Skills from './components/Skills.vue';

export default{
  components:{
    ProfileCard,
    Description,
    TheExperience,
    Skills
  },
  data(){

    return{
      isLoaded: false,
      user: "Dmitry Spivak",
      posts: [],
    }
  },
  created(){
    this.isLoaded = true;
    this.$nextTick(() => document.body.classList.remove("loading"));
  },
}
</script>

<style scoped lang="scss">
@import "./styles/constants.scss";

#app {
  font-family: Montserrat-Regular, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrapper {
  height: 100%;
}
</style>
