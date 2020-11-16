<template src="./index.html"></template>

<script>
export default {
    name:'NavComponents',

    computed:{

        Administrator(){
            return this.$store.state.Administrator
        }

    },

    
    
}
</script>

<style src="./style.scss" lang="scss"></style>