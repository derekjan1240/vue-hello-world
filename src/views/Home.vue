<template>
  <!-- <div class="home"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- </div> -->
  <div>
    <div class="scroll-area">
      <h1>
        Project intro ...
      </h1>
    </div>
    <div class="scroll-area">
      <FeatureIntro
        title="Feature 01 - Todo List"
        intro="就是基本的 Todo List"
        link="/todo"
      />
    </div>
    <div class="scroll-area">
      <FeatureIntro
        title="Feature 02 - User Post"
        intro="就是基本的 User Post"
        link="/featureB"
      />
    </div>
    <div class="scroll-area">
      <FeatureIntro title="Feature 03" intro="還沒想到" link="/featureC" />
    </div>
  </div>
</template>

<script>
import FeatureIntro from "@/components/home/FeatureIntro.vue";

export default {
  name: "Home",
  components: {
    FeatureIntro,
  },
};
</script>

<style scoped>
.scroll-area {
  width: 100%;
  height: 100vh;
  font-size: 60px;
}

.scroll-area {
  scroll-snap-align: start;
}

.scroll-area {
  margin: 0 auto;
}

.scroll-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.scroll-area:nth-of-type(1) {
  background: #49b293;
}

.scroll-area:nth-of-type(2) {
  background: #c94e4b;
}

.scroll-area:nth-of-type(3) {
  background: #4cc1be;
}

.scroll-area:nth-of-type(4) {
  background: #8360a6;
}
</style>
