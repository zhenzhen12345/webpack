<template>
    <div class="tes">
        <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" v-on:tap="onTap" class="content">
            <h1> id：{{$route.params.id}}</h1>
            {{obj}}
            <img :src="'./img/'+test.title +'.jpg'" alt="">
        </v-touch>
    </div>
</template>
<script>
import Vue from 'vue'
import VueTouch from'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
export default{
     created(){
         this.getData()
         if(!this.$route.params.id) {
             this.$router.push({name: 'picture'})
         }
     },
    mounted(){

    },
 methods:{
      getData(){
          for(var i=0;i<this.dataList.length;i++){
              if(this.num==this.dataList[i].id){
                  this.test=this.dataList[i]
              }
          }
      },
     onSwipeLeft(){
         this.num--;
         if(this.num==0){
             this.num=6
         }
     },
     onTap(){
       console.log(1111)
     },
     onSwipeRight(){
         this.num++;
         if(this.num==7){
             this.num=1
         }
     },

 },
 data(){
     return {
         test:[],
         num:this.$route.params.id,
         dataList:[{ title:'11' ,
                     id:'001'
                 },
                     { title:'12' ,
                         id:'002'},
                     { title:'13' ,
                         id:'003'},
                     { title:'14' ,
                         id:'004'},
                     { title:'15' ,
                         id:'005'},
                     { title:'16' ,
                         id:'006'},
                 ]
             }
     },
     computed:{
         obj(){
             for(var i=0;i<this.dataList.length;i++){
                 if(this.num==this.dataList[i].id){
                     this.test=this.dataList[i]
                 }
             }
             return this.num
         }
     }


}
</script>
<style scoped>
    .tes{
       position: fixed;
       top:1rem;
       left: 0;
       right: 0;
       bottom: 1rem;
       background: rgba(0,0,0,1);
       color:#fff;
   }
   .tes img{
       text-align: center;
       height: 267px;
       width: 100%;
       margin: 50px auto;
   }
</style>