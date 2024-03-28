<template>
  <div class="personal">
    <h3>{{ userData.name }}</h3>
    <div class="data"><strong>E-mail:</strong> {{ userData.email }}</div>
    <div class="data"><strong>Phone:</strong> {{ userData.phone }}</div>
    <div class="data"><strong>City:</strong> {{ userData.city }}</div>
    <div class="data"><strong>Languages:</strong> {{ userData.lang }}</div>
    <social-bar :links="links"></social-bar>
  </div>
</template>

<script>
import SocialBar from './SocialBar.vue'

export default {
    name: 'PersonnalCard',
    props:['links', 'user'],
    components: {
        SocialBar,
    },
    data(){
      return{
        userData:{
          name:"Dmitry Spivak",
          phone:"+447394337804",
          email:"dmitrysp98@gmail.com",
          lang:"English, Ukrainian, Russian",
          city: "Camberley"
        },
      }
    }
}
</script>

<style scoped lang="scss">
    @import '@/styles/constants.scss';

    .data {
        margin-bottom: 15px;
    }

    @media(min-width: #{map-get($breakpoints, medium)}) {
        .personal {
          float: right;
        }
    }
</style>