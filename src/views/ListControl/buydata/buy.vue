<template src="./buy.html"></template>
<style lang="scss" src="./style.scss"></style>

<script>
export default {
    
    computed:{

        ShopCar:{
            get() {
                return this.$store.state.incar;
            },
            set(observer) {
                this.$store.commit("Setincar", observer);
            },
        },

        buyuser(){
            return this.$store.state.buyuser
        },

        cost(){
            return this.$store.state.buy_cost
        }
    },

    
    methods:{

        paycheck(){
            alert('確認收到訂單!!將重返到首頁!')
            this.ShopCar=[]
            this.$router.push({path:'/ShopComponents/SpecialMenu'})
        }

    }

}
</script>