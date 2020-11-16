<template src=./index.html></template>

<style src="./style.scss" lang="scss"></style>

<script>
export default {
  data() {
    return {
      Products_All: [
        {
          id: 1,
          itemclass: "特色蛋糕",
          itemname: "白桃花見",
          itemprice: 320,
          itemnar:
            "粉嫩的桃味果凍上鋪滿豐碩圓潤的白桃，伴以晶瑩剔透的寒天，締造層次豐富、口感細膩之享受。",
          photo: require("../../../assets/w_1024.png"),
        },

        {
          id: 2,
          itemclass: "特色蛋糕",
          itemname: "巨峰と甘王",
          itemnar:
            "「日本の巨峰と甘王」蛋糕面層鋪滿顆顆豐盈飽滿的巨峰提子果凍，一嚐頓時果汁四溢，帶來甜美多汁口感。",
          itemprice: 239,
          photo:require("../../../assets/Cutout2.jpg") ,
        },

        {
          id: 3,
          itemclass: "特色蛋糕",
          itemname: "足球情熱",
          itemnar:
            "綿密的綠茶蛋糕面層放置著半立體足球朱古力，以士多啤梨，芒果，奇異果，藍莓包圍著，造型可愛...",
          itemprice: 199,
          photo:require("../../../assets/football-fever.png") ,
        },

        {
          id: 4,
          itemclass: "特色蛋糕",
          itemname: "蜜瓜之甘熟",
          itemnar:
            "加入產自日本之蜜瓜果肉，配上有蜜瓜粒果、白朱古力脆層及蜜瓜白朱古力慕絲的豐富夾層，讓你細嚐清新...",
          itemprice: 239,
          photo: require("../../../assets/melon.png"),
        },

        {
          id: 5,
          itemclass: "特色蛋糕",
          itemname: "草莓森林",
          itemnar:
            "面層鋪滿士多啤梨配以朱古力蛋糕，內有黑森林啫喱，啖啖濃郁朱古力味。",
          itemprice: 219,
          photo: require("../../../assets/blackcake.png"),
        },

        {
          id: 6,
          itemclass: "賀年糕點",
          itemname: "牛乳芝士蛋糕切餅",
          itemnar: "北海道牛乳芝士蛋糕切餅。",
          itemprice: 21,
          photo: require("../../../assets/sweet1.jpg"),
        },

        {
          id: 7,
          itemclass: "賀年糕點",
          itemname: "北海道牛乳芒果卷 ",
          itemnar: "北海道牛乳芒果卷 。",
          itemprice: 20,
          photo: require("../../../assets/sweet2.jpg"),
        },

        {
          id: 8,
          itemclass: "賀年糕點",
          itemname: "鮮果吉士撻",
          itemnar: "鮮果吉士撻。",
          itemprice: 20,
          photo: require("../../../assets/sweet3.jpg"),
        },

        {
          id: 9,
          itemclass: "賀年糕點",
          itemname: "鬆鬆曲奇禮盒4盒",
          itemnar:
            "選用澳洲及紐西蘭牛油、低溫烘焙，保留原材料的香味。酥鬆香滑，入口即溶。",
          itemprice: 240,
          photo: require("../../../assets/cookie1.png"),
        },

        {
          id: 10,
          itemclass: "麵包",
          itemname: "麵包",
          itemnar: "",
          itemprice: 50,
          photo: require("../../../assets/bake.png"),
        },
      ],
    }
  },


};
</script>