<template>
  <div>
    <div class="photo">
        <a>
            <img src="../assets/img/photo.jpg" alt="photo"/>
        </a>
    </div>
  </div>
</template>

<script>


export default {
    name: 'Photo',
    props: ['user', 'photo'],
}
</script>

<style scoped lang="scss">
    .photo {

        a:focus {
            outline: none;
        }
        img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            display: block;
            margin-left: auto;
            margin-right: auto
        }
    }
    img {
        max-width: 100%;
    }
</style>