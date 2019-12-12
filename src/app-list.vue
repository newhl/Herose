<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <router-link class="btn btn-success" to="/heroes/add">添加英雄</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <a href="javascript:void(0)" @click="goEdit(item.id)">编辑</a> &nbsp;&nbsp;
              <a href="javascript:void(0)" @click="delItem(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    goEdit(id) {
      this.$router.push(`/heroes/edit/${id}`);
    },
    // 删除功能
    delItem(id) {
      if (confirm("您确定要删除吗")) {
        axios.delete(`http://localhost:3000/heroes/${id}`).then(result => {
          if (result.status === 200) {
            this.loadData();
          }
        });
      }
    },

    // 渲染列表
    loadData() {
      axios.get("http://localhost:3000/heroes").then(result => {
        if (result.status === 200) {
          this.list = result.data;
        }
      });
    }
  },
  created() {
    this.loadData();
  }
};
</script>

<style>
</style>