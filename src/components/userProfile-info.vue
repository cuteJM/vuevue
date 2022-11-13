<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/133193_lg_12eee67361.jpg" alt="">
                </div>
                <div class="col-9">
                    <div class="userName">{{fullName}}</div>
                    <div class="fans">粉丝数:{{user.followerCount}}</div>
                    <button @click="follow" v-if="!user.is_followed" type="button" class="btn btn-success btn-sm">+关注</button>
                    <button @click="unfollow" v-if="user.is_followed" type="button" class="btn btn-success btn-sm">取消关注</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import{computed} from 'vue';
export default{
    name:"userProfileinfo",
    props:{
        user:{
            type:Object,
            required:true,
        },
    },
    setup(props,context){
        let fullName = computed(() =>
            props.user.lastName + ' ' + props.user.firstName
        );
        const follow = () =>{
            context.emit('follow');
        }
        const unfollow = () =>{
            context.emit("unfollow");
        }
        return {
            fullName,
            follow,
            unfollow,
        } 

    }

}
</script>

<style scoped>
img{
    border-radius: 50%;
}
.username{
    font-weight: bold;
}
.fans{
    font-size: 12px;
    color: black;
}
button{
    padding: 2px 4px;
    font-size: 12px;
}
</style>