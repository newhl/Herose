<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
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

      <button class="btn btn-success" @click="editItem">编辑英雄</button>
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
    editItem() {
      if (this.formData.name && this.formData.gender) {
        const { id } = this.$route.params;
        axios
          .put(`http://localhost:3000/heroes/${id}`, this.formData)
          .then(result => {
            if (result.status === 200) {
              // 编程式导航
              this.$router.push("/heroes");
            }
          });
      }
    },
    queryItem() {
      const { id } = this.$route.params;
      axios.get(`http://localhost:3000/heroes/${id}`).then(result => {
        if (result.status === 200) {
          this.formData = result.data;
        }
      });
    }
  },
  created() {
    this.queryItem();
  }
};
</script>

<style>
</style>