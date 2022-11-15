<template>
    <ContentBase>
        <div class="row">
          <div class="col-3">
            <userProfileinfo @follow="follow" @unfollow="unfollow" :user="user"/>
            <userProfileWrite @post_a_post="post_a_post" />
          </div>
          <div class="col-9">
            <userProfileposts :posts = "posts"/>
          </div>
        </div>
    </ContentBase>
  </template>
  
<script>
import ContentBase from '../components/ContentBash'
import userProfileinfo from '../components/userProfile-info';
import userProfileposts from '../components/userProfile-posts';
import userProfileWrite from '../components/userProfile-write';
import {reactive}  from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'userProfile',
  components: {
      ContentBase,
      userProfileinfo,
      userProfileposts,
      userProfileWrite,
  },
  setup(){
    const route = useRoute();
    const userId = route.params.userId;
    console.log(userId);
    const user = reactive({
      id:1,
      userName:"CJM",
      lastName:"chen",
      firstName:"jiamin",
      followerCount:0,
      is_followed:false,
    });
    const posts = reactive({
      count:3,
      posts:[
        {
        id:1,
        userid:1,
        content:"今天上了web课111",
        },
        {
        id:2,
        userid:1,
        content:"今天上了web课222",
        },
        {
        id:3,
        userid:1,
        content:"今天上了web课333",
        },
      ]
    });

    const follow=()=>{
      if(user.is_followed) return;
      user.is_followed = true;
      user.followerCount++;
    };

    const unfollow=()=>{
      if(!user.is_followed) return;
      user.is_followed = false;
      user.followerCount --;
    };

    const post_a_post=(content)=>{
      posts.count ++;
      posts.posts.unshift({
        id:posts.count,
        userid:1,
        content:content,
      })
    }

    return{
      user,
      follow,
      unfollow,
      posts,
      post_a_post,
    }
  }
}
</script>
  <style scoped>
  </style>