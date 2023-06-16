<template>
    <div> 
        <span v-for='(value, key) in language_list' :key='key' class='badge text-bg-primary me-1'>
        {{key}} 
        </span>
    </div>
</template>

<script>
	export default {
    name: 'LanguageListBuilder',
    props: {
        url: {
            type: String,
            required: true
        }
    },
    data: function() {
        return {
           language_list: {} // instance of Object
        }
    },
    created() {
        let _this = this;
        fetch(this.url).then( (res) => { // Response Object with status and data
            if ( res.ok == true ) return res.json();
        }).then((data)=> {
            _this.language_list = data;  // { html : 556, css : 573}
        });
    }

};
</script>

<style scoped>
	
</style>