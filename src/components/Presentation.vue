<template>
  <div class="paragraph">
    <h3>LET ME INTRODUCE MYSELF</h3>
    <div class="begin">
      I am a Front-End Developer. Actualy I have an education of ship's navigator and even made two voyages,
      but Covid has made its own adjustments to my life, as a result of which I
      decided to change my profession, because I don't want my life to be
      affected by various restrictions - such as quarantine
    </div>
    <p>
      Ever since school I was fond of programming and decided to move in this
      direction and took a lot of courses on front-end development. So we
      collaborated with my friends who already at that time had a lot of
      experience in the industry. We took orders for various small local
      projects. Such as a food delivery web site, a clothing store web app, etc...
      During the year of joint work, we released 4 projects. So I raised my
      skills in JS, Vue and Bootstrap and can become an asset for any company as
      an effective and responsible team member with a good knowledge of
      profession.
    </p>
  </div>
</template>

<script>
export default {
  name: "Description",
  props: ["content"],
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";

.paragraph {
  color: map-get($colors, primary);
  .begin {
    color: map-get($colors, secondary);
  }
}
</style>