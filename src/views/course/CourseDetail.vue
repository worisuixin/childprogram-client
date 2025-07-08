<script setup>
import {useRoute} from "vue-router";
import request from "@/net/index.js";
import router from "@/router/index.js";
import {ref} from "vue";
import {createRandomInt, formatTime} from "../../utils/data.js";
import HeaderBreadcrumb from "@/components/HeaderBreadcrumb.vue";
import {getToken} from "@/utils/token.js";
import Swal from "sweetalert2";
import {useAccount} from "@/stores/user.js";

const route = useRoute()
const account = useAccount()
const id = route.params.id

const data = ref({})

if(!id) {
  router.push('/course/list')
}

request.get(`/system/course/${route.params.id}`).then((res) => {
  data.value = res.data.data
})

function addCourseToCart() {
  if (!getToken()) {
    router.push('/login')
    return
  }
  request.post(`/system/item/add/${id}`).then(() => {
    account.cart.count++
    Swal.fire({ title: "添加商品", text: "课程已经添加到购物车中，请继续选购", icon: "success" }).then(() => {
      router.push('/cart')
    })
  })
}
</script>

<template>
  <div>
    <header-breadcrumb :path="[data.title]"/>
    <div class="course-details-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="course-details-content-area">
              <div class="course-heading-details">
                <div class="course-title">
                  <h2>{{ data.title }}</h2>
                  <a class="inner-btn" href="#">￥{{ data.price }}</a>
                </div>
                <div class="course-info-card-area">
                  <!-- Card -->
                  <div class="course-info-card">
                    <h4> 讲师</h4>
                    <div class="course-auth-info-4 d-flex align-items-center">
                      <img class="auth-img" :src="`/img/course/avatar/c-${data.id}.png`" alt="">
                      <p>By <a href="#">{{ data.teacher }}</a></p>
                    </div>
                  </div>
                  <!-- Card -->
                  <div class="course-info-card">
                    <h4>评分</h4>
                    <p class="course-rating mb-0"><i class="icon-star1"></i> 4.5 <span>(100 次购买)</span></p>
                  </div>
                  <!-- Card -->
                  <div class="course-info-card">
                    <h4>观看</h4>
                    <p class="course-desc"> {{ createRandomInt() }} 学生正在观看</p>
                  </div>
                  <!-- Card -->
                  <div class="course-info-card">
                    <h4>分类</h4>
                    <p class="course-desc"> 少儿编程</p>
                  </div>
                </div>
              </div>
              <div class="course-bg-img">
                <img :src="`/img/course/list/list-${data.id}.png`" alt="">
              </div>
              <div class="course-detials-tab">
                <ul class="nav nav-pills course-tab-title" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i class="icon-inclined-pencil"></i> Description</button>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    <div class="course-details-tab-content">
                      <h4>关于此课程</h4>
                      <p>{{ data.description }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="other-ins-area">
                <!-- Faq area -->
                <div class="faq-area course-details">
                  <div class="faq-content-area single-page-faq">
                    <h4>常见问题和解答</h4>
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item  wow fadeInUp" data-wow-delay="700ms" style="visibility: visible; animation-delay: 700ms; animation-name: fadeInUp;">
                        <h2 class="accordion-header">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            1. 学习少儿编程有什么好处呢?
                          </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p>"锻炼宝宝体制，促进大脑发育，保证学生身心健康。从小学习编程，可以领先别人一大截，别人到了
                              大学才开始学，而你家宝宝小学就可以去打竞赛了，随随便便都可以吊打大学生，直接赢在起跑线上，
                              这样过年回家就可以在亲戚面前炫耀一番了"</p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item wow fadeInUp" data-wow-delay="900ms" style="visibility: visible; animation-delay: 900ms; animation-name: fadeInUp;">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            2. Do you offer any extracurricular activities for the
                            students?
                          </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p>"Edumastery has been an amazing experience for our
                              daughter, Lily.
                              The
                              inclusive and enriching atmosphere has not only helped
                              her academic
                              growth
                              but has also fostered her social and emotional
                              development. We are
                              grateful
                              for the caring and dedicated staff."</p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item  wow fadeInUp" data-wow-delay="1100ms" style="visibility: visible; animation-delay: 1100ms; animation-name: fadeInUp;">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            3. What is your approach to handling children ?
                          </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p>"Edumastery has been an amazing experience for our
                              daughter, Lily.
                              The
                              inclusive and enriching atmosphere has not only helped
                              her academic
                              growth
                              but has also fostered her social and emotional
                              development. We are
                              grateful
                              for the caring and dedicated staff."</p>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item  wow fadeInUp" data-wow-delay="1300ms" style="visibility: visible; animation-delay: 1300ms; animation-name: fadeInUp;">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            4. How do you ensure the safety of the children on the
                            premises?
                          </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p>"Edumastery has been an amazing experience for our
                              daughter, Lily.
                              The
                              inclusive and enriching atmosphere has not only helped
                              her academic
                              growth
                              but has also fostered her social and emotional
                              development. We are
                              grateful
                              for the caring and dedicated staff."</p>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="sidebar-content-single-area">
              <div class="side-bar-video-area">
                <div class="how-it-work-content-3 relative">
                  <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=113440119063884&bvid=BV1T6DmYUE93&cid=26651593869&p=1"
                          scrolling="no" width="100%" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
                </div>
                <div class="enroll-course-content">
                  <div class="enroll-heading text-center">
                    <a class="auth-btn w-100" @click="addCourseToCart">购买此课程</a>
                    <p>30天无理由退款</p>
                  </div>

                  <ul class="course-info-list">
                    <li>课程节数 : <span>{{ data.lessone }}</span></li>
                    <li>课程时长 : <span>{{ formatTime(data.duration) }}</span></li>
                    <li>最大学生数: <span>{{ data.maxStudents }}</span></li>
                    <li>是否下证 : <span>包的</span></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>