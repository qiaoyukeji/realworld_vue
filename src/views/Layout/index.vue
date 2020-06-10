<!--
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-10 21:50:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-10 21:54:25
--> 
<template>
  <div>
    <AppHeader></AppHeader>
    <!-- 中间动态内容 -->
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
export default {
  name: "AppLayout",
  components: { AppHeader, AppFooter }
};
</script>

<style>
</style>