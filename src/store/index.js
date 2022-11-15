import { createStore } from 'vuex'
import ModuleUser from './user';

export default createStore({
  state: {//存数据
    
  },
  getters: {//想读取state里面的内容，但只能通过计算获取，一般放在getters里面
    
  },
  mutations: {//对state进行修改
    
  },
  actions: {//定义对state的各种操作
  },
  modules: {//将state进行分割
    user:ModuleUser,
  }
});
