<template>
    <ContentBase>
        <div class="row">
          <div class="col-3">
            <userProfileinfo />
          </div>
          <div class="col-9">帖子列表</div>
        </div>
    </ContentBase>
  </template>
  
  <script>
import ContentBase from '../components/ContentBash'
import userProfileinfo from '../components/userProfile-info';
  export default {
    name: 'userProfile',
    components: {
        ContentBase,
        userProfileinfo,
    }
  }
  </script>
  <style scoped>
  </style>