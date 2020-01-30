<template>
 <div>
   <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Calendar</b-nav-item>
        <b-nav-item href="#" >Contact Us</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
<div>
<login/>
</div>
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
