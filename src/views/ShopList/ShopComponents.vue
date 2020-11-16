<template src="./shop.html"></template>

<style src="./style.scss" lang="scss"></style>

<script>
export default {
  computed: {

    //所有商品資料
    Products_All() {
      return this.$store.state.product_All;
    },

    userdd(){
      return this.$store.state.userdata
    },

    //購物車裡商品資料
    incar: {
      get() {
        return this.$store.state.incar;
      },
      set(observer) {
        this.$store.commit("Setincar", observer);
      },
    },

    //取確認折價券是否有使用
    checkgift:{
      get(){
        return this.$store.state.checkgift
      },
      set(day){
        this.$store.commit('Setcheck',day)
      }
    },


    //已抽到的折價券資料
    PickGift: {
      get() {
        return this.$store.state.PickGift;
      },

      set(observer) {
        this.$store.commit("SetGift", observer);
      },
    },

    Havegift(){
      return this.$store.state.Havegift;
    },
    

        
    //計算購物車商品總金額

    cost() {
      var cost = 0;
      // var discount=this.PickGift.discount
      for (let c = 0; c < this.incar.length; c++) {
        cost += this.incar[c].num * this.incar[c].itemprice;
      }

      if(this.checkgift){
        // cost=cost*discount
      }
        return cost;
    },

    /*購物車裡有商品會顯示清單數量，如果商品數量為0會隱藏*/
    incarle() {
      var amount=0;
      for(var i=0;i<this.incar.length;i++){
        amount+=this.incar[i].num
      }
      return amount;
    },


  },

  mounted() {
    this.$(".shop-car-list").hide();
    this.$('.gift-check').hide();
    this.$store.dispatch("Getlist");
  },

  methods: {
    /*購物車的加減按鈕*/
    addnum(index) {
      this.incar[index].num++;
    },

    subnum(index) {
      if (this.incar[index].num == 0) {
        this.incar[index].num == 0;
      }
      this.incar[index].num--;
      if (this.incar[index].num == 0) {
        this.incar.splice(index, 1);
      }
    },

    /*刪除商品列*/
    deleteincar(newlist) {
      const ndx = this.incar.indexOf(newlist);
      if (ndx !== -1) {
        this.incar.splice(ndx, 1);
      }
    },

    //打開購物車
    showlist() {
      this.$(".shop-car-list").toggle(500);
    },

    //判斷折價券有無使用
    GiftCheck(){
      if(!this.checkgift){
        this.checkgift=true
      }else{
        this.checkgift=false
      }
    },

    cosani(){
      if(this.Havegift){
         return this.$('.gift-check').show(500);
        }
    }

  },


};
</script>
