<template>
  <div class="Website">
    <!-- header -->
    <section id="header">
      <div class="header-area">
        <div id="nav" class="header_menu text-center" data-spy="affix" data-offset-top="50">
          <div class="container">
            <nav class="navbar navbar-default zero_mp">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar" />
                  <span class="icon-bar" />
                  <span class="icon-bar" />
                </button>
                <a class="navbar-brand custom_navbar-brand" href="#"><img src="./img/footerLogo.png" alt=""></a>
                <span class="ZT">中运卡行</span>
              </div>
              <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse zero_mp">
                <ul class="nav navbar-nav navbar-right main_menu">
                  <li id="topLi" class="active"><a href="#header">首页<span class="sr-only">(current)</span></a></li>
                  <li><a href="#production">中运卡行产品</a></li>
                  <li><a href="#strength">我们的优势</a></li>
                  <li><a href="#partner">战略合作客户</a></li>
                  <li><a href="#download">移动端下载</a></li>
                  <li><a href="#aboutUs">关于我们</a></li>
                  <li class="SplitLine" @click="showLoginBox"><a>登陆</a></li>
                  <li @click="showSignBox"><a>注册</a></li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-question-sign" style="padding-right:4px;" />客户服务 <span class="caret" /></a>
                    <ul class="dropdown-menu">
                      <li><a href="#"><i class="fa fa-envelope" />support@hawksu.com</a></li>
                      <li><a href="#"><i class="fa fa-phone" />400-888-8888</a></li>
                      <li><a href="#"><i class="fa fa-user" />查看所有联络方式</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <el-dialog
        class="LoginBox"
        title="登录中运卡行系统"
        :visible.sync="dialogLoginVisible"
        :close-on-click-modal="false"
        :width="dialoglWidth"
        :close="closeLogin"
      >
        <div class="InfoBlock">
          <div class="LeftInfo">
            <el-input v-model="account" placeholder="请输入您的手机号码" prefix-icon="el-icon-user-solid" />
            <el-input v-model="password" placeholder="请输入您的密码" prefix-icon="el-icon-lock" type="password" />
          </div>
          <div class="RightCode">
            <img src="./img/qrcode3.png">
            <p>APP扫码登陆</p>
          </div>
        </div>
        <div class="OptionBlock">
          <span>
            <el-checkbox v-model="ifRemember">记住密码</el-checkbox>
          </span>
          <span>忘记密码?</span>
        </div>
        <el-button type="primary" :loading="false" style="width:100%;border-radius:0;">登 陆</el-button>
        <p class="ToSign">还没有账号，立即注册</p>
      </el-dialog>
      <el-dialog
        class="SignBox"
        title="注册中运卡行账号"
        :visible.sync="dialogSignVisible"
        :close-on-click-modal="false"
        :width="dialogSWidth"
        :close="closeLogin"
      >
        <div class="TabBlock">
          <span :class="{activeTab: activeRole == 0}" @click="changeRole(0)">企业货主</span>
          <span :class="{activeTab: activeRole == 1}" @click="changeRole(1)">物流车队</span>
        </div>
        <div class="InfoBlock">
          <el-input v-model="account" placeholder="请输入您的手机号码" prefix-icon="el-icon-user-solid" />
          <div id="verify-wrap" class="verify-wrap" style="margin-top:10px;" />
          <el-input v-model="account" placeholder="请输入图形验证码" prefix-icon="el-icon-postcard" style="width:68%;border-right:0;display:inlie-block;" /><el-button type="primary" class="CodeBlock" style="">获取验证码</el-button>
          <el-input v-model="password" placeholder="请输入您的密码 (6-12位数字或 字母)" prefix-icon="el-icon-lock" type="password" />
          <el-input v-model="password" placeholder="请重复输入您的密码" prefix-icon="el-icon-lock" type="password" />
        </div>
        <div class="Agreement">
          <el-checkbox v-model="ifRemember"><b>阅读并同意</b></el-checkbox>
          <span v-if="activeRole == 0" @click="showAgreement">《XXXXXX货主服务协议》</span>
          <span v-if="activeRole == 1" @click="showAgreement">《XXXXXX物流车队服务协议》</span>
        </div>
        <el-button type="primary" :loading="false" style="width:100%;margin-bottom:20px;border-radius:0;">注册账号</el-button>
      </el-dialog>
    </section>
    <!-- carousel -->
    <section id="Carousel" class="CarouselBlock">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in carouselArr" :key="index" class="swiper-slide">
          <img :src="item.img">
          <div class="ContentTxt">
            <div class="slider_text">
              <h2>正标题内容</h2>
              <p>副标题副标题副标题副标题</p>
              <a class="custom_btn">查看更多</a>
            </div>
          </div>
          <div class="carousel-caption">
            <p><span><i class="fa fa-volume-up" />{{ item.news }}</span><span>查看更多 ></span></p>
          </div>
        </swiper-slide>
        <!-- 分页器 -->
        <div slot="pagination" class="swiper-pagination" />
        <!-- 左右箭头 -->
        <div slot="button-prev" class="swiper-button-prev" />
        <div slot="button-next" class="swiper-button-next" />
      </swiper>
    </section>
    <!-- fourBlock -->
    <section id="welcome">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 col-xs-6">
            <div class="item">
              <div class="single_item">
                <div class="item_list">
                  <div class="row">
                    <div class="col-md-3 col-sm-3 col-xs-3" style="padding: 0;">
                      <div class="welcome_icon">
                        <img style="width:90%;" src="./img/android.png">
                        <!-- <i class="fa fa-leaf"></i> -->
                      </div>
                    </div>
                    <div class="col-md-9 col-sm-9 col-xs-9">
                      <h5>实时发货</h5>
                      <p>文案内容文案内</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-6">
            <div class="item">
              <div class="single_item">
                <div class="item_list">
                  <div class="row">
                    <div class="col-md-3 col-sm-3 col-xs-3" style="padding: 0;">
                      <div class="welcome_icon">
                        <img style="width:90%;" src="./img/android.png">
                      </div>
                    </div>
                    <div class="col-md-9 col-sm-9 col-xs-9">
                      <h5>实时发货</h5>
                      <p>文案内容文案内</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-6">
            <div class="item">
              <div class="single_item">
                <div class="item_list">
                  <div class="row">
                    <div class="col-md-3 col-sm-3 col-xs-3" style="padding: 0;">
                      <div class="welcome_icon">
                        <img style="width:90%;" src="./img/android.png">
                      </div>
                    </div>
                    <div class="col-md-9 col-sm-9 col-xs-9">
                      <h5>实时发货</h5>
                      <p>文案内容文案内</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-6">
            <div class="item">
              <div class="single_item">
                <div class="item_list">
                  <div class="row">
                    <div class="col-md-3 col-sm-3 col-xs-3" style="padding: 0;">
                      <div class="welcome_icon">
                        <img style="width:90%;" src="./img/android.png">
                      </div>
                    </div>
                    <div class="col-md-9 col-sm-9 col-xs-9">
                      <h5>实时发货</h5>
                      <p>文案内容文案内</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- production -->
    <section id="production" style="background: rgba(242, 242, 242, 1);padding-bottom: 40px;">
      <div id="blog" style="padding-bottom: 0;">
        <div class="container" style="width: 95%;">
          <div class="row" style="padding-top: 15px;">
            <div class="col-md-12">
              <div class="latest_blog text-center">
                <h2><span class="ColumTit">中运卡行产品</span></h2>
                <p>简单几步，轻松发货，实时掌控</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="InnerWrap">
                <img src="./img/production1.jpg">
                <div class="OverText">
                  <div class="LeftBlock">
                    <span class="TopCont">内容简介内容简介内容简介内容简介内容简介内容简介</span>
                    <span class="SeeMore">查看更多</span>
                  </div>
                  <div class="RightBlock">
                    <span class="TitLine" />
                    <p>文章标题文章标题</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="InnerWrap">
                <img src="./img/production2.jpg">
                <div class="OverText">
                  <div class="LeftBlock">
                    <span class="TopCont">内容简介内容简介内容简介内容简介内容简介内容简介</span>
                    <span class="SeeMore">查看更多</span>
                  </div>
                  <div class="RightBlock">
                    <span class="TitLine" />
                    <p>文章标题文章标题</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="InnerWrap">
                <img src="./img/production3.jpg">
                <div class="OverText">
                  <div class="LeftBlock">
                    <span class="TopCont">内容简介内容简介内容简介内容简介内容简介内容简介</span>
                    <span class="SeeMore">查看更多</span>
                  </div>
                  <div class="RightBlock">
                    <span class="TitLine" />
                    <p>文章标题文章标题</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="InnerWrap">
                <img src="./img/production4.jpg">
                <div class="OverText">
                  <div class="LeftBlock">
                    <span class="TopCont">内容简介内容简介内容简介内容简介内容简介内容简介</span>
                    <span class="SeeMore">查看更多</span>
                  </div>
                  <div class="RightBlock">
                    <span class="TitLine" />
                    <p>文章标题文章标题</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- strength -->
    <section id="strength">
      <div id="blog">
        <div class="container" style="width: 78%;margin: 0 auto;">
          <div class="row" style="padding-top: 20px;">
            <div class="col-md-12">
              <div class="latest_blog text-center">
                <div class="latest_blog text-center">
                  <h2><span class="ColumTit">我们的优势</span></h2>
                  <p>网络货运SaaS云平台，六大优势，为您护航</p>
                </div>
              </div>
            </div>
          </div>
          <div class="outWrap col-md-4 col-sm-6 col-xs-12">
            <div class="item t-center">
              <div class="item-container">
                <img src="./img/icons/zdsb.png">
              </div>
            </div>
            <div class="RightCont">
              <h4>OCR 自动识别，保障真实性</h4>
              <p class="blog_news_content">货主身份证识别，车主身份证、行驶证、道路运输许可证、从业资格证的OCR验证识别</p>
            </div>
          </div>
          <div class="outWrap col-md-4 col-sm-6 col-xs-12">
            <div class="item t-center">
              <div class="item-container">
                <img src="./img/icons/zxzf.png">
              </div>
            </div>
            <div class="RightCont">
              <h4>在线支付，权威第三方支付平台为资金保驾护航</h4>
              <p class="blog_news_content">与支付宝、微信、通联等三方支付平台，为用户提供便捷支付功能，司机运费可快速到账，支持全国主流银行卡支付</p>
            </div>
          </div>
          <div class="outWrap col-md-4 col-sm-6 col-xs-12">
            <div class="item t-center">
              <div class="item-container">
                <img src="./img/icons/qy.png">
              </div>
            </div>
            <div class="RightCont">
              <h4>电子合同在线签署</h4>
              <p class="blog_news_content">与权威第三方专业电子合同公司合作，提供车货交易双方的合同签署、合同存储与查询服务</p>
            </div>
          </div>
          <div class="outWrap col-md-4 col-sm-6 col-xs-12">
            <div class="item t-center">
              <div class="item-container">
                <img src="./img/icons/ydd.png">
              </div>
            </div>
            <div class="RightCont">
              <h4>移动端(货主、司机)一体化管理</h4>
              <p class="blog_news_content">实时掌控货物运输过程，运输状态一目了然。司机端实现抢单、接单，不错失任何一个货源信息</p>
            </div>
          </div>
          <div class="outWrap col-md-4 col-sm-6 col-xs-12">
            <div class="item t-center">
              <div class="item-container">
                <img src="./img/icons/qcksh.png">
              </div>
            </div>
            <div class="RightCont">
              <h4>全程可视化监控，动态跟踪物流节点</h4>
              <p class="blog_news_content">通过车载GPS或手机APP，实时掌握运单状态。提供车辆离线、异常停车、线路便偏移、晚到预警等各类预警服务。对车辆出发、到达自动出发运单状态，无需人工操作</p>
            </div>
          </div>
          <div class="outWrap col-md-4 col-sm-6 col-xs-12">
            <div class="item t-center">
              <div class="item-container">
                <img src="./img/icons/bx.png">
              </div>
            </div>
            <div class="RightCont">
              <h4>引入保险机制</h4>
              <p class="blog_news_content">货主或车主可以按需求在线购买各种运输保险，为交易过程保驾护航</p>
            </div>
          </div>
          <div class="clear" />
        </div>
      </div>
    </section>
    <!-- partner -->
    <section id="partner" style="padding-top: 15px;">
      <div id="testimonial">
        <div class="testimonial_overlay">
          <div class="container" style="width:100%;">
            <div class="testimonial_header text-center">
              <h2><span class="ColumTit">战略合作客户</span></h2>
              <p>资源共享，合作共赢，成就未来</p>
            </div>
            <!--End of row-->
            <section id="carousel">
              <div class="">
                <div class="row">
                  <div class="col-md-12 text-center PadNo">
                    <div id="fade-quote-carousel" class="carousel slide" data-ride="carousel" data-interval="3000">
                      <!-- Carousel indicators -->
                      <ol class="carousel-indicators">
                        <li data-target="#fade-quote-carousel" data-slide-to="0" class="active" />
                        <li data-target="#fade-quote-carousel" data-slide-to="1" />
                        <li data-target="#fade-quote-carousel" data-slide-to="2" />
                      </ol>
                      <!-- Carousel items -->
                      <div class="carousel-inner">
                        <div class="active item">
                          <div class="row">
                            <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                              <div class="profile-circle">
                                <img src="./img/p3.jpg" alt="">
                              </div>
                              <div class="testimonial_content" style="background:rgba(33, 150, 243, 1);">
                                <!-- <i class="fa fa-quote-left"></i> -->
                                <p>中运卡行的成长速度令人惊讶！他们那群年轻人的热情与专注，使我始终对中运卡行充满信心。这个人性化、接地气的网络货运解决方案极大地提升了我们的运营效率和资金效率，也赢得了越来越多的用户认可。做物流，选平台，我推荐中运卡行</p>
                                <h5>XXXX集团董事长 路易斯</h5>
                              </div>
                              <div class="testimonial_author">
                                <img src="./img/partner1.jpg" alt="">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="item">
                          <div class="row">
                            <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                              <div class="profile-circle">
                                <img src="./img/mem3.jpg" alt="">
                              </div>
                              <div class="testimonial_content" style="background:rgba(50, 191, 192, 1);">
                                <p>中运卡行的成长速度令人惊讶！他们那群年轻人的热情与专注，使我始终对中运卡行充满信心。这个人性化、接地气的网络货运解决方案极大地提升了我们的运营效率和资金效率，也赢得了越来越多的用户认可。做物流，选平台，我推荐中运卡行</p>
                                <h5>XXXX集团董事长 路易斯</h5>
                              </div>
                              <div class="testimonial_author">
                                <img src="./img/partner2.jpg" alt="">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="item">
                          <div class="row">
                            <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                              <div class="profile-circle">
                                <img src="./img/p2.jpg" alt="">
                              </div>
                              <div class="testimonial_content" style="background:rgba(245, 154, 35, 1);">
                                <p>中运卡行的成长速度令人惊讶！他们那群年轻人的热情与专注，使我始终对中运卡行充满信心。这个人性化、接地气的网络货运解决方案极大地提升了我们的运营效率和资金效率，也赢得了越来越多的用户认可。做物流，选平台，我推荐中运卡行</p>
                                <h5>XXXX集团董事长 路易斯</h5>
                              </div>
                              <div class="testimonial_author">
                                <img src="./img/partner3.jpg" alt="">
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--ENd of item-->
                      </div>
                    </div>
                  </div>
                </div>
                <!--End of row-->
              </div>
              <!--End of container-->
            </section>
            <!--End of carousel-->
          </div>
        </div>
      </div>
      <!-- companyLogo -->
      <div class="container market_area text-center" style="margin-top:20px;">
        <div class="row">
          <div class="col-md-3 col-sm-3 col-xs-12 wow bounceIn" data-wow-duration="1s" data-wow-delay="1s">
            <div class="market_logo">
              <a><img src="./img/audio1.png"></a>
            </div>
          </div>
          <div class="col-md-3 col-sm-3 col-xs-12 wow bounceIn" data-wow-duration="1s" data-wow-delay="1.5s">
            <div class="market_logo">
              <a><img src="./img/audio1.png"></a>
            </div>
          </div>
          <div class="col-md-3 col-sm-3 col-xs-12 wow bounceIn" data-wow-duration="1s" data-wow-delay="2s">
            <div class="market_logo">
              <a><img src="./img/audio1.png"></a>
            </div>
          </div>
          <div class="col-md-3 col-sm-3 col-xs-12 wow bounceIn" data-wow-duration="1s" data-wow-delay="2.5s">
            <div class="market_logo">
              <a><img src="./img/audio1.png"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- downLoad -->
    <section id="download">
      <div id="blog" style="padding-bottom: 0;">
        <div class="container">
          <div class="row" style="padding-top: 15px;">
            <div class="col-md-12">
              <div class="latest_blog text-center">
                <h2><span class="ColumTit">移动端下载</span></h2>
                <p>多场景移动客户端，实现业务无缝衔接</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="market_area text-center wow fadeInDown" data-wow-duration="1s" data-wow-delay="1s">
                <div class="row">
                  <div class="col-md-2 col-sm-2 col-sm-offset-1">
                    <div class="blog_news">
                      <div class="single_blog_item">
                        <div class="blog_img">
                          <img src="./img/qrcode1.png" alt="">
                        </div>
                        <div class="blog_content">
                          <div class="expert">
                            <div class="left-side text-center">
                              <p class="left_side">
                                <span><img style="width:30px;height:30px;" src="./img/icons/android_hz.png"></span>
                                <span>安卓货主端</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2">
                    <div class="blog_news">
                      <div class="single_blog_item">
                        <div class="blog_img">
                          <img src="./img/qrcode2.png" alt="">
                        </div>
                        <div class="blog_content">
                          <div class="expert">
                            <div class="left-side text-center">
                              <p class="left_side">
                                <span><img style="width:30px;height:30px;" src="./img/icons/android_sj.png"></span>
                                <span>安卓司机端</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2">
                    <div class="blog_news">
                      <div class="single_blog_item">
                        <div class="blog_img">
                          <img src="./img/qrcode1.png" alt="">
                        </div>
                        <div class="blog_content">
                          <div class="expert">
                            <div class="left-side text-center">
                              <p class="left_side">
                                <span><img style="width:30px;height:30px;" src="./img/icons/ios_hz.png"></span>
                                <span>苹果货主端</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2">
                    <div class="blog_news">
                      <div class="single_blog_item">
                        <div class="blog_img">
                          <img src="./img/qrcode1.png" alt="">
                        </div>
                        <div class="blog_content">
                          <div class="expert">
                            <div class="left-side text-center">
                              <p class="left_side">
                                <span><img style="width:30px;height:30px;" src="./img/icons/ios_sj.png"></span>
                                <span>苹果司机端</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2">
                    <div class="blog_news">
                      <div class="single_blog_item">
                        <div class="blog_img">
                          <img src="./img/qrcode3.png" alt="">
                        </div>
                        <div class="blog_content">
                          <div class="expert">
                            <div class="left-side text-center">
                              <p class="left_side">
                                <span><img style="width:30px;height:30px;" src="./img/icons/wechat.png"></span>
                                <span>物流助手小程序</span>
                              </p>
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
          <div class="row">
            <div class="text-center BorderBlock wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">已投放主流安卓市场、苹果应用商店，通过认证，安全可靠、数据保障</div>
          </div>
        </div>
      </div>
    </section>
    <!-- aboutus -->
    <section id="aboutUs" style="background: rgba(242, 242, 242, 1);">
      <div id="event">
        <div class="container">
          <div id="blog" class="row" style="padding-top: 15px;padding-bottom: 40px;">
            <div class="col-md-12">
              <div class="latest_blog text-center">
                <div class="latest_blog text-center">
                  <h2><span class="ColumTit">关于中运卡行</span></h2>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="row">
              <div class="col-md-4 col-sm-12 zero_mp">
                <div class="event_item">
                  <div class="event_img">
                    <img src="./img/aboutYS.jpg" alt="">
                  </div>
                </div>
              </div>
              <div class="col-md-8 col-sm-12 zero_mp">
                <div class="event_item">
                  <div class="event_text text-center">
                    <p>“中运卡行”是上海鹰速物流有限公司运用雄厚的技术研发实力和对物流运作模式的深刻理解而研发的用于整合市场上车货资源的网络货运交易平台。平台主要为车主和货主之间搭建诚信便利的交易通道、促使货运交易达成、圆满完成运输任务。平台致力于为交易双方实现对订单、运输过程、结算等全程的可视化规范化管理，提升综合服务能力，推进物流供给侧结构性改革，相应国家绿色节能减排的号召，促进物流各方的降本增效。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- footer -->
    <section id="footer">
      <div class="container">
        <div class="row text-center footerWrap">
          <div class="copyright col-md-9 col-xs-9">
            <p>客服热线：400-888-8888</p>
            <p>营业时间：9:00-21:00</p>
            <p>沪ICP备19031716号-2</p>
            <p>Copyright © 2003-2019 上海鹰速物流有限公司</p>
          </div>
          <div class="col-md-3 col-xs-3">
            <img class="footerLogo" src="./img/footerLogo.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <div class="SideCodeBlcok">
      <img src="./img/qrcode1.png">
      <p>APP下载</p>
      <img src="./img/gray.png">
      <p>小程序</p>
    </div>
  </div>
