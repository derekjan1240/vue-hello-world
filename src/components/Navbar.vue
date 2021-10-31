<template>
  <div id="nav">
    <div id="navAvatarWrapper">
      <img
        id="navAvatar"
        src="@/assets/images/Home.png"
        @click="$router.push({ path: '/' })"
      />
    </div>
    <div id="navButtonWrapper">
      <router-link to="/todo" class="nav-btn">
        Todo
      </router-link>
      <router-link to="/featureB" class="nav-btn">
        Posts
      </router-link>
      <router-link to="/featureC" class="nav-btn">
        功能 C
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
#nav {
  scroll-snap-align: start;
  padding: 10px;
  font-size: 1.5em;
  display: flex;
  background: #fff;
}

#nav a {
  text-decoration: none;
}

#nav a.router-link-exact-active {
  background: #d7fcd4;
}

#navAvatarWrapper {
  width: 80px;
  display: flex;
  align-items: center;
}

#navAvatar {
  max-width: 100%;
  cursor: pointer;
}

#navButtonWrapper {
  flex-grow: 1;
  display: flex;
  justify-content: end;
}

.nav-btn {
  width: 150px;
  padding: 0.8em;
  margin: 1em;
  border: 0;
  border-radius: 5px;
  background: #fff;
  color: #2c3e50;
  font-size: 1.25rem;
  letter-spacing: 1.5px;
}

.nav-btn:hover {
  background: #d7fcd4;
}
</style>
