<template src="./index.html"></template>
<style src="../SpecialMenu/style.scss" lang="scss"></style>


<script>
export default {
  
  computed:{
    Products_All(){
      return this.$store.state.product_All
    },

    Products_B(){
      return this.$store.state.product_B
    },

    incar:{
      get(){
        return this.$store.state.incar
      },
      set(observer){
        this.$store.commit('Setincar',observer)
      }
    },
  },

  mounted(){
    this.$store.dispatch('Getlist')
  },

  methods: {
    //新增商品到購物車//

    AddToCar(index, id) {
      var incar = this.incar;
      // console.log(id);
      var list = {
        id: this.Products_All[id - 1].id,
        photo: this.Products_All[id - 1].photo,
        itemname: this.Products_All[id - 1].itemname,
        itemprice: this.Products_All[id - 1].itemprice,
        num: 1,
      };

      if (incar.length == 0) {
        this.incar.push(list);
      } else {
        var notincar = true;
        for (var i = 0; i < incar.length; i++) {
          if (incar[i].id == id) {
            notincar = false;
          }
          if (incar[i].id == id) {
            this.incar[i].num++;
          }
        }
      }
      if (notincar) {
        this.incar.push(list);
      }
    },
  },

};
</script>