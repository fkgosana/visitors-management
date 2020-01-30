<template>
  <div>
        <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
           <b-navbar-brand href="#">Home</b-navbar-brand>
      <!-- Right aligned nav items -->
             <b-navbar-nav class="ml-auto">
         <b-button @click="login" size="sm" class="my-2 my-sm-0" type="submit">Login</b-button>
      </b-navbar-nav>
  </b-navbar>
  </div>
</template>

<script>
export default {
    name: 'Header'

}
</script>

<style>

</style>