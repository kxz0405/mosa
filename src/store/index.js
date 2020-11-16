import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product_All:[],
    product_S:[],
    product_N:[],
    product_B:[],
    incar:[],
    Prize:[],
    userdata:[],
    PickGift:[],
    NowLoginUsers:{},
    checkgift:false,
    Havegift:false,
    Administrator:false,
    buyuser:{},
    buy_cost:0
  },
  mutations: {
    Setlist(state,product){
      state.product_All=product
      var prod_S=[]
      var prod_N=[]
      var prod_B=[]
      for (let j = 0; j < product.length; j++) {
        if(product[j].itemclass=="特色蛋糕"){
          prod_S.push(product[j])
        }
        if(product[j].itemclass=="賀年糕點"){
          prod_N.push(product[j])
        }
        if(product[j].itemclass=="麵包"){
          prod_B.push(product[j])
        }
      }
      
      state.product_S=prod_S
      state.product_N=prod_N
      state.product_B=prod_B
    },

    Setincar(state,incar){
      state.incar=incar
    },

    SetPrize(state,list){
      state.Prize=list
    },

    SetGift(state,gift){
      state.PickGift=gift
      state.Havegift=true
    },

    Setcheck(state,val){
      state.checkgift=val
    },

    Setaccount(state,data){
      state.userdata=data
    },

    SetNowLoginUser(state,used){
      state.NowLoginUsers=used
    },

    Setbuyuser(state,user){
      state.buyuser=user
    },

    Setbuycost(state,val){
      state.buy_cost=val
    }

  },


  actions: {
    Getlist(context){
      return axios.get('./Products.json').then(res=>{   
        context.commit('Setlist',res.data)
      })
    },

    GetPrize(context){
      return axios.get('./PrizeList.json').then(res=>{
        context.commit('SetPrize',res.data)
      })
    },

    GetUser(context){
      return axios.get('./Acc.json').then(res=>{
        context.commit('Setaccount',res.data)
      })
    },

    Getcheck(context,check){
      context.commit('Setcheck',check)
    },

    Getgift(context,val){
      context.commit('SetGift',val)
    },

    GetNowLoginUser(context,used){
      context.commit("SetNowLoginUser",used)
    },

    Getbuyuser(context,user){
      context.commit("Setbuyuser",user)
    },   
    


  },
  modules: {

  }
})
