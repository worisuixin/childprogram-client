<script setup>
const vips = [
  {
    id: 1,
    name: '普通会员',
    price: '35',
    limit: 1,
    disable: ['vip1', 'vip2', "vip3"],
    colorClass: [],
    desc: ['少儿编程基础课程免费学习', '线下老师一对一指导', '免费使用少儿编程开发器件', '全天候在线咨询服务', '更多在线直播课程']
  }, {
    id: 2,
    name: '黄金会员',
    price: '100',
    limit: 1,
    disable: ['vip2', "vip3"],
    colorClass: ['two'],
    desc: [
      '少儿编程全套课程免费学习', '线下老师一对一指导', '免费使用少儿编程开发器件', '全天候在线咨询服务', '更多在线直播课程',
      '每周一次家庭教育服务', '周一到周五放学托管服务'
    ]
  }
]
</script>

<template>
  <div>
    <div class="hero-area-2">
      <!-- Shape -->
      <div class="hero-2-curbe-shape">
        <img src="/img/bg-img/hero-2-shape.png" alt="">
      </div>
      <div class="hero-2-shape-1 wow fadeInDown" data-wow-delay="900ms" style="visibility: visible; animation-delay: 900ms; animation-name: fadeInDown;">
        <img src="/img/bg-img/home-2/shape-1.png" alt="">
      </div>

      <div class="hero-2-shape-2">
        <img src="/img/bg-img/home-2/shape-2.png" alt="">
      </div>

      <div class="hero-2-shape-3">
        <img src="/img/bg-img/home-2/shape-4.png" alt="">
      </div>

      <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-between">
          <div class="col-lg-5">
            <!-- Content text -->
            <div class="hero-content-text">
              <h6 class="wow fadeInUp" data-wow-delay="300ms" style="visibility: visible; animation-delay: 500ms; animation-name: fadeInUp;"><i class="icon-icon_document_alt"></i>
                欢迎加入代码不求人</h6>
              <h2 class="wow fadeInUp" data-wow-delay="400ms" style="visibility: visible; animation-delay: 900ms; animation-name: fadeInUp;">{{ $t('system.name') }}
              </h2>
              <div class="hero-btn-area mt-5 wow fadeInUp" data-wow-delay="1300ms" style="visibility: visible; animation-delay: 1300ms; animation-name: fadeInUp;">
                <a class="btn-1" @click.prevent="$router.push('/about')">
                  了解更多 <span class="icon-right-arrow-11"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="welcome-img-2 text-center relative">
              <img class="wel-img-2 wow fadeInUp" data-wow-delay="300ms" src="/img/bg-img/hero-3.png" alt="" style="visibility: visible; animation-delay: 500ms; animation-name: fadeInUp;">
              <div class="shape-box">
                <img src="/img/bg-img/home-2/shape-5.png" alt="">
              </div>
              <div class="bag-shape wow fadeInLeft" data-wow-delay="300ms" style="visibility: visible; animation-delay: 1000ms; animation-name: fadeInLeft;">
                <img src="/img/bg-img/home-2/shape-3.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="care-program-area">
      <div class="container">
        <div class="row justify-content-center">
          <!-- title -->
          <div class="col-lg-6">
            <div class="section-title-area text-center wow fadeInDown" data-wow-delay="300ms" style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;">
              <h6>能学到什么？</h6>
              <h2 class="mb-0">少儿编程课程安排</h2>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Single Card -->
          <div class="col-md-6 col-lg-4">
            <div class="single-care-card relative text-center wow fadeInLeft" data-wow-delay="400ms" style="visibility: visible; animation-delay: 700ms; animation-name: fadeInLeft;">
              <div class="care-shape wow fadeInDown" data-wow-delay="700ms" style="visibility: visible; animation-delay: 1400ms; animation-name: fadeInDown;">
                <img src="/img/bg-img/home-2/care-shap.png" alt="">
              </div>
              <div class="care-card-img-content">
                <div class="care-img">
                  <img src="/img/bg-img/care-1.jpg" alt="scratch拖拽编程课程">
                </div>

                <div class="care-content-text">
                  <h4>Scratch趣味图形化编程</h4>
                  <p>适合6-10岁零基础孩子，通过积木拖拽式的编程方式，像拼图一样设计动画、游戏和互动作品，激发孩子的逻辑思维和创造力。课程贴合中国小学阶段认知发展特点，寓教于乐，轻松入门编程世界。</p>
                  <div class="care-count-info">
                    <p class="mb-0"><span>课时:</span> 约5小时45分钟</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Single Card -->
          <div class="col-md-6 col-lg-4">
            <div class="single-care-card relative text-center wow fadeInLeft" data-wow-delay="500ms" style="visibility: visible; animation-delay: 900ms; animation-name: fadeInLeft;">
              <div class="care-shape wow fadeInDown" data-wow-delay="700ms" style="visibility: visible; animation-delay: 1400ms; animation-name: fadeInDown;">
                <img src="/img/bg-img/home-2/care-shap.png" alt="">
              </div>
              <div class="care-card-img-content">
                <div class="care-img">
                  <img src="/img/bg-img/care-2.jpg" alt="">
                </div>

                <div class="care-content-text">
                  <h4>Python人工智能启蒙编程</h4>
                  <p>适合10岁以上有一定逻辑思维能力的孩子，使用Python语言搭配图形界面开发、AI人工智能项目（如人脸识别、语音助手、智能问答）进行学习，逐步掌握代码编写能力，为中学信息学竞赛及未来AI方向打下基础。</p>
                  <div class="care-count-info">
                    <p class="mb-0"><span>课时:</span> 约2小时20分钟</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Single Card -->
          <div class="col-md-6 col-lg-4">
            <div class="single-care-card relative text-center wow fadeInLeft" data-wow-delay="500ms" style="visibility: visible; animation-delay: 1100ms; animation-name: fadeInLeft;">
              <div class="care-shape wow fadeInDown" data-wow-delay="700ms" style="visibility: visible; animation-delay: 1400ms; animation-name: fadeInDown;">
                <img src="/img/bg-img/home-2/care-shap.png" alt="">
              </div>
              <div class="care-card-img-content">
                <div class="care-img">
                  <img src="/img/bg-img/care-3.jpg" alt="">
                </div>

                <div class="care-content-text">
                  <h4>编程与机器人实践课（树莓派/Arduino）</h4>
                  <p>通过图形化或代码方式控制智能硬件（如树莓派、Arduino等），完成如智能小车、自动浇花装置、语音识别灯等项目，培养孩子动手能力与项目实践能力，结合编程与工程思维，适合喜欢动手的孩子。</p>
                  <div class="care-count-info">
                    <p class="mb-0"><span>课时:</span> 约10小时10分钟</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popular-cate-2-area bg-img bg-overlay relative" style="background-image: url(/img/bg-img/popular.png);">
      <div class="cate-2-shape wow fadeInRight" data-wow-delay="600ms" style="visibility: visible; animation-delay: 1200ms; animation-name: fadeInRight;">
        <img src="/img/bg-img/home-2/shape-6.png" alt="">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="section-title-area cate-heading">
              <h6 class="wow fadeInDown" data-wow-delay="300ms" style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;">欢迎加入我们</h6>
              <h2 class="wow fadeInDown" data-wow-delay="400ms" style="visibility: visible; animation-delay: 700ms; animation-name: fadeInDown;">加入少儿编程俱乐部，让自己的孩子赢在起跑线</h2>
              <p class="mb-5 wow fadeInDown" data-wow-delay="500ms" style="visibility: visible; animation-delay: 900ms; animation-name: fadeInDown;">
                现在加入会员，送价值288的入会大礼包，暑假特惠
              </p>
              <a class="btn-1 wow fadeInDown" @click.prevent="$router.push('/about')" data-wow-delay="500ms" href="#" style="visibility: visible; animation-delay: 1100ms; animation-name: fadeInDown;">了解更多 <span class="icon-right-arrow-11"></span></a>
            </div>
          </div>

          <div class="col-md-6 col-lg-4" v-for="vip in vips">
            <div class="cate-price-card wow fadeInUp" :class="vip.colorClass"
                 data-wow-delay="400ms" style="visibility: visible; animation-delay: 700ms; animation-name: fadeInUp;">
              <div class="cate-price-body">
                <h2>
                  {{ vip.name }} <br>
                  <span class="cate-price-title">￥{{ vip.price }} /</span>
                  <span class="month-desc">月</span>
                </h2>
                <h6>{{ vip.limit }} 个小朋友可用</h6>
                <ul>
                  <li v-for="item in vip.desc">{{ item }}</li>
                </ul>

                <div class="price-btn-area">
                  <a class="price-btn" href="/course/vip">
                    立即购买 <span class="icon-right-arrow-11"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="counter-area-home-2">
      <div class="counter-shape wow fadeInLeft" data-wow-delay="400ms" style="visibility: visible; animation-delay: 900ms; animation-name: fadeInLeft;">
        <img src="/img/bg-img/counter-shape.png" alt="">
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <!-- Single card -->
          <div class="col-sm-6 col-lg-4">
            <div class="single-counter-2-card d-flex align-items-center wow fadeInDown" data-wow-delay="200ms" style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;">
              <!-- icon -->
              <div class="counter-2-icon">
                <span class="icon-ruler-combined-solid-1"></span>
              </div>
              <!-- text -->
              <div class="counter-2-text">
                <h2><span class="counter">50+</span></h2>
                <p>在线课程</p>
              </div>
            </div>
          </div>

          <!-- Single card -->
          <div class="col-sm-6 col-lg-4">
            <div class="single-counter-2-card d-flex align-items-center wow fadeInDown" data-wow-delay="300ms" style="visibility: visible; animation-delay: 700ms; animation-name: fadeInDown;">
              <!-- icon -->
              <div class="counter-2-icon">
                <span class="icon-book-solid-11"></span>
              </div>
              <!-- text -->
              <div class="counter-2-text">
                <h2><span class="counter">30+</span></h2>
                <p>教师人数</p>
              </div>
            </div>
          </div>

          <!-- Single card -->
          <div class="col-sm-6 col-lg-4">
            <div class="single-counter-2-card d-flex align-items-center wow fadeInDown" data-wow-delay="400ms" style="visibility: visible; animation-delay: 900ms; animation-name: fadeInDown;">
              <!-- icon -->
              <div class="counter-2-icon">
                <span class="icon-ruler-combined-solid-1"></span>
              </div>
              <!-- text -->
              <div class="counter-2-text">
                <h2><span class="counter">300+</span></h2>
                <p>学习学生</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio-area">
      <!-- Shape -->
      <div class="gallery-curbe-shape">
        <img src="/img/bg-img/hero-2-shape.png" alt="">
      </div>
      <div class="g-shape-2 wow fadeInDown animated" data-wow-delay="300ms" style="visibility: visible; animation-delay: 700ms; animation-name: spin;">
        <img src="/img/bg-img/home-2/shape-20.png" alt="">
      </div>

      <div class="g-shape-3">
        <img src="/img/bg-img/home-2/shape-19.png" alt="">
      </div>

      <div class="g-shape-1 wow fadeInDown" data-wow-delay="300ms" style="visibility: visible; animation-delay: 700ms; animation-name: fadeInDown;">
        <img src="/img/bg-img/home-2/shape-18.png" alt="">
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <!-- title -->
          <div class="col-lg-7">
            <div class="section-title-area text-center wow fadeInDown" data-wow-delay="300ms" style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;">
              <h6>学员留影</h6>
              <h2 class="mb-0">快乐的编程时光</h2>
            </div>
          </div>
        </div>

        <div class="row g-4 g-lg-5 gallery-area" style="position: relative; height: 419.008px;">
          <!-- Card -->
          <div class="col-12 col-sm-6 col-lg-3" style="position: absolute; left: 0%; top: 0px;">
            <div class="portfolio-card border--pri-1">
              <div class="portfolio-image  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="100ms" style="visibility: visible; animation-duration: 1000ms; animation-delay: 200ms; animation-name: fadeInUp;">
                <img src="/img/bg-img/home-2/p-1.png" alt="">

                <!-- Overlay Content -->
                <div class="overlay-content d-flex align-items-center justify-content-center">
                  <div class="text-center venobox-area">
                    <a class="venobox mb-3 vbox-item" data-maxwidth="800px" data-gall="portfolio" href="img/bg-img/home-2/p-1.png">
                      <span class="icon-Arrow-1"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="portfolio-card border--pri-1 mt-20">
              <div class="portfolio-image wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="100ms" style="visibility: visible; animation-duration: 1000ms; animation-delay: 200ms; animation-name: fadeInUp;">
                <img src="/img/bg-img/home-2/p-2.png" alt="">

                <!-- Overlay Content -->
                <div class="overlay-content d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <a class="venobox mb-3 vbox-item" data-maxwidth="800px" data-gall="portfolio" href="img/bg-img/home-2/p-2.png">
                      <span class="icon-Arrow-1"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card -->
          <div class="col-12 col-sm-6 col-lg-3" style="position: absolute; left: 25%; top: 0px;">
            <div class="portfolio-card border--dark-1">
              <div class="portfolio-image wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="100ms" style="visibility: visible; animation-duration: 1000ms; animation-delay: 200ms; animation-name: fadeInUp;">
                <img src="/img/bg-img/home-2/p-3.png" alt="">

                <!-- Overlay Content -->
                <div class="overlay-content d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <a class="venobox mb-3 vbox-item" data-maxwidth="800px" data-gall="portfolio" href="img/bg-img/home-2/p-3.png">
                      <span class="icon-Arrow-1"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="portfolio-card border--navy-1 mt-20">
              <div class="portfolio-image wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="100ms" style="visibility: visible; animation-duration: 1000ms; animation-delay: 200ms; animation-name: fadeInUp;">
                <img src="/img/bg-img/home-2/p-4.png" alt="">

                <!-- Overlay Content -->
                <div class="overlay-content d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <a class="venobox mb-3 vbox-item" data-maxwidth="800px" data-gall="portfolio" href="img/bg-img/home-2/p-4.png">
                      <span class="icon-Arrow-1"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card -->
          <div class="col-12 col-sm-6 col-lg-3" style="position: absolute; left: 50%; top: 0px;">
            <div class="portfolio-card border--pri-2">
              <div class="portfolio-image wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="100ms" style="visibility: visible; animation-duration: 1000ms; animation-delay: 200ms; animation-name: fadeInUp;">
                <img src="/img/bg-img/home-2/p-5.png" alt="">

                <!-- Overlay Content -->
                <div class="overlay-content d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <a class="venobox mb-3 vbox-item" data-maxwidth="800px" data-gall="portfolio" href="img/bg-img/home-2/p-5.png">
                      <span class="icon-Arrow-1"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card -->
          <div class="col-12 col-sm-6 col-lg-3" style="position: absolute; left: 75%; top: 0px;">
            <div class="portfolio-card border--pri-1">
              <div class="portfolio-image wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="100ms" style="visibility: visible; animation-duration: 1000ms; animation-delay: 200ms; animation-name: fadeInUp;">
                <img src="/img/bg-img/home-2/p-6.png" alt="">

                <!-- Overlay Content -->
                <div class="overlay-content d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <a class="venobox mb-3 vbox-item" data-maxwidth="800px" data-gall="portfolio" href="img/bg-img/home-2/p-6.png">
                      <span class="icon-Arrow-1"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="portfolio-card border--navy-1 mt-20">
              <div class="portfolio-image wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="100ms" style="visibility: visible; animation-duration: 1000ms; animation-delay: 200ms; animation-name: fadeInUp;">
                <img src="/img/bg-img/home-2/p-7.png" alt="">

                <!-- Overlay Content -->
                <div class="overlay-content d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <a class="venobox mb-3 vbox-item" data-maxwidth="800px" data-gall="portfolio" href="img/bg-img/home-2/p-7.png">
                      <span class="icon-Arrow-1"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="client-area-home-2 relative">
      <!-- Curbe shape -->
      <div class="client-curbe-shape">
        <img src="/img/bg-img/home-2/shape-14.png" alt="">
      </div>
      <div class="client-2-shape-1">
        <img src="/img/bg-img/home-4/shape-6.png" alt="">
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <!-- title -->
          <div class="col-md-8 col-lg-7">
            <div class="section-title-area text-center  wow fadeInDown" data-wow-delay="300ms" style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;">
              <h6>我们的用户反馈</h6>
              <h2 class="mb-0">课程回响：学员之声</h2>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Image -->
          <div class="col-md-4">
            <div class="client-image-home-2 relative  wow fadeInLeft" data-wow-delay="400ms" style="visibility: visible; animation-delay: 700ms; animation-name: fadeInLeft;">
              <img class="relative" src="/img/bg-img/home-2/client.jpeg.jpg" alt="">
              <div class="c-2-border-1"></div>
              <div class="c-2-border-2"></div>
              <div class="c-2-border-3"></div>
              <div class="c-2-border-4"></div>
              <div class="c-2-border-5"></div>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="swiper client-active-2 wow fadeInRight swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" data-wow-delay="900ms" style="visibility: visible; animation-delay: 900ms; animation-name: fadeInRight;">
              <!-- If we need navigation buttons -->
              <div class="testimonials-3-navigation-wrapper position-relative">
                <div class="common-slider-navigation">
                  <button class="client-active-1-button-prev" tabindex="0" aria-label="Previous slide" aria-controls="swiper-wrapper-bab3cf46d0795ae5"><span class="icon-arrow-right"></span></button>
                  <button class="client-active-1-button-next" tabindex="0" aria-label="Next slide" aria-controls="swiper-wrapper-bab3cf46d0795ae5"><span class="icon-right"></span></button>
                </div>
              </div>
              <div class="swiper-wrapper" id="swiper-wrapper-bab3cf46d0795ae5" aria-live="off" style="transition-duration: 3000ms; transform: translate3d(-1076px, 0px, 0px);"><div class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="0" role="group" aria-label="1 / 1" style="width: 468px; margin-right: 70px;">
                <div class="client-slider-home-2">

                  <!-- Single Slider -->
                  <div class="clinet-single-slider">
                    <div class="footer-icon-home-2">
                      <span class="icon-search-soli1d-1"></span>
                    </div>
                    <div class="client-info-meta-home-2">
                      <div class="client-img-rating-2">
                        <div class="clinet-rating">
                          <ul>
                            <li><span class="icon-star1"></span></li>
                            <li><span class="icon-star1"></span></li>
                            <li><span class="icon-star1"></span></li>
                            <li><span class="icon-star1"></span></li>
                            <li><span class="icon-star1"></span></li>
                          </ul>
                        </div>
                      </div>

                      <p>"我家孩子把课程完整地学完了，老师讲得非常好，课程通俗易懂的同时很有趣味性！能看得出来老师对待这门课程非常用心，感谢授课老师，也祝代码不求人越办越好！
                        "</p>
                      <!-- client info -->
                      <div class="client-footer d-flex align-items-end justify-content-between">
                        <div class="d-flex align-items-center">
                          <div class="user-icon">
                            <span class="icon-Frame"></span>
                          </div>
                          <div class="client-info">
                            <h4>佳航家长</h4>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
                <!-- single block -->
                <div class="swiper-slide swiper-slide-duplicate-active swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="0" role="group" aria-label="1 / 1" style="width: 468px; margin-right: 70px;">
                  <div class="client-slider-home-2">

                    <!-- Single Slider -->
                    <div class="clinet-single-slider">
                      <div class="footer-icon-home-2">
                        <span class="icon-search-soli1d-1"></span>
                      </div>
                      <div class="client-info-meta-home-2">
                        <div class="client-img-rating-2">
                          <div class="clinet-rating">
                            <ul>
                              <li><span class="icon-star1"></span></li>
                              <li><span class="icon-star1"></span></li>
                              <li><span class="icon-star1"></span></li>
                              <li><span class="icon-star1"></span></li>
                              <li><span class="icon-star1"></span></li>
                            </ul>
                          </div>
                        </div>

                        <p>"我家孩子把课程完整地学完了，老师讲得非常好，课程通俗易懂的同时很有趣味性！能看得出来老师对待这门课程非常用心，感谢授课老师，也祝代码不求人越办越好！
                          "</p>
                        <!-- client info -->
                        <div class="client-footer d-flex align-items-end justify-content-between">
                          <div class="d-flex align-items-center">
                            <div class="user-icon">
                              <span class="icon-Frame"></span>
                            </div>
                            <div class="client-info">
                              <h4>佳航家长</h4>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide swiper-slide-duplicate swiper-slide-active swiper-slide-duplicate-prev" data-swiper-slide-index="0" role="group" aria-label="1 / 1" style="width: 468px; margin-right: 70px;">
                  <div class="client-slider-home-2">

                    <!-- Single Slider -->
                    <div class="clinet-single-slider">
                      <div class="footer-icon-home-2">
                        <span class="icon-search-soli1d-1"></span>
                      </div>
                      <div class="client-info-meta-home-2">
                        <div class="client-img-rating-2">
                          <div class="clinet-rating">
                            <ul>
                              <li><span class="icon-star1"></span></li>
                              <li><span class="icon-star1"></span></li>
                              <li><span class="icon-star1"></span></li>
                              <li><span class="icon-star1"></span></li>
                              <li><span class="icon-star1"></span></li>
                            </ul>
                          </div>
                        </div>
                        <p>"我家孩子把课程完整地学完了，老师讲得非常好，课程通俗易懂的同时很有趣味性！能看得出来老师对待这门课程非常用心，感谢授课老师，也祝代码不求人越办越好！ "</p>
                        <!-- client info -->
                        <div class="client-footer d-flex align-items-end justify-content-between">
                          <div class="d-flex align-items-center">
                            <div class="user-icon">
                              <span class="icon-Frame"></span>
                            </div>
                            <div class="client-info">
                              <h4>佳航家长</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>