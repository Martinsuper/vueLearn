<template>
  <div id="mytable" align="center">
    <el-form :inline="true" :model="query" size="mini">
      <el-row>
        <!--根据用户名搜索-->
        <el-col :span="24">

          <el-form-item label="用户名称:">
            <el-input v-model="query.userName" placeholder="用户名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="search">查询</el-button>
          </el-form-item>
        </el-col>
        <!--操作栏-->
        <el-col :span="24">
          <el-form-item>
            <el-button-group>
              <el-button type="primary" @click="createUser">增加用户</el-button>
              <el-button type="warning" @click="editUser" :disabled="!selections || selections.length === 0">修改用户
              </el-button>
              <el-button type="danger" @click="deleteUser" :disabled="!selections || selections.length === 0">删除用户
              </el-button>
            </el-button-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-row>
      <el-col :span="24">
        <el-table :data="mydata" style="width: 100%; min-height: 396px" :highlight-current-row="true">
          <el-table-column label="选择" width="50">
            <template slot-scope="scope">
              <el-radio v-model="currentUser" :label="scope.row.id" @change="handleSelect(scope.row)"><i></i></el-radio>
            </template>
          </el-table-column>
          <el-table-column prop="userName" label="姓名" width="120" align="center"></el-table-column>
          <el-table-column prop="userNickName" label="昵称" width="120" align="center"></el-table-column>
          <el-table-column prop="userPhoneNumber" label="手机号码" width="120" align="center"></el-table-column>
          <el-table-column prop="userCreateTime" label="用户创建时间" :formatter="dateFormat" width="180"
                           align="center"></el-table-column>
          <el-table-column prop="userModifyTime" label="用户修改时间" :formatter="dateFormat" width="180"
                           align="center"></el-table-column>
          <el-table-column prop="userType" label="用户类型" width="120" align="center"></el-table-column>
          <el-table-column prop="userGender" label="用户性别" width="120" align="center"></el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-pagination
          @size-change="research"
          @current-change="search"
          :current-page.sync="query.pageIndex"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
      </el-col>

    </el-row>

  </div>
</template>

<script>
// import axios from 'axios'
import {userlists} from '@/service/api'

export default {
  name: 'mytest',
  data () {
    return {
      query: {
        userName: '',
        pageIndex: 1,
        pageSize: 10
      },
      mydata: []
    }
  },
  computed: {
    total () {
      return this.query.currentPage * this.query.pageSize + 1
    }
  },
  methods: {
    search () {
      userlists.getMyUserList(this.query).then((data) => {
        this.mydata = data.dataList
      })
    },
    research (size) {
      this.query.pageSize = size
      this.search()
    }
  },
  mounted () {
    this.search()
  }
}
</script>

<style scoped>
</style>
