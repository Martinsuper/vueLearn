<template>
    <div>
      <a :href="website">baidu</a>
      <input type="text" :value="message">
    </div>
</template>

<script>
export default {
  name: 'learnSomething',
  data () {
    return {
      message: 'hello Martin',
      website: 'http://www.baidu.com'
    }
  }
}
</script>

<style scoped>

</style>
