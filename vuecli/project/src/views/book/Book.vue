<template>
    <div>
        <h1>书籍</h1>
        <swipe class="my-swipe">
                <swipe-item v-for="(items,index) in dataList" :key="index+'wl'">
                    <img :src="items.image" alt="" class="test">
                </swipe-item>
        </swipe>
    </div>
</template>
<script>
    import axios from 'axios'
    require('vue-swipe/dist/vue-swipe.css');
    import { Swipe, SwipeItem } from 'vue-swipe';
    export default {
        components: {
            'swipe': Swipe,
            'swipe-item': SwipeItem
        },
        created(){
            this.$emit('routerChange','book')
            this.getData()
        },
        data(){
          return {
              dataList:[]
          }
        },
        methods: {
            getData(){
                axios.get('./data/test.json')
                    .then((res) => {
                        var arr=[];
                         for(var i=0;i<5;i++){
                            arr.push(res.data.book[i]);
                        }
                       this.dataList=arr;

                    })
                    .catch(() => {

                    })

            },
        }
    }
</script>
<style scoped>
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }
    .test{
        width: 100%;
        height: 200px;
    }




</style>