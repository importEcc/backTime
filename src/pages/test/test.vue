<!--
 * @Author: 王精华
 * @Date: 2020-09-02 13:47:28
 * @LastEditTime: 2020-09-02 18:13:42
 * @LastEditors: 王精华
 * @Description: 
-->
<template>
  <div class="test">
    <div class="test-left"
         :style="{'height':MaxHeight-45+'px'}">
      <div class="test-left-list">
        <div class="list_item"
             v-for="(item, index) in list"
             :key="index">
          <div class="item_title">
            <a :href="'#'+item.id">{{item.title}}</a>
          </div>
          <div class="list-item-info"
               v-if="item.children">
            <div class="info_item"
                 v-for="(res, index) in item.children"
                 :key="index">
              <div class="info-item_title">
                <a :href="'#'+res.id">{{res.title}}</a>
              </div>
              <div v-if="res.children">
                <div v-for="(inst, index) in res.children"
                     :key="index">
                  <div class="inst-item">
                    {{inst.title}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="test-right"
         :style="{'height':MaxHeight-45+'px'}">
      <div class="test-work">
        <div id="1">
          <div class="titles">1、微信端</div>
          <pre></pre>
        </div>
        <div id="101">
          <div class="titles">1-1、微信登录</div>
          <p class="text">流程:</p>
          <p class="text">准备工作</p>
          <p class="text">1、规定好项目部署的域名，且让后台将该域名放进白名单中</p>
          <p class="text">2、在需要登录的地方调用---https://open.weixin.qq.com/connect/oauth2/authorize然后在这段url后边拼上微信服务端所需要的参数；
            <pre>
              “appid” --公众号的唯一标识
              “redirect_uri”--授权后重定向的回调链接地址， 请使用 urlEncode 对链接进行处理
              “response_type”--返回类型，请填写code
              “scope”--应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo（弹出授权页面，可通
                过openid拿到昵称、性别、所在地。并且， 即使在未关注的情况下，只要用户授权，也能获取其信息 ）
              ”state“--重定向后会带上state参数，开发者可以填写a-zA-Z0-9的参数值，最多128字节</pre>
          </p>
          <p class="text">
            4、通过this.$route.query 获取重定向来的code
            <pre>4-1、created判断是否存在code和userinfor
4-2、然后再去调用获取userinfo的接口 
4-3、还需要注意当url上边没有code的时候和有code但没获取userinfo的情况，酌情处理</pre>
          </p>
          <p class="text">
            5、拿到code后通过接口返回给后台换取userinfo
          </p>
          <p class="text">
            6、登录流程图

          </p>
          <img src="../../assets/640.png" />
        </div>
        <div id="102">
          <div class="titles">1-2、微信JS-SDK的调用</div>
          <p class="text">流程:</p>
          <p class="text">准备工作</p>
          <p class="text">1、规定好项目部署的域名，且让后台将该域名放进白名单中</p>
          <p class="text">2、</p>
        </div>
        <div id="2">
          <div class="titles">2、移动端</div>
        </div>
      </div>
    </div>
    <div class="test-center">
      <div class="route-title">各种服务</div>
      <div class="route-list">
        <div class="list-item">
          <div class="list-img">
            <div class="imged">
              <img src="" />
            </div>
            <div class="list_info"></div>
          </div>
          <div class="list-text">
            <div class="list-text-top list-text-info"></div>
            <div class="list-text-center list-text-info"></div>
            <div class="list-text-bot list-text-info"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="goBack"
         @click="$router.push({name:'index'})">
      <div class="goback_txt">Back</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      list: [
        {
          id: 1,
          title: '微信端',
          children: [
            {
              id: 101,
              title: '微信登录'
            },
            {
              id: 102,
              title: '微信js-SDK',
              children: [
                {
                  title: '微信分享'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          title: '移动端',
          children: [
            {
              id: 201,
              title: 'vant的使用'
            },
            {
              id: 202,
              title: "...."
            }
          ]
        },
        {
          id: 3,
          title: 'pc端',
          children: [
            {
              id: 301,
              title: 'element的使用'
            },

          ]
        }
      ],
      MaxHeight: ''
    }
  },
  created () {
    this.MaxHeight = localStorage.getItem('col')
  },
}
</script>
<style lang="scss" scoped>
@import './test.scss';
</style>
