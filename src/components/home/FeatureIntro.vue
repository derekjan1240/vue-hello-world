<template>
  <h1>
    {{ title }}
  </h1>
  <p>{{ intro }}</p>
  <button class="btn" @click="$router.push({ path: link })">前往</button>
</template>

<script>
export default {
  name: "FeatureIntro",
  props: {
    title: {
      type: String,
      required: true,
      default: "我是功能標題",
    },
    intro: {
      type: String,
      required: true,
      default: "",
    },
    link: {
      type: String,
      required: true,
      default: "/",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  width: 200px;
  height: 50px;
  border: 0;
  border-radius: 5px;
  background: cornsilk;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  cursor: pointer;
  margin: 1em 0;
}

.btn:hover {
  background: #f1e8b8;
}
</style>
