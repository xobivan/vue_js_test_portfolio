<template>
  <div>
    <h3 class="color-light">{{ title }}</h3>
    <div class="resume-item" v-for=" (post, index) in posts" :key="index">
      <div class="year color-darker">{{ post.year }}</div>
      <div class="resume-description">
        <strong class="color-light" v-html="title"></strong>
      </div>
      <div class="color-darker" v-html="content"></div>
    </div>
  </div>
</template>

<script>

/* import {db, storage} from '../firebase/get-content' */

export default {
  name: "ExperienceColumn",

  data(){
    return{
      title:'exp name',
      content:'exp desc',
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";

.resume-item {
  margin-bottom: 25px;
  p {
    font-size: 1.5rem;
    margin-top: 0;
  }
  .resume-description {
    font-size: 1.7rem;
  }
  .year {
    font-weight: 600;
    margin-bottom: 5px;
  }
}
.color-light {
  color: map-get($colors, light);
}
.color-darker {
  color: map-get($colors, dark);
}
</style>
