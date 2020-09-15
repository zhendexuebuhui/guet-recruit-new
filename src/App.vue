<template>
  <div class="main-container">
    <el-backtop></el-backtop>
    <el-scrollbar class="page-component__scroll el-scrollbar">
      <!-- bar start -->
      <el-row class="head_title">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-col :span="1">
            <div>&nbsp;</div>
          </el-col>
          <el-col :span="11">
            <img
              :src="guet_logo"
              style="height:60px;"
            />
          </el-col>

          <el-menu-item>
            <el-input
              size="small"
              placeholder="搜索内容"
              suffix-icon="el-icon-search"
            ></el-input>
          </el-menu-item>
          <el-menu-item index="1">
            <a
              class="maodian"
              @click="jump('#home')"
            >主页</a>
          </el-menu-item>

          <el-submenu
            index="2"
            style="padding-right:0px"
          >
            <template slot="title">关于我们</template>
            <el-menu-item index="2-1">
              <a
                class="maodian"
                @click="jump('#major')"
              >
                <i class="el-icon-trophy"></i>王牌专业
              </a>
            </el-menu-item>
            <el-menu-item index="2-2">
              <a
                class="maodian"
                @click="jump('#faculty')"
              >
                <i class="el-icon-s-custom"></i>师资力量
              </a>
            </el-menu-item>
            <el-menu-item index="2-3">
              <a
                class="maodian"
                @click="jump('#history')"
              >
                <i class="el-icon-time"></i>历史沿革
              </a>
            </el-menu-item>
          </el-submenu>

          <el-menu-item
            index="3"
            style="padding-left:10px"
          >
            <a
              class="maodian"
              @click="jump('#gallery')"
            >
              <i class="el-icon-picture-outline-round"></i>画廊
            </a>
          </el-menu-item>
          <el-menu-item index="4">
            <a
              class="maodian"
              @click="jump('#contact')"
            >联系我们</a>
          </el-menu-item>
        </el-menu>
      </el-row>
      <!-- bar end -->
      <div style="height:60px"></div>
      <!-- carousel start -->
      <el-row>
        <el-col>
          <div
            class="block"
            style="margin:8px"
            id="home"
          >
            <el-carousel
              trigger="click"
              height="450px"
            >
              <el-carousel-item
                v-for="item in imgList"
                :key="item.id"
              >
                <el-col :span="24">
                  <el-image
                    :src="item.idView"
                    class="banner_img"
                  ></el-image>
                </el-col>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
      </el-row>
      <!-- carousel end -->
      <!-- about start -->
      <el-row
        :gutter="100"
        class="content-container"
        style="margin:auto"
      >
        <el-col :span="14">
          <br />
          <h2 id="about">学校简介</h2>
          <el-divider></el-divider>
          <p>桂林电子科技大学（Guilin University Of Electronic Technology），学校始建于1960年，1980年经国务院批准成立桂林电子工业学院，2006年更名为桂林电子科技大学。</p>
          <p>坐落在世界著名风景游览城市——桂林市，由工业和信息化部、国家国防科技工业局与广西壮族自治区人民政府共建，入选国家“2011计划”、“卓越工程师教育培养计划”、新工科研究与实践项目、中西部高校基础能力建设工程重点建设高校、首批高等学校科技成果转化和技术转移基地、国家大学生创新性实验计划、全国深化创新创业教育改革示范高校、国家大学生文化素质教育基地、国家级特色专业建设点、国家地方联合工程研究中心、广西一流学科建设高校，有国家大学科技园，具有自主招生资格，是总装备部通信装备预研项目定向发布高校之一和北斗ICD授权的高校之一。</p>
        </el-col>
        <el-col :span="10">
          <br />
          <br />
          <br />
          <el-card class="box-card my-card">
            <div class="text item">
              <el-button
                size="medium"
                icon="el-icon-school"
                circle
                type="primary"
                class="button-right"
              ></el-button>
              {{'一级学科硕士点18个，博士点4个'}}
            </div>
          </el-card>
          <el-card class="box-card my-card">
            <div class="text item">
              <el-button
                size="medium"
                icon="el-icon-s-promotion"
                circle
                type="success"
                class="button-right"
              ></el-button>
              {{'卓越工程师教育培养计划' }}
            </div>
          </el-card>
          <el-card class="box-card my-card">
            <div class="text item">
              <el-button
                size="medium"
                icon="el-icon-box"
                circle
                type="warning"
                class="button-right"
              ></el-button>
              {{'中西部高校基础能力建设工程' }}
            </div>
          </el-card>
          <el-card class="box-card my-card">
            <div class="text item">
              <el-button
                size="medium"
                icon="el-icon-location"
                circle
                type="danger"
                class="button-right"
              ></el-button>
              {{'省部共建高校' }}
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!-- about end   -->
      <!-- major start -->
      <el-row
        class="content-container"
        :gutter="80"
        style="margin:auto"
      >
        <h1
          class="part_title"
          id="major"
        >王牌专业</h1>
        <br />
        <el-col
          :span="20"
          :offset="2"
        >
          <el-collapse
            v-model="activeNames"
            @change="handleChange"
            v-for="major in majorList"
            :key="major.name"
            style="font-size:25px"
          >
            <el-collapse-item :name="major.id">
              <template slot="title">
                <div>{{major.name}}</div>
                <div style=" margin-left: auto">
                  <el-rate
                    v-model="major.grade"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                  ></el-rate>
                </div>
              </template>
              <p>{{major.description}}</p>
            </el-collapse-item>
          </el-collapse>
        </el-col>
      </el-row>
      <!-- major end -->

      <!-- faculty start -->
      <el-row
        class="content-container"
        :gutter="100"
        style="margin:auto"
      >
        <h1
          class="part_title"
          id="faculty"
        >师资力量</h1>
        <br />
        <el-col :span="4">
          <el-badge
            :value="300"
            :max="280"
            class="item"
            type="primary"
          >
            <el-button size="medium">正高级职称教师</el-button>
          </el-badge>
        </el-col>
        <el-col :span="4">
          <el-badge
            :value="500"
            :max="400"
            class="item"
            type="success"
          >
            <el-button size="medium">博士学位教师</el-button>
          </el-badge>
        </el-col>
        <el-col :span="4">
          <el-badge
            value="82.7%"
            class="item"
            type="danger"
          >
            <el-button size="medium">博硕学位教师</el-button>
          </el-badge>
        </el-col>
        <el-col :span="4">
          <el-badge
            value="76.5%"
            class="item"
            type="warning"
          >
            <el-button size="medium">中青年教师</el-button>
          </el-badge>
        </el-col>
        <el-col :span="4">
          <el-badge
            :value="40"
            :max="30"
            class="item"
            type="primary"
          >
            <el-button size="medium">特聘教授、专家</el-button>
          </el-badge>
        </el-col>
        <el-col :span="3">
          <el-badge
            :value="40"
            :max="25"
            class="item"
            type="primary"
          >
            <el-button size="medium">优秀团队</el-button>
          </el-badge>
        </el-col>
        <br />
        <br />
        <el-col>
          <p>学校现有教师1600余人（专任教师、外聘教师、其他师资），其中正高级职称教师280多人，博士学位教师400余人。专任教师中45岁以下教师占教师总数的76.5%，中青年教师成为教师中的主体；教师中具有博士、硕士学位的教师占专任教师总数的82.7%；高级职称教师占专任教师总数的比例为55%；教师中具有半年及以上出国访学、合作研究经历的教师占专任教师总数的19.4%，具有外校学缘的教师占专任教师总数的比例为72.9%。</p>

          <p>教师队伍中有“长江学者”特聘教授1人、国家杰出青年基金获得者5人、中组部“千人计划”人选1人、国家百千万人才工程人选4人、全国杰出专业技术人才1人、全国优秀科技工作者2人、国务院特殊津贴专家31人、中科院“百人计划”人选4人、教育部“新世纪优秀人才支持计划”人选3人、广西“八桂学者”8人、广西优秀专家7人、广西特聘专家4人、广西教学名师9人等。有国家级教学团队2个、自治区级教学团队10个；广西人才小高地4个、广西高校人才小高地6个。教师中有教育部高等学校本科教学指导委员会副主任委员1人、委员6人。中国绕月探测工程总设计师、国家最高科学技术奖获得者、中国科学院孙家栋院士为学校名誉校长。</p>
        </el-col>
      </el-row>
      <!-- teacher img start -->
      <br />
      <el-row
        class="content-container"
        :gutter="100"
        style="margin:auto"
      >
        <h3>口碑教师</h3>
        <el-col
          :span="6"
          v-for="teacher in teacherList"
          :key="teacher.name"
          style
        >
          <div>
            <el-image
              :src="teacher.src"
              :preview-src-list="[teacher.src]"
              class="teacher_img"
              fit="cover"
            ></el-image>
            <span class="imgDescription">{{teacher.name}}</span>
          </div>
        </el-col>
      </el-row>
      <!-- teacher img end -->

      <!-- faculty end -->

      <!-- history start -->
      <el-row
        class="content-container"
        :gutter="80"
        style="margin:auto"
      >
        <h1
          class="part_title"
          id="history"
        >历史沿革</h1>
        <br />
        <el-col
          :span="11"
          style="height:900px;display: flex;
            align-items: center; /*定义body的元素垂直居中*/"
        >
          <el-image
            :src="historyImg"
            :preview-src-list="[historyImg]"
          ></el-image>
        </el-col>
        <el-col :span="13">
          <div style="height:900px;">
            <el-steps
              direction="vertical"
              :active="0"
            >
              <el-step
                title="我们成立了"
                status=" process"
                icon="el-icon-help"
                description="1960年2月第一机械工业部在桂林建立桂林机械专科学校，培养国民经济急需的机械和电子专业专科人才。4月，桂林机械专科学校和桂林技工学校合并，成立桂林机械专科学校，学校附设中专部和技工部。11月，桂林机械专科学校划归第三机械工业部领导。"
              ></el-step>
              <el-step
                title="进一步发展"
                status=" process"
                icon="el-icon-s-flag"
                description="1961年6月，根据第三机械工业部教育局下达的精简下放指示，学校撤销技工部。1962年4月，第三机械工业部决定将桂林机械专科学校更名为桂林机械工业学校，学校由专科改为中专。1964年，学校划归第四机械工业部管理。"
              ></el-step>
              <el-step
                title="磨砺中前行"
                status=" process"
                icon="el-icon-finished"
                description="1966年初，“文化大革命”的风暴袭击了全国电子工业中等专业学校。从1966年至1971年期间学校被迫暂停招生。1972年春，学校恢复办学并更名为桂林无线电学校。1977年，学校参加全国高校、中专校统一招生录取工作。"
              ></el-step>
              <el-step
                title="越来越好"
                status=" process"
                icon="el-icon-s-promotion"
                description="2006年，更名为桂林电子科技大学。同年，在桂林市灵川县灵田乡建设尧山校区（现花江校区）；入选国家大学生文化素质教育基地。2008年，工业和信息化部与广西壮族自治区人民政府就共建桂林电子科技大学签订协议，桂林电子科技大学正式成为省部共建高校，列入广西重点建设高校。2012年9月，学校成为教育部卓越工程师教育培养计划高校。2013年，1月学校通过新增博士学位授予单位立项建设验收。2014年，11月国家级国家大学科技园落户桂电。2016年，学校入选中西部高校基础能力建设工程。2017年1月，学校入选全国第一批深化创新创业教育改革示范高校。2018年5月，入选广西一流学科建设高校。2019年2月，被教育部认定为首批高等学校科技成果转化和技术转移基地。 7月，学校与华为技术有限公司签署深化战略合作协议。10月，入选教育部工程研究中心。"
              ></el-step>
              <el-step
                status=" process"
                icon="el-icon-more"
              ></el-step>
            </el-steps>
          </div>
        </el-col>
      </el-row>
      <!-- history end -->
      <!-- gallery start -->
      <el-row
        class="content-container"
        :gutter="100"
        style="margin:0 auto"
      >
        <h1 id="gallery">
          <i
            class="el-icon-picture-outline-round"
            style="padding-right:10px"
          ></i>画廊
        </h1>
        <el-col
          :span="8"
          v-for="gallery in galleryList"
          :key="gallery.src"
        >
          <div>
            <el-image
              :src="gallery.src"
              :preview-src-list="[gallery.src]"
              class="gallery_img"
            ></el-image>
            <span class="imgDescription">{{gallery.name}}</span>
          </div>
        </el-col>
      </el-row>
      <!-- gallery end -->
      <!-- contact start -->
      <el-row
        class="main-container blue-part"
        :gutter="50"
        style="margin:auto"
        id="contact"
      >
        <!-- <h1 style="text-align:center">联系我们</h1> -->
        <el-col
          :span="10"
          :offset="2"
        >
          <div
            class="num-title"
            style="padding-left:0"
          >01 / 联系我们</div>
          <p class="contact-font">我们需要您的建议，拨打电话或发送邮件，或简单的填写右方的表单，留下您想对我们说的话，我们将很快回复您。</p>
          <div class="contact-icon-list">
            <div>
              <el-button
                icon="el-icon-phone"
                circle
                style="font-size:21px"
              ></el-button>
              <span>0773-2290083</span>
            </div>
            <div>
              <el-button
                icon="el-icon-message"
                circle
                style="font-size:21px"
              ></el-button>
              <span>xiongtianmin@163.com</span>
            </div>
            <div>
              <el-button
                icon="el-icon-map-location"
                circle
                style="font-size:21px"
              ></el-button>
              <span>中国桂林</span>
            </div>
            <div>
              <a
                href="http://www.gliet.edu.cn/"
                target="_blank"
                style="text-decoration: none;
  color: white;"
              >
                <el-button
                  icon="el-icon-s-home"
                  circle
                  style="font-size:21px"
                ></el-button>
                <span>官方网站 www.gliet.edu.cn/</span>
              </a>
            </div>
          </div>
        </el-col>
        <el-col :span="9">
          <div class="num-title">02 / 填写表单</div>

          <el-form
            :model="ruleForm"
            label-width="80px"
            :rules="rules"
            ref="ruleForm"
          >
            <el-form-item prop="name">
              <el-input
                v-model="ruleForm.name"
                placeholder="昵称"
              ></el-input>
            </el-form-item>
            <el-form-item prop="mail">
              <el-input
                v-model="ruleForm.mail"
                placeholder="邮箱"
              ></el-input>
            </el-form-item>
            <el-form-item prop="phone">
              <el-input
                v-model="ruleForm.phone"
                placeholder="手机号"
              ></el-input>
            </el-form-item>
            <el-form-item prop="message">
              <el-input
                type="textarea"
                v-model="ruleForm.message"
                placeholder="留言"
                :autosize="{ minRows: 8, maxRows: 15}"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                @click="onSubmit"
                style="border-radius:0px;width:50%;font-size:16px;height:50px"
              >立 即 提 交</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <!-- contact end -->
      <!-- footer start -->
      <el-row class="footer">
        <el-col
          :span="8"
          class="footer_content"
        >
          <div>地址</div>
          <div>中国广西桂林金鸡路1号</div>
        </el-col>
        <el-col
          :span="8"
          class="footer_content"
        >
          <div>联系我们</div>
          <div>邮编：541004 传真：0773-2290083</div>
        </el-col>
        <el-col
          :span="8"
          class="footer_content"
        >
          <div>开放时间</div>
          <div>疫情期间不对外开放</div>
        </el-col>
        <el-col class="footer_content">
          <a
            href="http://www.gliet.edu.cn/"
            target="_blank"
          >©版权所有：桂林电子科技大学</a>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <a
            href="http://beian.miit.gov.cn/"
            target="_blank"
          >桂ICP备05000961号</a>
          <div style="height:40px"></div>
        </el-col>
      </el-row>
      <!-- footer end -->
    </el-scrollbar>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import querystring from 'querystring'
