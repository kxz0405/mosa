<template src='./index.html'></template>
<style src="./style.scss" lang="scss"></style>

<script>
export default {
  computed: {

    //取出所有折價券資料
    PrizeList() {
      return this.$store.state.Prize;
    },

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

    

  },

  mounted() {
    this.$(".Prize").hide(0);
    this.$store.dispatch("GetPrize");
  },

  methods: {

    //按下禮物盒，隨機抽出折價券
    Giftclick() {
      this.$(".gift").addClass("imgclick");
      this.$(".gift").css("cursor", "auto");
      setTimeout(() => {
        this.$(".Prize").show(500);
      }, 1000);
      const rand = Math.floor(Math.random() * 5);
      this.PickGift = this.PrizeList[rand];
    },
  },
};
</script>