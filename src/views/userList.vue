<template>
    <ContentBase>
        <div class="card" v-for = "user in users" :key="user.id">
          <div class="card-body">
            <div class="row">
              <div class="col-1">
                <img class="img-fluid" :src="user.photo" alt="">
              </div>
              <div class="col-11">
                <div class="username">{{user.username}}</div>
                <div class="follow-count">{{user.followerCount}}</div>
              </div>
            </div>
          </div>
        </div>
    </ContentBase>
  </template>
  
  <script>
import ContentBase from '../components/ContentBash'
import $ from 'jquery';
import {ref} from 'vue';
export default {
  name: 'userList',
  components: {
      ContentBase,
  },
  setup(){
    let users = ref([]);
    $.ajax({
      url:'https://app165.acapp.acwing.com.cn/myspace/userlist/',
      type:"get",
      success(resp){
        users.value = resp;
      }
    });
    return{
      users,
    };
  }
}
</script>
<style scoped>
img{
  border-radius: 50%;
}
</style> 