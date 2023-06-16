<template>

    <div class=" px-4">

       

    	<h2 class="my-3"> Contact Me: </h2>
        <form>

            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                <label for="floatingTextarea2">Comments</label>
            </div>

            <div class="col-12 mt-3">
   				 <button type="submit" class="btn btn-primary" id="submitform" v-on:click="triggerEmailSend"> Sign in </button>
  			</div>
        </form>
        <br >
        <br >
<h2 class="mb-4"> Comment here, Your idea <span class="text-warning-emphasis text-capitalize text-primary">?</span></h2>

        <div id="disqus_thread"></div>

<!-- <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> -->
 <br > 
    <br >

     <address class="p-5 rounded-4 bg-light mt-5 fw-semibold">
            State : Bihar <br >
            <cite>Rahi South, Raj nagar, Madhubani</cite> <br >
            City : Raj Nagar ( Raj Place )
            <br >
            Email : ashutoshasing@gmail.com
            <br >
            PIN Code - 87863
        </address>

    </div>
</template>

<script>
// TODO: <script id="dsq-count-scr" src="//astokum.disqus.com/count.js" async>s/script> 
//Append #disqus_thread to the href attribute in your links. This will tell Disqus which links to look up and return the comment count. For example: <a href="http://foo.com/bar.html#disqus_thread">Link</a>.

export default {

name: 'ContactMe',
data: ()=> {
	return {

	}
},
methods(){

	triggerEmailSend:  ()=> {

		alert('Sorry, this section is not active!');

		/*Email.send({
		    Host : "smtp.elasticemail.com",
		    Username : "ashutoshasing@gmail.com",
		    Password : "",
		    To : 'them@website.com',
		    From : "you@isp.com",
		    Subject : "This is the subject",
			Body : "And this is the body"
		}).then(
		  message => alert(message)
		);*/
	}

},
created(){

     /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    

},
mounted(){ // DOM Avialable


    if ( document.getElementById("smtpjsid") == null ) {

	var script_smtpjs = document.createElement('script');
    script_smtpjs.setAttribute( "id", "smtpjsid");
	script_smtpjs.src =  'https://smtpjs.com/v3/smtp.js';
	document.head.appendChild(script_smtpjs);

    }

    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://astokum.disqus.com/embed.js';
    s.setAttribute("id", "disqusid");
    s.setAttribute('data-timestamp', +new Date());

    if ( d.getElementById('disqusid') == null ) {
     (d.head || d.body).appendChild(s);
    };

    })();

}

}
</script>

<style>

</style>