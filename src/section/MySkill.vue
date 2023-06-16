
<template>
	<div>

		<span class="oxygen text-uppercase text-bg-success fw-semibold px-3" style="--text-color: var(--bs-purple)"> What I Know?</span>
		<h3 class="py-3 poppins"> {{widgetTitle}} </h3>
		
		<div class="">
		<p class="pb-3"> I am skilled with these technology.</p>

		<div class="row g-3 gy-1 mx-4 mx-sm-3">

			<div v-for="skill in skillsList" v-bind:key="skill" class="col-sm-6 col-md-4  p-1 ">
				<section class="border rounded-4 p-2 shadow">
								<i v-bind:class="'devicon-' + fixDeviconClass( skill.technology ) + ' colored fs-1'" ></i> 
				
								<span class="m-sm-3 ms-md-4 align-text-middle fw-semibold fw-bolder ms-4 m-sm-3"> {{ applyRuleOfThumb(skill.technology) }}</span>
								
								<template v-if="skill.description">
									<p class="small text-muted p-2 p-md-4 border-start " v-html="skill.description"></p>
								</template>
				</section>
			</div>
			
		</div>
		</div>

		<br >
		<br >

		<div class="text-center text-center fst-italic h2 fw-bolder">
			Thanks
			<br >
		</div>


	</div>
</template>

<script>
export default {
	name: 'MySkill',
	props: {
		widgetTitle : {
			type: String,
			default: 'Skill That I possess!'
		}

	},
	methods: {
		fixDeviconClass (cname)  {
			var fixed = '';

			if ( cname == 'threejs') fixed = cname +'-original' 
			else if ( cname == 'npm') fixed = cname + '-original-wordmark'
		    else fixed = cname + '-plain';
			
			return fixed;
		},
		applyRuleOfThumb(lowerCasedName){
			var name = '';
			switch (lowerCasedName) {
				case "css3":
					name = lowerCasedName.toUpperCase();
					break;
				case "html5":
					name = lowerCasedName.toUpperCase();
					break;
				default:
					name = lowerCasedName.charAt(0).toUpperCase() + lowerCasedName.slice(1) ;
					break;
			}

			return name;
		}

	},
	data(){
		return {
			
			skillsList : [
			{
				technology: 'android',
				description: 'I learn android development using an android app that is <b>Android AIDE</b> application. It is available on Play Store. You can learn lot of thing about android app development.'
			},
			{
				technology: 'java', 
				description: 'Java is programming language which i learn during andorid app development. I keep intermediate level of knowledge in this programming language.'
			},
			{
				technology: 'c',
				description: 'C Programming language is in BCA curriculum. And I learn its basic and intermidiate level coding'
			},
			{
				technology: 'threejs', //devicon-threejs-original
				description: 'I learn this when i was started the learning javascript. '
			},
			{
				technology: 'javascript',
				description: 'Javascript is web scripting language which is used in html wepage to make intractive and executed in browser environoment. '
			},
			{
				technology: 'css3',
				description: 'CSS Cascading Style Sheet is used for styling and improve the look and feel of webpage.'
			},
			{
				technology: 'vuejs',
				description: 'I choose this as web framework for building ui interface instead of React, Angular. I like this framework due to its lightweight and easy leaning curve'
			},
			{
				technology: 'jquery',
				description: 'Jquery is javascrit library. Which provide a way to traversing and dom menupulation in quick way'
			},
			{
				technology: 'bootstrap',
				description: "Boostrap is web framework that is used to create website front-end in quick. It has build in component, no need to create a new one for every project."
			},
			{
				technology: 'nodejs',
				description: 'Nodejs is used for backend support like php, java does provide to web application. '
			},
			{
				technology: 'bash',
				description: "Bash is scripting language that is used in linux operating system."
			},
			{
				technology: 'html5'
			},
			{
				technology: 'npm' // npm-original-wordmark
			},
			{
				technology: 'github',
				description: "Github is platform where open source software and library are free to use. Where developer can contribute to Open Source Cumunity."
			},
			{
				technology: 'gimp'
			}

			]
		}
	},
	created(){}
}
</script>

<style>

</style>