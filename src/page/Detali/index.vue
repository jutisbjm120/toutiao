<template>
  <div class="main">
      <div class="h1">{{obj.title}}</div>
      <div class="tit">
        <div class="imga">
          <img src="/image/datails/author.jpg" alt="">
        </div>
        <div class="neew">
          <p>{{obj.from}}</p>
          <p>14小时前<span>{{obj.commentLength}}评论</span></p>
        </div>
        <button>关注</button>
      </div>
      <div class="qqq" v-html="ppl"></div>
  </div>
</template>

<script>
export default {
  name:"detali",
  data() {
    return {
      obj:null
    }
  },
  methods: {
    
  },
  components: {

  },
  computed: {
    ppl(){
      return this.obj.content.replace(/..\/static\/img/g,"/image");
    }
  },
  beforeMount() {
    this.obj=this.$route.query.titles;
  }
}
</script>

<style scoped lang="less">

.main{
  .qqq{
    margin-top: .15rem;
    font-size: .12rem;
    width: 100%;
    div{
      p{
        img{
         max-width: 100% !important;
       }
      }
    }
  }
  padding: .1rem;
  .h1{
    font-size: .18rem;
    color: #000;
  }
  .tit{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 0;
    margin-top: .13rem;
    .imga{
      width: .23rem;
      height: .23rem;
      border-radius: 50%;
      overflow: hidden;
      margin-right: .11rem; 
      img{
        width: 100%;
        height: 100%;
      }
    }
    button{
      width: .57rem;
      height: .24rem;
      background: #f95a57;
      color: #fff;
      text-align: center;
      line-height: .24rem;
      border: 0;
      font-size: .1rem;
    }
    .neew{
      margin-right: .04rem;
      p:first-of-type{
        font-size: .11rem;
        color: #444;
      }
      p:last-of-type{
        font-size: .08rem;
        color: #a2a2a2;
        span{
          color: #f66167;
          margin-left: .03rem;
        }
      }

    }
  }
}
</style>
