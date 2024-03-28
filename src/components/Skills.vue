<template>
    <section id="skills">
        <AnimateOnVisible name="fadeDown" :duration="1">
            <Title :title="title" :description="description"></Title>
        </AnimateOnVisible>
        <div class="section-content">
            <div class="container-fluid">
                <div class="row d-flex flex-wrap align-items-center">
                    <div class="col-md-2 m-auto pb-4" v-for="img in images" :key="img">
                        <AnimateOnVisible name="bounce">
                            <img id="imgLogo" class="img-responsive mx-auto d-block" :src="img"/>
                            <div id="divAlt" class="altCaption text-center">{{images.img}}</div>
                        </AnimateOnVisible>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Title from './Title.vue'
    import ImgCss from '@/assets/img/logo/css.png'
    import ImgHtml from '@/assets/img/logo/html.png'
    import ImgVue from '@/assets/img/logo/vuejs.png'
    import ImgJs from '@/assets/img/logo/js.png'
    import ImgbootVue from '@/assets/img/logo/bootVue.png'
    export default {
        name: 'Skills',
        components: {
            Title,
        },
        props: ['content'],
        data(){
            return{
                title: 'SKILLS',
                description:'WHAT I ACTUALLY CAN',
                images:[ImgCss, ImgHtml, ImgVue, ImgJs, ImgbootVue ]
            }
        },
        methods: {
            getImgUrl(img) {
                return require('../assets/img/logo/'+img);
            },
        },
    }
</script>

<style scoped lang="scss">
    @import '@/styles/constants.scss';

    #skills {
        background-color: lighten(map-get($colors, dark), 100%);
    }

    @media(min-width: #{map-get($breakpoints, medium)}) {
        .section-content {
            width: 80%;
            margin: 0 auto;
        }
    }

    img{
        max-width: 120px;
    }

    .altCaption{
        color: map-get($colors, secondary);
        margin-top: 1rem;
    }
</style>