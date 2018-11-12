<template>
  <div>
    <router-link :to="{ name: 'index' }">Index</router-link>
    {{ $route.params.id }}
  </div>
</template>

<script>
import Stack from '~/plugins/entry'
import axios from 'axios'

export default {
  created() {}
}
</script>

<style>
</style>