export default {
  data() {
    return {
      cs_value: 3.6,
      info: "abcd",
      activeIndex: "1",
      activeIndex2: "1",
      guet_logo: require("../src/assets/guet_logo_blue.png"),
      historyImg: require("../src/assets/images/door.jpg"),
      activeNames: ["1", "2"],
      majorList: [
        {
          id: "1",
          name: "软件工程 Software Engineering",
          description:
            "软件工程专业于2006年开始招收本科学生，是广西区紧缺人才专业，现有软件工程一级学科硕士点以及软件工程领域工程硕士点。本专业现有专职教师30人，专职教师队伍中正高职称8人，占比26.7%；副高职称15人，占比50%；具有博士学位的教师15人，占比50%；45岁及以下教师20人，占比66.7%；23名教师毕业于本类专业，占比76.7%；11名教师具有半年以上国外（境外）学习或访学经历，占比36.7%；25名教师具有工程实践经历，占比83.3%。既有广西区教学名师和学校教学优秀青年奖获奖者，又有学术骨干和科研能手，形成了一支以教授、博士为主体的中青年教师队伍。旨在培养具有扎实的计算机基础理论、软件工程理论及应用知识，良好的软件开发能力，初步的软件工程实践经验和基本的项目组织能力，创新、创业意识，竞争和团队精神，良好的外语运用能力，能适应社会需求的工程应用型人才。",
          grade: 4.1
        },
        {
          id: "2",
          name: "计算机科学与技术 Computer science and technology",
          description:
            "计算机科学与技术专业自1981年开始招收本科生，是信息产业部重点学科，广西“十五”重点建设的学科，国家级特色专业，入选国家级地方高校本科专业综合改革试点，拥有国家级教学团队1个，省级教学名师3人，教育部教学指导委员会副主任委员1名、委员2名，国家精品课程2门，国家精品资源共享课1门，国家精品双语教学课程1门。旨在培养具有“计算思维、系统设计、工程应用、创新实践”综合能力的高素质工程应用型人才。计算机科学与技术专业是博士点建设专业，目前拥有首批“新世纪国家百千万人才工程”人才，国家级模范教师，国务院政府特殊津贴专家，广西区优秀专家，广西区教学名师，广西卓越学者等为主的优秀教师队伍，在计算机领域顶级期刊IEEE Transactions on Computers，IEEE Transactions on Evolutionary  Computation等发表了一系列研究成果。学生在承担国家级、区级、校级创新创业训练计划项目，发表论文，获得发明专利、实用新型专利等方面成绩显著，各类重要科技竞赛参与率、获奖率和获奖质量逐年提高，学生的创新实践能力和工程应用能力得到明显提升。本专业毕业生就业率一直保持在92%以上，以“专业基础扎实、实践动手能力较强”赢得了社会各界的广泛赞誉。",
          grade: 4.1
        },
        {
          id: "3",
          name: "机械电子工程 Mechanical and Electronic Engineering",
          description:
            "机械电子工程专业始建于2006年。经过多年建设，机械电子工程专业已经成为教学质量优秀、区内一流的机械类工科专业，2014年入选广西区优势特色专业。专职教师中有教授5名，副教授5名，高级工程师1名，具有博士学位教师8名,博士研究生导师2人，硕士研究生导师8人。本专业拥有自法区级重点实验室—广西制造系统与先进制造技术实验室，自治区级虚拟仪器设备实验中心，区内外知名企业建立了大学生校外实践基地26个，以及精密机械及控制实验室、光机电一体化实验室、机器人中心等本科教学专用实验室，为学生创新与实践能力的培养提供了充分保障。本专业具有鲜明的光机电技术融合专业特色，着重培养学生光、机、电、算、热各方面技术综合运用的实际工程应用能力，使学生更适应现代社会对工程应用型人才的需求。连续多年毕业生就业率超过95%，就业区域主要分布珠三角地区和广西区内，就业行业分布于机械、汽车、电子、光电等企业和科研院所，毕业生在沿海经济发达地区的机电行业具有良好声誉。",
          grade: 3.9
        },
        {
          id: "4",
          name: "通信工程 Communication Engineering",
          description:
            "通信工程专业是学校最早设立的专业之一，1980年开始招收本科生。该专业是国家级高等学校特色专业、国家第二批“卓越工程师教育培养计划”实施专业、广西首批精品专业、优质专业，广西创新创业教育改革示范专业。该专业拥有一支结构合理、学术精湛的专业师资队伍，现有专任教师27人，其中有博士生导师3人、教授11人、副高10人，拥有博士学位的教师达40%以上，拥有硕士学位的达90%以上。拥有国家级通信示范中心、无线宽带通信与信号处理广西区重点实验室和近代通信网络与技术广西高校重点实验室；本专业具有良好的研究基地，与美国德州仪器、安捷伦、华为等国内外著名企业合作建有一批校企合作实验室，形成了较为完善的科学研究基础平台和教学实验室体系。该专业含通信网络方向和信息传输方向，学科特色突出。社会需求大，就业环境好，已形成遍布全国的毕业生就业网络，毕业生受到社会的普遍欢迎。毕业生集中分布于珠江三角洲和长江三角洲地区，主在电子信息行业内有较强的影响力，深受社会广泛好评。",
          grade: 3.7
        },
        {
          id: "5",
          name: "测控技术与仪器专业 Control& Instrument Specialty",
          description:
            "本专业建于1980年，1998年由“电子仪器及测量技术”更名为“测控技术与仪器”，至今已招收本科生39届，累计培养毕业生3092人。本专业是国家级特色专业、教育部“卓越工程师教育培养计划”实施专业、广西优质专业。本专业已经发展成为区内一流、国内具有一定影响力的专业。所属一级学科“仪器科学与技术”是原信息产业部重点学科、广西高校优势特色重点学科，拥有“仪器科学与技术”一级学科博士点、硕士点，“测试计量技术及仪器”、“精密仪器及机械”及“仪器仪表工程”二级学科硕士点，拥有“测控技术与仪器” 国家级实验教学示范中心、广西重点实验室­——自动检测技术与仪器，在第四轮学科评估中全国排名B-。现有专业教师30人，其中博导4人、教授8人、副教授11人。拥有全国优秀教师2人，全国师德先进个人1人，国务院政府特殊津贴专家3人，中国电子学会学术委员会、国防科工委绕月探测工程科学应用专家委员会、全国电子测量仪器标准化技术委员会、总装备部军用测试仪器标准化技术委员会等委员各1人，广西特聘专家、广西优秀专家、八桂名师各1人。80%以上的教师具有企业工程实践经历。主要开展自动测试系统、智能仪器、可测性设计与故障诊断等领域的科学研究，近年获得省部级及以上科技进步奖7项，多项科研成果处于国内先进水平。2013年，本专业通过了中国工程教育认证，是广西第一个通过认证的专业，并于2017年通过国际工程专业认证复审，为实现本科学位和工程师资格的国际互认打下了坚实的基础。",
          grade: 4.3
        },
        {
          id: "6",
          name: "信息与计算科学 Information and Computing Science",
          description:
            "信息与计算科学专业始建于1999年，是国家级特色专业、广西首批优质专业、广西高校优势特色专业和课程一体化建设专业。本专业将融合科学计算基础知识与软件开发实用技能，形成具有鲜明特色的信息处理方向和算法设计与软件开发方向，使学生更能适应现代社会对复合型、应用型人才的需求。本专业现有教师25人，其中教授8人，副教授11人，博士生导师2人，广西教学名师1人，广西杰青2人。获得广西自然科学奖二等奖2项，三等奖2项，广西教育成果奖二等奖1项，经过多年建设，信息与计算科学专业已经成为教学质量优秀、区内一流的信息计算科学专业教学团队。本专业具有水平先进的，适应培养优秀人才需要的实验室、实习基地和其它办学条件，拥有信息计算科学实验室、信息安全实验室等本科教学专用实验室，设备总值300余万元，并且在广州、深圳、珠海、北京、上海、南宁等地与业内知名公司建设有实践教学基地，学生具有信息处理和算法设计与软件开发等方面的工作能力。连续多年毕业生就业率达95%以上，就业区域主要分布珠三角地区和广西区内，就业行业分布于政府机关、计算机软件开发公司、信息产业部门、学校等机构，每年有约10% 左右的学生考取硕士研究生继续深造。",
          grade: 3.6
        }
      ],
      teacherList: [
        {
          id: 1,
          name: "徐华蕊",
          src: require("../src/assets/images/teacher/t1.png")
        },
        {
          id: 2,
          name: "常亮",
          src: require("../src/assets/images/teacher/t2.png")
        },
        {
          id: 3,
          name: "梁海",
          src: require("../src/assets/images/teacher/t3.png")
        },
        {
          id: 4,
          name: "陈俊彦",
          src: require("../src/assets/images/teacher/t4.png")
        }
      ],
      galleryList: [
        {
          id: 1,
          name: "图书馆",
          src: require("../src/assets/images/g10.webp")
        },
        {
          id: 2,
          name: "研讨会",
          src: require("../src/assets/images/g1.jpg")
        },
        {
          id: 3,
          name: "化学实验室",
          src: require("../src/assets/images/g2.jpg")
        },
        {
          name: "计算机实验室",
          src: require("../src/assets/images/g3.jpg")
        },
        {
          name: "相思湖",
          src: require("../src/assets/images/g4.jpg")
        },
        {
          name: "竞赛",
          src: require("../src/assets/images/g5.jpg")
        },
        {
          name: "迎宾湖",
          src: require("../src/assets/images/g8.webp")
        },
        {
          name: "科技楼广场",
          src: require("../src/assets/images/g11.webp")
        },
        {
          name: "运动",
          src: require("../src/assets/images/g9.jpg")
        }
      ],
      ruleForm: {
        name: "",
        mail: "",
        phone: "",
        message: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
        ],
        mail: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { type: "email", message: "请输入正确的邮箱地址", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入手机或电话号码", trigger: "blur" },
          {
            pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
            message: "请输入正确的联系方式",
            trigger: "blur"
          }
        ],
        message: [{ required: true, message: "请留言", trigger: "blur" }]
      },
      imgList: [
        { id: 0, idView: require("../src/assets/images/banner0.jpg") },
        { id: 1, idView: require("../src/assets/images/banner1.jpg") },
        { id: 2, idView: require("../src/assets/images/banner2.jpg") },
        { id: 3, idView: require("../src/assets/images/banner3.jpg") }
      ]
    };
  },
  methods: {
    messageFault: function () {
      this.$notify({
        title: "失败",
        duration: 6000,
        dangerouslyUseHTMLString: true,
        message: "提交失败，请通过电话或电子邮箱联系我们",
        type: "error",
        showClose: true
      });
    },
    messageSuccess: function () {
      this.$notify({
        title: "成功",
        duration: 6000,
        dangerouslyUseHTMLString: true,
        message: "您的留言已经提交成功，请耐心等待我们的回复(一般不会超过三个工作日)",
        type: "success",
        showClose: true
      });
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    observeBigImg() {
      $("#bannerBig").click();
    },
    handleChange(val) {
      console.log(val);
    },
    onSubmit() {
      console.log("submit!");
      axios
        .post("/api/stt/message", querystring.stringify(this.ruleForm))
        .then(response => this.messageSuccess())
        .catch(error => {
          // 请求失败处理
          this.messageFault();
        });
    },
    jump(id) {
      $("html, body").animate(
        {
          scrollTop: $(id).offset().top
        },
        800
      );
    }
  }
};
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
