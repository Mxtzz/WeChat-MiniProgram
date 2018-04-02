
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      '../img/scroll/scroll01.jpg',
      '../img/scroll/scroll02.jpg',
      '../img/scroll/scroll03.jpg',
      '../img/scroll/scroll04.jpg',
      '../img/scroll/scroll05.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    // indicator_dots:true,

    appUrls1:[
      { url: '../img/home-icon/xqgg.png', title: '小区公告' },
      { url: '../img/home-icon/shjf.png', title: '生活缴费' },
      { url: '../img/home-icon/bsbx.png', title: '报事报修' },
      { url: '../img/home-icon/jtbj.png', title: '家庭保洁' }
    ],
    appUrls2: [
      { url: '../img/home-icon/smxc.png', title: '上门洗车' },
      { url: '../img/home-icon/essc.png', title: '二手市场' },
      { url: '../img/home-icon/xqbk.png', title: '小区百科' },
      { url: '../img/home-icon/more.png', title: '更多' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})