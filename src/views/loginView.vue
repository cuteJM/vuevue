<template>
    <ContentBase>
      <div class="row justify-content-md-center">
        <div class="col-3">
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="username" class="form-label">用户名</label>
              <input v-model="username" type="text" class="form-control" id="username">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">密码</label>
              <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="error-message">{{error_message}}</div>
            <button type="submit" class="btn btn-primary">登录</button>
          </form>
        </div>
      </div>
      
    </ContentBase>
  </template>
  
  <script>
import ContentBase from '../components/ContentBash'
import {ref} from 'vue';
import {useStore} from 'vuex';

  export default {
    name: 'loginView',
    components: {
        ContentBase,
    },
    setup (){
      const store = useStore();
      let username = ref('');
      let password = ref('');
      let error_message = ref('');
      const login = ()=>{
        store.dispatch("login",{     //函数的名称作为字符串传给第一个参数
          username:username.value,
          password:password.value,
          success(){           //成功的回调函数
            console.log("success");
          },
          error(){
            console.log("faild");
          }
        });
      };
      return{
        username,
        password,
        error_message,
        login,
      }
    }
  }
  </script>
  <style scoped>
  button {
    width: 100%;
  }
  .error-message{
    color: red;
  }
  </style>