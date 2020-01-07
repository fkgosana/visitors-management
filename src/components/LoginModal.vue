<template>
  <div>
    <b-modal
      :id="id"
      ref="modal"
      title="Sign in"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="User name"
          label-for="username"
          invalid-feedback="UserName is required"
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
      </form>
    </b-modal>
  </div>
</template>

<script>
  export default {
     name: 'loginModal',
    data() {
      return {
        username: '',
        nameState: null,
        password: '',
        passwordState: null,
        id:'login'
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
        // sign in and move to the next page
        // Hide the modal manually
        this.$nextTick(() => {
          this.$refs.modal.hide()
        })
      }
    }
  }
</script>