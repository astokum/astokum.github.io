<template>

	<div>
		<h3 class="text-primary py-4"> About Me</h3>

		<div class="card border-0">
			<div class="card-body ">
				<small class="text-uppercase text-dark-emphasis">biography</small>
				<h4 class="card-title oxygen py-1">{{username}}</h4>
 
				<h6 class="card-subtitle py-2 text-muted">describing myself.</h6>

				<p class="card-text py-1 poppins">
					Hi, I'm web deveploper and programming. Who likes to do some coding and programming like stuff and try to improve skill to day to day life. Whatever I learn it just from little bit youtube and coding websites.<br ><br >

					<b>When i stated learing the coding like thing ?</b> it was a time when i was in 11th class. In my mind I stated thinking about that how an apps and websites are being crafted and developed. This kind of thought, influence me to learn more and more deep knowledge in the field of  web and app development programming.

				</p>
				
			</div>

		</div>

		<MySkill widget-title="My Skills "></MySkill>
		

	</div>
			
</template>

<script>
	import MySkill from './MySkill.vue' // need to import and register it here in this component

	export default {
		name: 'AboutMe',
		components: {
			MySkill
		},
		data(){
			return {
				username: 'Ashutosh Kumar'

			}
		},
	}
	
</script>

<style scoped>
	
</style>