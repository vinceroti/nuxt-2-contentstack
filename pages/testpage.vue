<template>
  <div>
    <router-link :to="{ name: 'index' }">Index</router-link>
    <h1 v-html="title"/>
    <div v-html="body"/>
    <img :src="img">
  </div>
</template>

<script>
import Stack from '~/plugins/entry'
import axios from 'axios'

export default {
  serverCacheKey() {
    return Math.floor(Date.now() / 1000000) //need this for server caching
  },
  async asyncData() {
    let res = await Stack.getEntry('awards', 'blt2b590e9ffc4b80be')
    console.log(res)
    return {
      entry: res,
      body: res.award_description,
      title: res.title,
      img: res.file.url
    }
  }
}
</script>

<style>
</style>
