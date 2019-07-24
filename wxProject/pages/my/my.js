// pages/my/my.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footerNavigator: app.globalData.footerNavigatorData, //底部导航数据
    openIf: false,
    privilegeName: '',
    privilegeContent: '',
    privilegeEnergy: '',
    privilegeUseDays: '',
    userData: {
      canUseFun: [{
          imgUrl: '../../image/icon_my_1.png',
          name: '付款',
          navUrl: '/pages/memberPayCode/memberPayCode'
        },
        {
          imgUrl: '../../image/icon_my_3.png',
          name: '红包/卡卷',
          navUrl: '/pages/redEnvelopes/redEnvelopes'
        },
        {
          imgUrl: '../../image/icon_my_2.png',
          name: '会员卡',
          navUrl: '/pages/memberCenter/memberCenter'
        },
        {
          imgUrl: '../../image/icon_my_4.png',
          name: '账单',
          navUrl: '/pages/bill/bill'
        },
        {
          imgUrl: '../../image/icon_my_5.png',
          name: '特权',
          navUrl: '/pages/energy/energy'
        },
      ]
    },
    memberPrivilege: [{
        imgURL: '../../image/shop_2.png',
        name: 'VIP更衣柜',
        typeId: '1',
        content: 'VIP更衣柜VIP更衣柜VIP更衣柜VIP更衣柜',
        energy: 100,
        usedays: 10

      },
      {
        imgURL: '../../image/shop_1.png',
        name: 'VIP靓号手牌',
        typeId: '2',
        content: 'VIP靓号手牌VIP靓号手牌VIP靓号手牌',
        energy: 200,
        usedays: 20

      },
      {
        imgURL: '../../image/shop_2.png',
        name: 'VIP贵宾浴服',
        typeId: '3',
        content: 'VIP贵宾浴服VIP贵宾浴服VIP贵宾浴服',
        energy: 300,
        usedays: 30
      },
      {
        imgURL: '../../image/shop_1.png',
        name: 'VIP专用茶具',
        typeId: '4',
        content: 'VIP专用茶具VIP专用茶具VIP专用茶具',
        energy: 400,
        usedays: 40
      },
      {
        imgURL: '../../image/shop_2.png',
        name: 'VIP专属拖鞋',
        typeId: '5',
        content: 'VIP专属拖鞋VIP专属拖鞋VIP专属拖鞋VIP专属拖鞋',
        energy: 500,
        usedays: 50
      },
      {
        imgURL: '../../image/shop_1.png',
        name: 'VIP专属浴巾',
        typeId: '6',
        content: 'VIP专属浴巾VIP专属浴巾VIP专属浴巾',
        energy: 600,
        usedays: 60
      },
    ],

  },
  openPrivilege: function(e) {
    var msg = e.currentTarget.dataset.message
    this.setData({
      openIf: true,
      privilegeName: msg.name,
      privilegeContent: msg.content,
      privilegeEnergy: msg.energy,
      privilegeUseDays: msg.usedays
    })
  },
  thinking: function() {
    this.setData({
      openIf: false,
    })
  },
  openNow: function() {
    this.setData({
      openIf: false,
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})