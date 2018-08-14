<template>
    <div>
        <h1>音乐</h1>
        <ul>
            <li v-for="(items,index) in dataList" :key="index+'ul'" @click="routerPush({path:'/MusicDe'})" >
                <img :src="items.bg" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
      created(){
          this.$emit('routerChange','music');
          this.getData()

      },
        data(){
          return {
              dataList:[]
          }
        },
        methods:{
          getData(){
              axios.get('./data/musiclist.json')
                  .then((res)=>{
                     console.log(res);
                     this.dataList=res.data.albums
                  })
                  .catch(()=>{

                  })
            },
            routerPush(obj){
                this.$router.push(obj.path);
            }

        }
    }
</script>
<style scoped>
    ul li{
       width: 50%;
       float:left;
    }
    li img{
        width: 100%;
    }
</style>