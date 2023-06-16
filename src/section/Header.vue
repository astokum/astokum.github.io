

<template>

	<div>

		<nav class="navbar bg-light navbar-expand-md">
  <div class="container-fluid">
    <a class="navbar-brand prompt d-inline-block" href="#">

      <img :src="require('/src/assets/devname.jpg')" alt="Logo" height="50" class="d-inline-block align-text-top rounded-circle"/>

        <span style="color: var(--bs-code-color); font-size: 2rem;" class="fw-bolder align-text-top"> &lt;<span class="text-primary">{{ title }}</span>/&gt; </span>  

    </a>

    <button class="navbar-toggler border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end oxygen" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="javascript:void(0)" v-on:click="$router.push('/home')">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)" @click="$router.push('/about')">AboutMe</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)" v-on:click="$router.push('/projects')">My Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled-x" href="javascript:void(0)" @click="$router.push('/contact')">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
		
	</div>
	

</template>

<script>
	export default {

    name: 'Header',
    data() {
    return {
      title : 'Ashutosh'
    }
  },
};
</script>

<style scoped>
	
</style>