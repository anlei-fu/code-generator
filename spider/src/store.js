import Vue from 'vue'
import Vuex from 'vuex';

let userInfo={
  isLogined:false,
  name:String,
  token:String,
  authroties:[],
}

let apis={
    user:{
            login:{},
            logout:{},
            updatePassword:{},
    },
    system:{
            validate:[],
    }
}

let menus=[];



Vue.use(Vuex)

export const store = new Vuex.Store({ 
    state: {
       userInfo,
       apis
    }
})
