<template>
  <div class="head">
    <span><img src="/image/index/message.png" alt=""></span>
    <span class="aa"><img class="logo" src="/image/index/wap_logo.png" alt=""><img src="/image/index/titlebar_refresh.png" alt=""></span>
    <span><img src="/image/index/search_normal.png" alt=""></span>
  </div>
</template>

<script>
export default {
  name:"heade",
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="less">
*{
  font-size: 0;
}
.head{
  font-size: 0;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 40px;
  background-color: #d33d3e;
  padding: 0 14px;
  .aa{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 82px;
  }
  .logo{
    width: 66px;
    height: 16px;
  }
  img{
    width: 16px;
    height: 13px;

    &:nth-of-type(2){
      width: 12px;
      height: 12px;
    }
    &:nth-of-type(4){
      width: 14px;
      height: 14px;
    }
  }
}
</style>
