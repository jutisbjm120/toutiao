<template>
  <div class="home">
    <heade/>
    <div class="main">
      <news/>
    </div>
  </div>
</template>

<script>
import heade from "@/components/Header"
import news from "@/components/News"
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    heade,
    news
  }
}
</script>

<style scoped lang="less">
.home{
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .main{
    height: 100%;
    flex: 1;
    overflow: scroll;
  }
}
</style>
