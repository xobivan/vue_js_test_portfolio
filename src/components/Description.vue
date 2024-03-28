<template>
    <section id="about">
        <AnimateOnVisible name="fadeDown" :duration="1">
            <Title :title="title" :description="description" />
        </AnimateOnVisible>

        <AnimateOnVisible name="fadeRight" :duration="1">
            <div class="section-content">
                <div class="container-fluid">
                    <div class="row justify-content-center card-mobile">
                        <Photo :user="user"/>
                    </div>
                    <div class="row">
                        <div class="col-md-7 mr-auto card-mobile">
                            <Presentation :content="content"/>
                        </div>
                        <div class="col-md-4 card-mobile">
                            <PersonalCard :user="user" :links="links"/>
                        </div>
                    </div>
                </div>
            </div>
        </AnimateOnVisible>
    </section>
</template>

<script>
    import Title from './Title.vue'
    import PersonalCard from './PersonnalCard.vue'
    import Presentation from './Presentation.vue'
    import Photo from './Photo.vue'

/*     import { getFirestore, doc } from "firebase/firestore";
    const firetore = getFirestore();

    const img = doc(firetore, 'images/8h9AjA7TuZUcISLWngUo');

    console.log(img)
 */
    export default {
        name: 'AboutMe',
        components: {
            Title,
            PersonalCard,
            Presentation,
            Photo
        },

        data(){
            return{
                user: "Dmitry Spivak",
                photo:[],
                links:{
                    gitHub:"https://github.com/",
                    linkedIn:"https://www.linkedin.com/",
                    instagram:"https://www.instagram.com/"
                },
                title: 'About Me',
                description:"WHO I AM",
                content:'here is content',
            }
        },
    }
</script>

<style scoped lang="scss">
    @import '@/styles/constants.scss';

    #about {
        background-color: lighten(map-get($colors, dark), 100%);
    }

    @media(min-width: #{map-get($breakpoints, medium)}) {
        .section-content {
            width: 80%;
            margin: 0 auto;
        }
    }

    @media(max-width: #{map-get($breakpoints, medium)}) {
        .card-mobile {
            text-align: center !important;
            margin-top: 20px;
        }
    }
</style>