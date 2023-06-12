


<template>
    <div class="row">
        <section class="col-md-7 mt-4">
            <h5 class="text-success-emphasis text-uppercase roboto">Who am I?</h5>
            <h1 class="py-2 poppins fw-bolder text-primary"> Hi,<br> I'm <b class="oxygen fst-italic fw-semibold">Ashutosh.</b> 
            </h1>

            <p class="py-2 text-muted">I am web developer and programmer who like to code and create different types of projects.</p>


            <div class="m-3 nav flex-column flex-sm-row gap-4 w-75 mx-auto ">
                <button class="btn px-4 btn-outline-primary py-2 nav-item"> Hire Me! </button> 
                <button class="btn px-4 btn-outline-primary py-2 nav-item"> Get in touch. </button>
            </div>


            <div class="py-3">

                <ul class="nav">
                    <li class="nav-item me-2" v-for="sicn in social" :key="sicn">

                        <template v-if="hasUrl(sicn)">
                           <a v-bind:href="sicn.url" target="_blank"><img :src="sicn.iconUrl" width="30"  /></a>
                        </template>
                        <template v-else>
                           <img v-bind:src="sicn" width="30"/>
                        </template>

                                                
                        <!--  -->

                    </li>
                </ul>
                
            </div>


        </section>

        <section class="col-md-5">
            <img class="rounded-circle img-fluid p-5 p-sm-2" style="background-position: 0 0;" :src="img"/>
        </section>
        
    </div>
</template>

<script>

import images from './../assets/devname.jpg'
import SIcon from './../assets/social/' // don't need to append 'index.js' it automatically do that.

/*
{"Gmail":"http://localhost:8080/images/ca7c622bddb1f622a8f7.svg","Github":"http://localhost:8080/images/35c7c6e3282cd621c279.svg"}
*/

export default {
  name: 'HeroMode',
    data() {
        return {
            message: 'Hello World',
            img: images,
            social: SIcon
        };
    },
    methods: {

        hasUrl : function (obj){
            var test = false;
            if ( obj instanceof Object &&  obj.hasOwnProperty('url') == true ){
                test = true;
            } else {}
            return test;
        }

    },
    created(){
        alert( JSON.stringify(this.social))
    }
};
</script>

<style scoped>
</style>

<custom1>

    FILE LOADER
    {
        test : 'png',
        loader: 'file-loader',\
        options: {
            outputPaht: 'images' // dest/images/ ...
        }
    }
    
</custom1>