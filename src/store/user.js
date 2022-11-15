import $ from 'jquery';
import jwt_decode from 'jwt-decode';
const ModuleUser = {
  state: {//存数据
    id:"",
    username:"",
    photo:"",
    followerCount:0,
  },
  getters: {//想读取state里面的内容，但只能通过计算获取，一般放在getters里面
        
  },
  mutations: {//对state进行修改
  },
  actions: {//定义对state的各种操作
    login(context,data){   //contex里面传api
        $.ajax({
            url:"https://app165.acapp.acwing.com.cn/api/token/",
            type:"POST",
            data:{
                username:data.username,
                password:data.password,
            },
            success(resp){
              const {access,refresh} = resp;
              const access_obj = jwt_decode(access);
              console.log(access_obj,refresh);
                //$ajax()
            },
        });
    }
  },
  modules: {//将state进行分割
  }
};
export default ModuleUser;

