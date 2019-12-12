<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input
          v-model="formData.name"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="请输入姓名"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <input
          v-model="formData.gender"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入性别"
        />
      </div>

      <button class="btn btn-success" @click="addItem">添加英雄</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
    addItem() {
      if (this.formData.name && this.formData.gender) {
        axios
          .post("http://localhost:3000/heroes", this.formData)
          .then(result => {
            if (result.status === 201) {
              // 编程式导航
              this.$router.push("/heroes");
            }
          });
      } else {
        alert("请输入内容");
      }
    }
  }
};
</script>

<style>
</style>