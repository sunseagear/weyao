<template>
  <div :style="{ backgroundImage: `url(${img})` }" class="login-wrap">
    <div class="form">
      <h1 class="project">欢迎使用文鳐</h1>
      <van-form @submit="login">
        <van-field
          v-model="temp.username"
          :rules="[{ required: true }]"
          left-icon="user-o"
          label-width="10px"
          label=" "
          placeholder="请输入用户名"
        >
          <template slot="left-icon">
            <van-icon name="user-o" color="lightgray" size="25"/>
          </template>
        </van-field>
        <van-field
          v-model="temp.password"
          :rules="[{ required: true }]"
          left-icon="closed-eye"
          label-width="10px"
          label=" "
          placeholder="请输入密码"
          type="password"
        >
          <template slot="left-icon">
            <van-icon name="closed-eye" color="lightgray" size="25"/>
          </template>
        </van-field>
        <van-button native-type="submit" class="submitbtn" >登录</van-button>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'Login',
  data() {
    return {
      img: require('@/assets/bg.jpg'),
      temp: {
        username: undefined,
        password: undefined
      }
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('user/login', this.temp)
        .then((response) => {
          this.loading = false
          if (!this.$store.getters.userInfo) {
            Toast.fail(response.data.message)
            return
          }

          this.$router.push({
            path: this.redirect || '/home',
            query: this.otherQuery
          })
        })
        .catch(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="less" scoped>
  // 背景图片
  .login-wrap {
    position: fixed;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .form {
    background: rgba(0,0,0,.3);
    padding: 20px;
    margin: 20vh 6vw;
  }

  // 项目名称
  .project {
    color: white;
    text-align: center;
    border: 0;
  }

  // 提交按钮
  .submitbtn {
    width: 100%;
    margin-top: 13%;
    background-image: linear-gradient(#e55753, #e5433e);
    color: #fff;
    border: 0px;
    font-size: 17px;
    letter-spacing: 1px;
    border-radius: 5px;
  }
</style>
