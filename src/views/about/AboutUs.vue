<script setup>
import HeaderBreadcrumb from "@/components/HeaderBreadcrumb.vue";
import {useCurrentTime} from "@/utils/data.js";

const { days, hours, seconds, minutes } = useCurrentTime('2025-7-5')

const teachers = [
  {
    id: 1,
    name: '白马讲师',
    role: 'Java开发讲师'
  }, {
    id: 2,
    name: '绿马讲师',
    role: 'Python开发讲师'
  }, {
    id: 3,
    name: '蓝马讲师',
    role: 'C#开发讲师'
  }, {
    id: 4,
    name: '黑马讲师',
    role: 'Golang开发讲师'
  }
]
</script>

<template>
  <div>
    <header-breadcrumb :path="['关于我们', '公司介绍']"/>
    <div class="about-us-area single-page">
      <div class="container">
        <div class="row justify-content-between">
          <!-- title & image -->
          <div class="col-lg-7">
            <div class="about-single-image">
              <div class="about-single-1-img">
                <img src="/img/bg-img/inner/about-1.png" alt="">
              </div>
              <div class="about-single-2-img">
                <img class="about-info-img-1" src="/img/bg-img/inner/about-2.png" alt="">
                <img class="about-info-img-2" src="/img/bg-img/inner/about-3.png" alt="">
              </div>
            </div>
          </div>
          <!-- About Text -->
          <div class="col-lg-5">
            <div class="about-us-title-img">
              <div class="wow fadeInRight" data-wow-delay="200ms" style="visibility: visible; animation-delay: 500ms; animation-name: fadeInRight;">
                <h6 class="about-sub-title"><span class="icon-open-book-1"></span> 公司介绍</h6>
                <h3>让每一个儿童都适应时代的发展</h3>
              </div>
            </div>
            <div class="about-desc-info-area">
              <h6 class="mb-4 wow fadeInRight" data-wow-delay="300ms" style="visibility: visible; animation-delay: 700ms; animation-name: fadeInRight;">
                我们少儿编程俱乐部致力于为孩子们打造一个充满创造力与探索精神的学习环境。通过小组讨论、项目式挑战、动手实践等多种主动学习活动，孩子们不仅能掌握编程知识，更能提升逻辑思维、问题解决和团队协作能力。我们鼓励每位学员积极参与、大胆表达，让学习成为一种乐趣，也让知识真正融入思维与生活。
              </h6>
              <!-- Content Card Area -->
              <div class="about-content-card-area">
                <div class="row">
                  <!-- Single Card -->
                  <div class="col-md-6">
                    <div class="about-single-card wow fadeInRight" data-wow-delay="200ms" style="visibility: visible; animation-delay: 1000ms; animation-name: fadeInRight;">
                      <div class="about-card-icon">
                        <span class="icon-maps-and-flags3 text--primary"></span>
                      </div>
                      <h4>灵活的课程安排</h4>
                      <p>灵活的上课时间，满足不同家庭和孩子的需求。</p>
                      <span class="about-line-shape"></span>
                    </div>
                  </div>

                  <!-- Single Card -->
                  <div class="col-md-6">
                    <div class="about-single-card wow fadeInRight" data-wow-delay="200ms" style="visibility: visible; animation-delay: 1200ms; animation-name: fadeInRight;">
                      <div class="about-card-icon">
                        <span class="icon-maps-and-flags2 text--second"></span>
                      </div>
                      <h4>亲民的价格</h4>
                      <p>合理定价，让每个家庭都能轻松承担学习费用。</p>
                      <span class="about-line-shape"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-slider-section single-page">
      <div class="text-slider-box">
        <div class="slide-box">
          <h2><span>学习 .</span></h2>
        </div>
        <div class="slide-box">
          <h2>不求人 .</h2>
        </div>
        <div class="slide-box">
          <h2>少儿 .</h2>
        </div>
        <div class="slide-box">
          <h2>编程</h2>
        </div>

        <div class="slide-box">
          <h2>快乐 .</h2>
        </div>
        <div class="slide-box">
          <h2>成长</h2>
        </div>
      </div>
    </div>
    <div class="counter-up-area single-page" style="background-image: url(/img/bg-img/popular.png);">
      <div class="container">
        <div class="row justify-content-center">
          <!-- title -->
          <div class="col-md-8 col-lg-7">
            <div class="section-title-area text-center wow fadeInRight" data-wow-delay="500ms" style="visibility: visible; animation-delay: 500ms; animation-name: fadeInRight;">
              <h6>成立了多久？</h6>
              <h2 class="mb-0">我们创立了不求人少儿编程已经</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- single card -->
          <div class="col-sm-6 col-lg-3">
            <div class="single-counter-card wow fadeInRight" data-wow-delay="500ms" style="visibility: visible; animation-delay: 500ms; animation-name: fadeInRight;">
              <div class="counter-info text-center bg--primary">
                <h2>{{ days }}</h2>
                <p>天</p>
              </div>
            </div>
          </div>

          <!-- single card -->
          <div class="col-sm-6 col-lg-3">
            <div class="single-counter-card wow fadeInRight" data-wow-delay="700ms" style="visibility: visible; animation-delay: 700ms; animation-name: fadeInRight;">
              <div class="counter-info text-center bg--second">
                <h2>{{ hours }}</h2>
                <p>小时</p>
              </div>
            </div>
          </div>

          <!-- single card -->
          <div class="col-sm-6 col-lg-3">
            <div class="single-counter-card wow fadeInRight" data-wow-delay="900ms" style="visibility: visible; animation-delay: 900ms; animation-name: fadeInRight;">
              <div class="counter-info text-center bg--dark">
                <h2>{{ minutes }}</h2>
                <p>分钟</p>
              </div>
            </div>
          </div>
          <!-- single card -->
          <div class="col-sm-6 col-lg-3">
            <div class="single-counter-card wow fadeInRight" data-wow-delay="1100ms" style="visibility: visible; animation-delay: 1100ms; animation-name: fadeInRight;">
              <div class="counter-info text-center bg--navy">
                <h2>{{ seconds }}</h2>
                <p>秒</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="team-area single-page">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-7">
            <div class="section-title-area text-center wow fadeInRight" data-wow-delay="500ms" style="visibility: visible; animation-delay: 500ms; animation-name: fadeInRight;">
              <h6>经验丰富的教学团队</h6>
              <h2 class="mb-0">我们的杰出教师列表广受学生好评</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Single member -->
          <div class="col-sm-6 col-lg-3" v-for="teacher in teachers">
            <div class="team-block">
              <div class="single-team-card relative wow fadeInUp" data-wow-delay="500ms" style="visibility: visible; animation-delay: 500ms; animation-name: fadeInUp;">
                <!-- Border shape -->
                <div class="border-s-1"></div>
                <div class="border-s-2"></div>
                <div class="border-s-3"></div>
                <div class="border-s-4"></div>
                <div class="border-s-5"></div>
                <!-- img -->
                <div class="team-img relative">
                  <img class="relative" :src="`/img/bg-img/t-${teacher.id}.jpg`" alt="">

                  <!-- content text -->
                  <div class="member-info text-center">
                    <h3>{{ teacher.name }}</h3>
                    <p>{{ teacher.role }}</p>
                  </div>

                  <div class="contact-social-icon">
                    <div class="share-icon-area">
                      <div class="share-icon"> <span class="icon-share-alt-solid-1 share--icon"></span>
                        <div class="conatct-icon-">
                          <ul>
                            <li><a href="#"><span class="icon-facebook-f"></span></a>
                            </li>
                            <li><a href="#"><span class="icon-linkedin-in"></span></a>
                            </li>
                            <li><a href="#"><span class="icon-twitter"></span></a></li>
                          </ul>
                        </div>
                      </div>

                    </div>

                  </div>
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