</template>
<script src="js/jquery-1.12.3.min.js"></script>
<script>
export default {
  name: 'Website',
  data() {
    return {
      menuIdx: 0,
      dialogLoginVisible: false,
      dialogSignVisible: false,
      dialoglWidth: '320px',
      dialogSWidth: '340px',
      Wid: '',
      account: '',
      password: '',
      ifRemember: false,
      activeRole: '0',
      // carousel
      carouselArr: [
        {img: './img/banner1.jpg', news: '[2020-01-20]关于2020年春节假期平台放假通知'},
        {img: './img/banner2.jpg', news: '春节假期平台放假通知'},
        {img: './img/banner3.jpg', news: '放假通知'}
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        autoplay: false,
        // autoplay: {
        //   delay: 4000,
        //   disableOnInteraction: false
        // },
        loop: false
      }
    }
  },
  mounted() {
    window.onresize = this.changeBanner
    $(function(){
      $('.nav > li > a').click(function () {
        $('#collapse').addClass('collapsed')
        $('#collapse').attr('aria-expanded', false)
        $('#bs-example-navbar-collapse-1').removeClass('in')
        $('#bs-example-navbar-collapse-1').attr('aria-expanded', false)
      })
      $('#topLi').click(function () {
        $('#topLi').className = ''
        $('#topLi').className = 'active'
        $('html, body').animate({ scrollTop: '0px' }, 500)
      })
    })
    // const oScript = document.createElement('script');
    // oScript.type = 'text/javascript';
    // oScript.src = 'https://unpkg.com/element-ui@2.3.7/lib/index.js';
    // document.body.appendChild(oScript);
  },
  created () {
    this.changeBanner()
  },
  methods: {
    changeMenu(idx) {
      this.menuIdx = idx
    },
    showLoginBox() {
      this.dialogLoginVisible = true
    },
    showSignBox() {
      this.dialogSignVisible = true
      setTimeout(() => {
        var SlideVerifyPlug = window.slideVerifyPlug
        var slideVerify2 = new SlideVerifyPlug('#verify-wrap', {
          wrapWidth: this.dialogSWidth.slice(0, 3) - 60,
          initText: '请按住滑块，拖动到最右边',
          sucessText: '验证通过',
          getSucessState: (res) => {
            this.ifSlideChecked = res
          }
        })
        slideVerify2.resetVerify()
      }, 100)
    },
    closeLogin() {
      this.dialogLoginVisible = true
    },
    changeRole(role) {
      this.activeRole = role
    },
    showAgreement() {},
    // carousel
    changeBanner() {
      // let clientWidth = document.documentElement.clientWidth
      // this.screenWidth = clientWidth
      // if (clientWidth > 768) {
      //   this.carouselArr = [
      //     {img: './img/banner1.jpg', news: '[2020-01-20]关于2020年春节假期平台放假通知'},
      //     {img: './img/banner2.jpg', news: '春节假期平台放假通知'},
      //     {img: './img/banner3.jpg', news: '放假通知'}
      //   ]
      // } else {
      //   this.carouselArr = [
      //     {img: './img/partnerBg.jpg', news: '[2020-01-20]关于2020年春节假期平台放假通知'},
      //     {img: './img/partnerBg.jpg', news: '春节假期平台放假通知'},
      //     {img: './img/partnerBg.jpg', news: '春节假期平台放假通知'}
      //   ]
      // }
    }
  }
}
</script>

