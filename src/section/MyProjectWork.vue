<template>
<div class="row">
    <h3 class="py-4"> My Project Work </h3>
    <div id="github-projects">
    </div>
    <br>
    <br>
    <!-- 
    <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="astokum" data-color="#5F7FFF" data-emoji="" data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00"></script>
    <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="astokum" data-color="#5F7FFF" data-emoji="" data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00"></script>
-->
    <a href="https://www.buymeacoffee.com/astokum" target="_blank" class="p-4"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;"></a>
    <br>
    <br>

    <section class='row g-3 gx-md-3 gy-md-3'>

    <div v-for="repo in ReposListData" v-bind:key="repo" class="col-sm-6 col-md-4 text-wrap text-break position-relative ">
        <section class="border p-2 m-1 shadow-sm rounded-2 small" :class="addingRandomClass">
                <h4 class="card-title py-2 text-primary">{{repo.name}}</h4>
                <hr  >
                <p class="card-text">{{repo.description}}</p>
                <!-- <pre>{{repo.language}}</pre> -->
        
                <LanguageListBuilder v-bind:url='repo.languages_url'></LanguageListBuilder>
        
                <a v-bind:href="repo.svb_url" target="_blank" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hove stretched-link"> See Project &#128065; </a>
        </section>
    </div>

    </section>

    <br>
    <br>
    </div>
</template>

<script>
                                
import { Octokit } from "@octokit/core";
import LanguageListBuilder from './LanguageListBuilder.vue'

export default {
    name: 'MyProjectWork',
    components: {
        LanguageListBuilder
    },
    data() {
        return {
            ReposListData: null
        }
    },
    created() {
        this.githubrestcall();
    },
    computed: {
        addingRandomClass: function(){
            var borderColor = ['primary', 'secondary', 'danger', 'warning', 'success', 'dark', 'light'].map((val)=> {
                return 'border-' + val;
            });

            var selectNo = Math.floor( Math.random() * borderColor.length);

            return JSON.parse(`{    
                "${borderColor[selectNo]}" : "true"
            }`);
        }
    },
    methods : {
     githubrestcall:   function () {
            // body...
        const octokit = new Octokit({
            auth: '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'
        })
        var response = octokit.request('GET /users/{username}/repos', {
            username: 'astokum',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }).then((res) => {
            this.ReposListData = res.data; // []
            console.log(res);
        });
        }
    },
    watch() {

    },
    mounted() {
        // DOM manupulation 


        //NOTE: 
        // if we pass this with currect api key this will woek fine that i want
        // fetch('https://api.github.com/users/astokum/repos').then((value)=>{

        //     alert(JSON.stringify(value));

        //     this.ReposListData = value;

        // })



        /*array( {
    
        name : 'name of repository'
        description: 'discription of repostoyr '
        svb_url : 'link of repository page or github repo page of that '
        language: 'list of technoloby by whcih this provjet is build '
        languages_url: 'url api that provide used technoloy langu in repostory ' like
                            {
                                html : 55,
                                js : 666
                            }


        }, ....) */
    }
}
</script>


<custom1>
    //@ Documentation for component

    const octokit = new Octokit({
    auth: 'YOUR-TOKEN'
    })
    await octokit.request('GET /users/{username}/projects', {
    username: 'USERNAME',
    headers: {
    'X-GitHub-Api-Version': '2022-11-28'
    }
    })
</custom1>