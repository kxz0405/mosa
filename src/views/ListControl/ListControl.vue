<template src="./ListControl.html"></template>
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

        PickGift: {
            get() {
                return this.$store.state.PickGift;
            },

            set(observer) {
                this.$store.commit("SetGift", observer);
            },
        },

        checkgift:{
            get(){
                return this.$store.state.checkgift
            },
            set(day){
                this.$store.commit('Setcheck',day)
            }
        },

        buyuser:{
            get(){
                return this.$store.state.buyuser
            },
            set(val){
                this.$store.commit('Setbuyuser',val)
            }
        },

        Havegift(){
            return this.$store.state.Havegift;
        },

        buy_cost:{
            get(){
                return this.$store.state.buy_cost
            },
            set(val){
                this.$store.commit("Setbuycost",val)
            }
        },

        cost() {
            var cost = 0;
            var discount=this.PickGift.discount
            for (let c = 0; c < this.ShopCar.length; c++) {
                cost += this.ShopCar[c].num * this.ShopCar[c].itemprice;
            }

            if(this.checkgift){
                cost=Math.round(cost*discount)
            }
            return cost;
        },
    },

    mounted(){
        this.$('#discount').hide()
        if(this.Havegift){
            return this.$('#discount').show();
        }
    },
    

    methods:{
        deleteincar(newlist) {
            const ndx = this.ShopCar.indexOf(newlist);
            console.log(ndx)
            if (ndx !== -1) {
                this.ShopCar.splice(ndx, 1);
            }
        },

        GiftCheck(){
            if(!this.checkgift){
                this.checkgift=true
            }else{
                this.checkgift=false
            }
        },

        sub_btn(){
            
            const namebox=this.$('.namebox').val()
            const telbox=this.$('.telbox').val()
            const mailbox=this.$('.mailbox').val()
            const adressbox=this.$('.adressbox').val()
            const incarlenth=this.ShopCar.length
            if(!namebox){alert("請填寫完整資料"); return}
            if(!telbox){alert("請填寫完整資料"); return}
            if(!mailbox){alert("請填寫完整資料"); return}
            if(!adressbox){alert("請填寫完整資料"); return}
            if(incarlenth<=0){alert("並無購買商品");return}

            const buydata={
                name:namebox,
                tel:telbox,
                mail:mailbox,
                adress:adressbox
            }
            this.buy_cost=this.cost
            this.buyuser=buydata
            // 
            this.$('.namebox').val("")
            this.$('.telbox').val("")
            this.$('.mailbox').val('')
            this.$('.adressbox').val('')
            this.checkgift=false
            this.$router.push({path:'/check'})
        }
    }

}
</script>