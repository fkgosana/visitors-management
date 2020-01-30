<template>
  <div>
<div >
  <b-card title="Login" align-v >
      <form ref="form" @submit.stop.prevent="handleSubmit">
    <b-form-group
      :state="nameState"
      label="User name"
      label-for="username"
      invalid-feedback="User Name is required"
    >
      <b-form-input
        id="user-name"
        v-model="username"
        :state="nameState"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group
      :state="passwordState"
      label="password"
      label-for="password"
      invalid-feedback="Password is required"
      >
      <b-form-input
        id="password"
        v-model="password"
        :state="passwordState"
        required
      ></b-form-input>
    </b-form-group>
    <div align-v>
        <b-button  @click="handleSubmit" variant="primary">Login</b-button>
    </div>
  </form>
  </b-card>
</div>
  </div>
</template>

<script>

import logins from '../loginConfig'
  export default {
     name: 'loginModal',
    data() {
      return {
        username: '',
        nameState: null,
        password: '',
        passwordState: null,
        id:'login',
        users: {}
      }
    },
    methods: {
      checkFormValidity() {
        this.username.length === 0 ? this.nameState = false : this.nameState = true
        this.password.length === 0 ? this.passwordState = false : this.passwordState = true
        
        return this.nameState && this.passwordState
      },
      resetModal() {
        this.username = ''
        this.nameState = null
        this.password = ''
        this.passwordState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        this.$router.push('/visitors')
        // Hide the modal manually
        this.$nextTick(() => {
          this.$refs.modal.hide()
        })
      },
    },
 
  }
</script>