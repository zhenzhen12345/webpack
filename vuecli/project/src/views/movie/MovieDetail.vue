<template>
    <div>
        <h1>电影名称：{{$route.params.id}}</h1>
    </div>
</template>
<script>
    export default {
        created() {
            this.getData()
        },
        data(){
            return {
                dataList:{}
            }
        },
        methods:{
            getData(){
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/subject/'+this.$route.params.id)
                    .then((res)=>{
                        console.log(res);
                        console.log(res.data)
                        this.dataList=res.data;
                    })
                    .catch(()=>{
                    })
            }
        }
    }
</script>
