<template>
  <div class="seller">
    <div>seller</div>
    <div>{{getuserId}}</div>
  </div>
</template>
<script>
  export default {
    name: 'seller',
    props: [],
    data(){
        return {

        }
    },
    computed: {
        getuserId(){
            return this.$route.params.age;
        }
    }
  }
</script>
<style>
</style>
