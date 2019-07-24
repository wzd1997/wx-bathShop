//app.js
const utils = require('utils/util.js') 
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res.code)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    //底部导航数据
    footerNavigatorData: [{
        imgUrl: '../../image/have_icon1.png',
        name: '首页',
        url: 'index'
      },
      {
        imgUrl: '../../image/have_icon2.png',
        name: '团购',
        url: 'group'
      },
      {
        imgUrl: '../../image/have_icon3.png',
        name: '订房',
        url: 'room'
      },
      {
        imgUrl: '../../image/have_icon4.png',
        name: '订单',
        url: 'order'
      },
      {
        imgUrl: '../../image/have_icon5.png',
        name: '我的',
        url: 'my'
      },
    ],
    //团购订房头部数据
    headerHotelData: {
      "headerImg": ["../../image/gg_h.png", "../../image/gg_g.png", "../../image/gg_h.png"], //头部图片
      "addressImg": "../../image/navigation.png", //地址图案
      "address": "哈尔滨市道外区阳光路2号",
      "addressMore": "大全烧烤往里150米",
      "fitTime": "2019-05-30", //装修时间
      "startTime": "2020-10-01", //开业时间
      "navigateToUrl": "/pages/shopMsg/shopMsg", //跳转地址
      "navigateToName": "门店详情",
      "functionIcon": [{
          "iconUrl": "../../image/e_1.png",
          "iconName": "WiFi"
        },
        {
          "iconUrl": "../../image/e_2.png",
          "iconName": "停车位"
        },
        {
          "iconUrl": "../../image/e_3.png",
          "iconName": "洗浴"
        },
        {
          "iconUrl": "../../image/e_4.png",
          "iconName": "叫醒"
        },
        {
          "iconUrl": "../../image/e_5.png",
          "iconName": "24小时"
        },
        {
          "iconUrl": "../../image/e_6.png",
          "iconName": "餐厅"
        },
        {
          "iconUrl": "../../image/e_7.png",
          "iconName": "电视"
        },
        {
          "iconUrl": "../../image/e_8.png",
          "iconName": "电脑"
        },
      ] //功能图标
    }, 
    //团购数据
    groupData: [{
        url: '../../image/gg_g.png',
        title: '休闲足疗49元套票',
        content: '门票+毛巾+浴品+汗蒸+足底按摩30分钟+大厅休息+过夜费仅需49元',
        price: 49.00,
        oriPrice: 88.00,
        sold: 83,
        tag: '套'
      },
      {
        url: '../../image/gg_g.png',
        title: '超值足疗19元门票',
        content: '门票+毛巾+浴品+汗蒸+足底按摩30分钟+大厅休息+过夜费仅需49元',
        price: 19.00,
        oriPrice: 22.00,
        sold: 103,
        tag: '门'
      }
    ], 
    //客房数据
    roomData: [{
        url: '../../image/gg_h.png',
        title: '超值商旅标准套房',
        roomType: '标准房',
        type: '全日房',
        bedType: '2.0m×2.0m 1张床',
        price: 199.00,
        oriPrice: 2222.00,
        sold: 103,
        tag: '满'
      },
      {
        url: '../../image/gg_h.png',
        title: '超值商旅标准套房',
        roomType: '标准房',
        type: '钟点房',
        bedType: '1.5m×2.0m 2张床',
        price: 999.00,
        oriPrice: 22000.00,
        sold: 103,
        tag: '首'
      }
    ], 
    //评论数据
    commentData: [{
        headImgUrl: '../../image/portrait.jpg',
        name: '周杰伦',
        time: '2019-05-30',
        star: '5',
        content: '很好',
        reply: '嗯嗯倒计时卡了的九三案例库假的加上萨迪克的立刻就散大可乐的就是快乐打卡时间登录可见',
        type: '超赞'
      },
      {
        headImgUrl: '../../image/portrait.jpg',
        name: '周杰伦',
        time: '2019-12-30',
        star: '3',
        content: '好',
        reply: '嗯嗯',
        type: '中评'
      }
    ], 
    commentType: [{
        name: '全部评论',
        typeId: '0'
      },
      {
        name: '超赞',
        typeId: '1'
      },
      {
        name: '好评',
        typeId: '2'
      },
      {
        name: '中评',
        typeId: '3'
      },
      {
        name: '差评',
        typeId: '4'
      }
    ], //评论类型
  },
   map: function () {

    wx.getLocation({//获取当前经纬度
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
      success: function (res) {
        wx.openLocation({//​使用微信内置地图查看位置。
          latitude: 45.77797,//要去的纬度-地址
          longitude: 126.6504800000,//要去的经度-地址
          name: "水丽汇休闲浴馆",
          address: '哈尔滨市道外区阳光路2号'
        })
      }
    })
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '84634518' //仅为示例，并非真实的电话号码
    })
  }
})