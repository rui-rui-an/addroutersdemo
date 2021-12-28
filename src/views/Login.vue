<template>
  <div class="login">
    <div class="login_box">
      <el-form
        :model="ruleForm"
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.account"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        pass: "",
        account: "",
      },
    }
  },
  methods: {
    submitForm(formName) {
      // this.$store.dispatch("user/login", this.ruleForm).then(() => {
      //   this.$router.push({ path: "home" })
      // })
      this.$axios('/user/login').then((res)=>{
        console.log(res);
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
  created() {},
}
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_box {
    width: 500px;
  }
}
</style>
