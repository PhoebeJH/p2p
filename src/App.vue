<template>
  <div id="app">
    <NavLeft/>
    <Content/>
  </div>
</template>


<script>
import NavLeft from "./components/Nav/NavLeft.vue";
import Content from "./components/Content.vue";

export default {
  name: "App",
  components: {
    NavLeft,
    Content
  }
};
</script>


<style>
@import "./assets/css/public.css";
* {
  margin: 0;
  padding: 0;
  font-family: "微软雅黑";
}
a {
  color: inherit;
  text-decoration: none;
}
ul {
  list-style: none;
}
body {
  background-color: #f8f8f8;
}
#app {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
}
/* iconfont字体 */
@font-face {
  font-family: iconfont;
  src: url("./assets/font/iconfont.ttf");
}

/* ICONFONT */
.fullScreen::before {
  font-family: iconfont;
  content: "\e620";
  color: #fff;
  font-size: 17px;
}

.skin::before {
  font-family: iconfont;
  content: "\e7e8";
  color: #fff;
  font-size: 17px;
}

.search::before {
  font-family: iconfont;
  content: "\e678";
  color: #fff;
  font-size: 17px;
}

.message::before {
  font-family: iconfont;
  content: "\e62c";
  color: #fff;
  font-size: 17px;
}

.personal::before {
  font-family: iconfont;
  content: "\e638";
  color: #fff;
  font-size: 17px;
}

.lock::before {
  font-family: iconfont;
  content: "\e62b";
  color: #fff;
  font-size: 17px;
}

.line::before {
  font-family: iconfont;
  content: "\e680";
  color: #fff;
  font-size: 17px;
}

.setIcon::before {
  font-family: iconfont;
  content: "\e608";
  color: #fff;
  font-size: 17px;
}

.home::before {
  font-family: iconfont;
  content: "\e609";
  color: #fff;
  font-size: 17px;
}

.jiedai::before {
  font-family: iconfont;
  content: "\e914";
  color: #fff;
  font-size: 17px;
}

.huankuan::before {
  font-family: iconfont;
  content: "\e913";
  color: #fff;
  font-size: 17px;
}

.vip::before {
  font-family: iconfont;
  content: "\e629";
  color: #fff;
  font-size: 17px;
}

.money::before {
  font-family: iconfont;
  content: "\e661";
  color: #fff;
  font-size: 17px;
}

.people::before {
  font-family: iconfont;
  content: "\e611";
  color: #fff;
  font-size: 17px;
}

.daikuanNumber::before {
  font-family: iconfont;
  content: "\e61a";
  color: #fff;
  font-size: 17px;
}

.touziNumber::before {
  font-family: iconfont;
  content: "\e616";
  color: #fff;
  font-size: 17px;
}

.shouyi::before {
  font-family: iconfont;
  content: "\e60c";
  color: #fff;
  font-size: 17px;
}

.things::before {
  font-family: iconfont;
  content: "\e66f";
  color: #fff;
  font-size: 17px;
}

.quanxian::before {
  font-family: iconfont;
  content: "\e657";
  color: #fff;
  font-size: 17px;
}
</style>