<style scoped>
@import 'css/font-awesome.min.css';
@import 'css/animate.min.css';
@import 'css/bootstrap.min.css';
@import 'css/carousel.css';
@import 'css/style.css';
@import 'css/responsive.css';
@import 'https://unpkg.com/swiper/css/swiper.min.css';
@import 'theme/index.css'
</style>
<style lang="scss" scoped>
#header{
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  background: #fff;
  .dropdown-menu i{
    margin-right: 5px;
  }
  .Tit{
    margin-bottom: 20px;
  }
  .LoginBox .InfoBlock{
    width: 100%;
    height: 100px;
  }
  .LoginBox, .SignBox{
    background: rgba(39, 39, 39, 0.5);
  }
  .LeftInfo{
    width: calc(100% - 80px);
    height: 100px;
    float: left;
  }
  .LeftInfo .el-input{
    margin-top: 10px;
  }
  .RightCode{
    width: 80px;
    height: 100px;
    float: right;
  }
  .RightCode img{
    width: 50px;
    height: 50px;
    margin: 10px 15px;
  }
  .RightCode p{
    height: 20px;
    line-height: 20px;
    font-size: 10px;
    text-align: center;
    color: #22AC38;
  }
  .OptionBlock{
    width: 100%;
    height: 30px;
    margin-top: 15px;
  }
  .OptionBlock span{
    width: 50%;
    float: left;
    display: inline-block;
    font-size: 12px;
    cursor: pointer;
  }
  .OptionBlock span:last-of-type{
    text-align: right;
    padding-right: 15px;
  }
  .ToSign{
    height: 30px;
    line-height: 30px;
    text-align: right;
    font-size: 12px;
  }
  /* sign */
  .TabBlock{
    width: 100%;
    height: 50px;
  }
  .TabBlock span{
    width: 50%;
    height: 40px;
    line-height: 40px;
    float: left;
    text-align: center;
    cursor: pointer;
  }
  .activeTab{
    color: #22AC38;
    font-weight: bold;
  }
  .activeTab:after{
    content: '';
    display: block;
    margin: auto;
    height: 2px;
    width: 50%;
    background: #22AC38;
    transition: width .5s ease, background-color .5s ease;
  }
  .SignBox .InfoBlock{
    width: 100%;
    height: 240px;
  }
  .SignBox .InfoBlock .el-input:not(:first-of-type){
    margin-top: 10px;
  }
  .CodeBlock {
    width:32%;
    border-radius:0;
    margin-left:-2px;
    position:relative;
    z-index:99;
    padding: 10px 0px;
    background: #22AC38;
  }
  .Agreement{
    font-size: 12px;
    margin-bottom:10px;
    color: #22AC38;
    font-weight: bold;
    cursor: pointer;
  }
  .verify-wrap .drag-btn{
    height: 35px;
  }
}
#Carousel{
  margin-top: 60px;
}
#welcome{
  .item_list{
    h4{
      text-align: left;
    }
    h5{
      font-weight: bold;
      text-align: left;
      margin-bottom: 5px;
    }
    p{
      text-align: left;
      font-size: 14px;
    }
  }
}
#production{
  .InnerWrap{
    overflow:hidden;
    padding: 0 !important;
  }
  .InnerWrap{
    position:relative;
    width: 95%;
    height: 100%;
    margin:0 auto 20px auto;
  }
  .InnerWrap img{
    width: 100%;
    position: relative;
  }
  .OverText{
    padding: 0 !important;
    position: absolute;
    top: 0;
    left: -100%;
    padding: 1.5em 2em 0;
    text-align: center;
    width:200%;
    height: 100%;
    -webkit-transition: .5s all;
    transition: .5s all;
    -moz-transition: .5s all;
  }
  .InnerWrap:hover div.OverText {
    left: 0px;
  }
  .LeftBlock{
    width:50%;
    height:100%;
    background:rgba(39, 39, 39, 0.5);
    float:left;
    color:#fff;
    padding:20px 40px;
  }
  .RightBlock{
    width:50%;
    height:100%;
    background:transparent;
    float:left;
    text-align:left;
    color:#fff;
    padding:20px;
  }
  .TitLine{
    width: 60px;
    height:3px;
    background: #22AC38;
    display: block;
    margin-top: 50%;
    margin-bottom: 4px;
  }
  .TopCont{
    width: 100%;
    height: 70%;
    display: block;
    text-align: left;
  }
  .SeeMore{
    width: 100px;
    height:30px;
    line-height: 30px;
    background: #22AC38;
    color: #fff;
    display: block;
  }
  @media (max-width: 640px){
    .OverText{
      left: 0;
    }
  }
}
#strength{
  .outWrap{
    margin-bottom: 40px;
  }
  .item{
    width:50px;
    height:150px;
  }
  .item-container {
    background: #22AC38;
  }
  .item-container img{
    width: 38px;
    height:38px !important;
    margin: 6px;
  }
  .item .item-container:before{
    width: 50px;
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 15px;
    right: 30px;
    bottom: 0;
    background: rgba(32, 152, 209, 1);
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .outWrap:hover .item-container:before {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  .outWrap:hover .item-container{
    background: rgba(32, 152, 209, 1);
  }
  .RightCont{
    height:150px;
    border-left: 1px solid #22AC38;
    background:#fff;
    position:absolute;
    z-index:99;
    float:right;
    left:65px;
    top:0;
  }
  .RightCont h4{
    padding: 10px 20px 0 20px;
  }
  .RightCont p{
    width: 80%;
    padding: 20px 20px 20px 20px;
    font-weight: normal !important;
  }
  @media (max-width: 1423px){
    .item{
      width:40px;
      height:200px;
    }
    .item-container img{
      width:30px;
      height:30px !important;
      margin: 5px;
    }
    .item .item-container:before{
      width: 40px;
      height:200px;
      left: 15px;
    }
    .RightCont{
      left: 55px;
      height:200px;
    }
  }
  @media (max-width: 768px){
    .RightCont p{
      width: 90%;
      padding: 20px;
    }
  }
}
#partner{
  .CompanyLogo{
    width: 60%;
    border-radius: 50%;
    margin:25px;
    position:relative;
    top: 10px;
    top:50%;
    left: 25px;
    display: inline-block;
    transform:translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
  }
  .market_logo{
    margin-top:10px;
  }
  .PadNo{
    padding: 0 !important;
  }
  .testimonial_content p:before{
    content: '"';
    font-size: 35px;
    height: 35px;
    color: #fff;
    font-weight: bold;
    display: block;
    font-style: italic;
  }
  .testimonial_content p{
    color: #fff;
  }
  .testimonial_content h5{
    float:right;
    margin-top:10px;
    color: #fff;
  }
  .testimonial_author img{
    width: 100%;
  }
}
#download{
  .blog_img img{
    width: 150px !important;
    height: auto !important;
  }
  .BorderBlock{
    width:45%;
    margin: 40px auto;
    padding: 20px;
    border: 1px solid rgba(245, 154, 35, 1);
    color:rgba(245, 154, 35, 1);
  }
  .left_side span:last-of-type {
    font-size: 12px;
  }
  @media (max-width: 640px){
    .BorderBlock{
      width: 60%;
    }
    .blog_img img{
      width: 120px !important;
      height: auto !important;
    }
  }
  @media (max-width: 480px){
    .BorderBlock{
      width: 70%;
    }
    .blog_img img{
      width: 110px !important;
      height: auto !important;
    }

  }
  @media (max-width: 320px){
    .BorderBlock{
      width: 80%;
    }
    .blog_img img{
      width: 100px !important;
      height: auto !important;
    }
  }
}
#aboutUs{
  #event .event_text{
    background-image: url('./img/aboutusBg.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .event_text p{
    position: absolute;
    top: 50%;
    left: 0;
    padding: 0 30px;
    transform: translateY(-50%);
  }
  @media (max-width: 768px){
    .event_img img{
      min-height: 160px;
    }
    #event .event_text{
      /* min-height: 160px; */
    }
  }
}
#footer{
  .footerWrap{
    padding: 20px 11px;
  }
  .footerLogo{
    width: 100px;
    float: right;
  }
  @media (max-width: 640px){
    .footerLogo{
      width: 100%;
    }
  }
}
.SideCodeBlcok{
  width: 80px;
  height: 220px;
  background:rgba(255, 255, 255, 0.7);
  position: fixed;
  top: 150px;
  right: 10px;
  z-index: 19;
  text-align: center;
  img{
    width:60px;
    height: 60px;
    display: block;
    margin:20px 10px 0 10px;
  }
  p{
    width: 100%;
    height:20px;
    line-height: 20px;
  }
}
@media (max-width: 640px){
.SideCodeBlcok{
    display: none;
  }
}
</style>
