<script setup>
import HeaderBreadcrumb from "@/components/HeaderBreadcrumb.vue";
import {reactive} from "vue";
import request from "@/net/index.js";
import Swal from "sweetalert2";

const advice = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

function createUserAdvice() {
  request.post('/system/advice/create', advice).then(({ data }) => {
    if(data.code !== 200) {
      Swal.fire({ title: "提交意见", text: `提交失败: ${data.msg}`, icon: "error" })
    } else {
      Swal.fire({ title: "提交意见", text: "您的意见已经成功提交", icon: "success" })
    }
  })
}
</script>

<template>
  <div>
    <header-breadcrumb :path="['关于我们', '意见反馈']"/>
    <div class="contact-us-area page-2" style="padding-bottom: 80px">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="contact-img">
              <img src="/img/bg-img/inner/contact.png" alt="">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="conatct-content-area">
              <div class="section-title-area" style="margin-bottom: 0">
                <h6>联系我们</h6>
                <h3 class="mb-4 mt-3">欢迎填写您的意见并投递</h3>
                <form id="contact-form-mejor" novalidate="novalidate">
                  <div class="form-floating mb-5">
                    <input type="text" v-model="advice.name"
                           class="form-control" id="name" placeholder="Name">
                    <label class="lable-text" for="name">名字</label>
                  </div>
                  <div class="form-floating mb-5">
                    <input type="email"  v-model="advice.email"
                           class="form-control" id="email" placeholder="Email">
                    <label class="lable-text" for="email">电子邮件</label>
                  </div>
                  <div class="form-floating mb-5">
                    <input type="number" v-model="advice.phone"
                           class="form-control" id="phone" placeholder="Phone">
                    <label class="lable-text" for="phone">手机号</label>
                  </div>
                  <div class="form-floating mb-5">
                    <textarea class="form-control" v-model="advice.message"
                              placeholder="Message" id="message"></textarea>
                    <label class="lable-text" for="message">消息</label>
                  </div>
                </form>
                <button @click="createUserAdvice"
                        class="auth-btn w-100">投递意见</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-map">
      <div class="container" style="padding-bottom: 80px">
        <div class="row">
          <div class="col-12">
            <div class="conatct-info-meta">
              <!-- Single Card -->
              <div class="contact-single-info-card">
                <div class="contact-icon">
                  <i class="icon-phone-alt-solid-11"></i>
                </div>
                <h4>联系电话</h4>
                <p>0631-5688101</p>
              </div>

              <!-- SIngle Card -->
              <div class="contact-single-info-card">
                <div class="contact-icon">
                  <i class="icon-mail"></i>
                </div>
                <h4>电子邮件</h4>
                <p>dmbqr@mail.sdu.edu.cn</p>
              </div>

              <!-- SIngle Card -->
              <div class="contact-single-info-card">
                <div class="contact-icon">
                  <i class="icon-Vec1tor"></i>
                </div>
                <h4>线下地址</h4>
                <p>山东省威海市环翠区文化西路180号山东大学（威海）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe src="https://map.baidu.com/search/%E5%B1%B1%E4%B8%9C%E5%A4%A7%E5%AD%A6(%E5%A8%81%E6%B5%B7%E6%A0%A1%E5%8C%BA)/@13587612.2237899,4488279.13866315,16z?querytype=s&da_src=shareurl&wd=%E5%B1%B1%E4%B8%9C%E5%A4%A7%E5%AD%A6(%E5%A8%81%E6%B5%B7%E6%A0%A1%E5%8C%BA)&c=288&src=0&wd2=%E5%A8%81%E6%B5%B7%E5%B8%82%E7%8E%AF%E7%BF%A0%E5%8C%BA&pn=0&sug=1&l=13&b=(13566670,4478050;13615822,4503266)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&sug_forward=033eb4e42e97a4132811d176&device_ratio=2"></iframe>
    </div>
  </div>
</template>

<style scoped>
.conatct-info-meta {
  position: static;

  .contact-single-info-card {
    position: static;
    border-radius: 10px;
  }
}
</style>