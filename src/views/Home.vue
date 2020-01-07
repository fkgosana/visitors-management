<template>
 <div>
  <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Home</b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
         <b-button @click="login" size="sm" class="my-2 my-sm-0" type="submit">Login</b-button>
      </b-navbar-nav>
  </b-navbar>
  <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="First slide"
      img-src="https://picsum.photos/1024/480/?image=10"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      img-src="https://picsum.photos/1024/480/?image=22"
    ></b-carousel-slide>
  </b-carousel>
</div>
  <login id="login" />
</div>
</template>

<script>
import login from "../components/LoginModal.vue"

export default {
  name: 'home',
  methods:{
    login(){
      this.$bvModal.show('login');
      
    }
  },
  components:{
    login
  }
}
</script>
