<template>
    <div>

      <Header></Header>

       <!--  <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link> -->

        <div class="container">
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">

                <keep-alive>
                <component :is="Component"/>
                </keep-alive>
                
            </transition>
        </router-view>
        </div>

    </div>
</template>
<script>

import Header from './section/Header.vue'
import HeroMode from './section/HeroMode.vue'
import AboutMe from './section/AboutMe.vue'
import MyProjectWork from './section/MyProjectWork.vue' 

/* but i was worng
if we here don't import Component, then 
router can move to this component but from this componet we can go and select any component previous it will not shonw to uuser as aspected.
*/

export default {
    name: 'App',
    components: {
      Header,
      HeroMode,
      AboutMe,
      MyProjectWork
    },
    data() {
        return {
            
        };
    }

};
</script>
<style lang="css">

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>

<custom1>
   With Transition mode, the flickring issue of layout is solve.
   <transition name='nameof trans' mode?="out-in"> 
   </transition>

   out-in is most use, but in-out is alos avaalable to use.
</custom1>