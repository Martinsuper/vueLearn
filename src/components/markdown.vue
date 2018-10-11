<template>
  <div>
    <div id="editor">
      <el-form ref="form" :model="form" :inline="true" label-width="80px">
        <el-form-item>
          <el-input v-model="form.name" placeholder="文章名称" style="width: 500px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.region" placeholder="分类">
            <el-option label="分类1" value="shanghai"></el-option>
            <el-option label="分类2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
      <mavon-editor v-model="value" :ishljs="true" style="height: 100%;"/>
    </div>

  </div>
</template>
<script>
export default {
  name: 'markdown',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  }
}
</script>
<style>
  #editor {
    position: absolute;
    left: 300px;
    top: 50px;
    width: 70%;
    height: 618px;
  }
</style>
