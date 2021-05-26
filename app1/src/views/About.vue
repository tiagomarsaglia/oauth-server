<template>
  <div>
    <h1>Callback</h1>
  </div>
</template>

<script>
// import AuthService from '@/services/auth.service'

export default {
  name: 'Callback',
  mounted () {
    this.$auth.handleAuthentication().then()
  }
}
</script>
