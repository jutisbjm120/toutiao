<template>
  <ul>
    <li v-for="(item,index) in list" :key="index" @click="tiao(item)">
      <div class="msss">
        <p>{{item.title}}</p>
        <p class="wen">
          <span class="ding">置顶</span>
          <span>{{item.from}}</span>
          <span>评论{{item.commentLength}}</span>
        </p>
      </div>
      <div class="pic" v-if="item.img">
        <img :src="item.img | getimg" alt="">
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name:"news",
  data() {
    return {
      list:[]
    }
  },
  methods: {
    tiao(item){
      this.$router.push({path:"/detali",query:{titles:item}})
    }
  },
  components: {

  },
  mounted () {
    axios.get("/data.json").then((res)=>{
      if(res.status==200){
        this.list=res.data;
      }
    })
  }
}
</script>

<style scoped lang="less">
  ul{
    padding:0 .12rem;
    display: flex;
    flex-direction: column;
    li{
      border-bottom: 2px solid #f4f4f4;
      padding: .12rem 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: .12rem;
      color: #1b1b1b;
      .msss{
        flex: 1;
        .wen{
            margin-top: .05rem;

          color: #9797;
          font-size: .08rem;
          span{
            margin-right: .04rem;
          }
            .ding{
            border: 1px solid #e95555;
            border-radius: 3px;
            color: #e95555;
            margin-right: .04rem;
          }
        }
      }
      .pic{
        width: .91rem;
        margin-left: .07rem;
        img{
          width: 100% !important;
        }
      }
    }
  }
</style>
