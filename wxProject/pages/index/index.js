//index.js
//获取应用实例
const app = getApp()

Page({

  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      '../../image/gg_top.png',
      '../../image/gg_top.png',
      '../../image/gg_top.png'
    ], //顶部轮播图图片
    roomImgUrls: [
      '../../image/gg_f.png',
      '../../image/gg_f.png',
      '../../image/gg_f.png'
    ], //客房轮播图片
    indicatorDots: false, // 指示点
    autoplay: true, //自动播放
    circular: true, //衔接滑动
    vertical: false, //竖向
    interval: 3000, //自动播放间隔时长
    duration: 1000, //幻灯片切换时长
    previousMargin: 0,
    nextMargin: 0,
    imgheights: [], //所有图片的高度  
    current: 0,
    indexImgUrl: [{
        url: '../../image/icon_index1.png',
        name: '门店信息',
        nav: '/pages/shopMsg/shopMsg',
        opentype: 'navigate'
      },
      {
        url: '../../image/icon_index2.png',
        name: '团购中心',
        nav: '/pages/group/group',
        opentype: 'switchTab'
      },
      {
        url: '../../image/icon_index3.png',
        name: '客房预订',
        nav: '/pages/room/room',
        opentype: 'switchTab'
      },
      {
        url: '../../image/icon_index4.png',
        name: '活动中心',
        nav: '/pages/activity/activity',
        opentype: 'navigate'
      },
      {
        url: '../../image/icon_index5.png',
        name: '会员中心',
        nav: '/pages/memberCenter/memberCenter',
        opentype: 'navigate'
      },
      {
        url: '../../image/icon_index6.png',
        name: '订房热线',
        fn: 'call'
      },
      {
        url: '../../image/icon_index7.png',
        name: '在线导航'
      },
      {
        url: '../../image/icon_index8.png',
        name: '门店展示',
        nav: '/pages/shopShow/shopShow',
        opentype: 'navigate'
      },
      {
        url: '../../image/icon_index9.png',
        name: '积分商城',
        nav: '/pages/integralShop/integralShop',
        opentype: 'navigate'
      },
      {
        url: '../../image/icon_index10.png',
        name: '全城钜惠',
        nav: '/pages/getRebate/getRebate',
        opentype: 'navigate'
      }
    ], //图标导航图片
    indexAdsMidImgUrl: '../../image/gg_i.png', //中间广告
    indexGroupData: app.globalData.groupData, //团购数据
    indexRoomData: app.globalData.roomData //客房数据

  },
  // 打电话
  callPhone: function() {
    wx.makePhoneCall({
      phoneNumber: '84634518'
    })
  },
  // 地图导航
  map: function() {
    wx.openLocation({
      latitude: 45.7779000000,
      longitude: 126.6504300000,
      scale: 18
    })
  },
  //事件处理函数

  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 轮播图自适应
  imageLoad: function(e) { //获取图片真实宽度  
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比  
      ratio = imgwidth / imgheight;
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights;
    //把每一张图片的对应的高度记录到数组里  
    imgheights[e.target.dataset.id] = imgheight;

    this.setData({
      imgheights: imgheights
    })
  },
  bindchange: function(e) {
    this.setData({
      current: e.detail.current
    })
  },
})