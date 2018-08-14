<template>
    <div>
        <h1>图片</h1>
        <ul>
            <li v-for="(items,index) in dataList" :key="index+'ql'" @click="$router.push({name:'picturedetail',params:{id:items.id}})">
                <img :src="'./img/'+items.title+'.jpg'" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
    import Vue from 'vue'
    import VueTouch from'vue-touch'
    Vue.use(VueTouch, {name: 'v-touch'})
    export default{
        created(){
            this.$emit('routerChange', 'picture')
        },
        methods:{

        },
        data(){
            return {
                isFinish:true,
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

        }
    }
</script>
<style scoped>
    h1{
        padding:0.5rem;
    }
    ul li{
        width: 50%;
        float:left;
    }
    li img{
        width: 100%;
        height: 150px;
    }
</style>