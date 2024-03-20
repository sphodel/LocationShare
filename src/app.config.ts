export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/functions/index',
    'pages/my/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    selectedColor: '#3BA8E2',
    list:[{pagePath:'pages/index/index',iconPath:'images/Location.png',selectedIconPath:'images/clickedLocation.png',text:'首页'},
      {pagePath:'pages/functions/index',iconPath:'images/Function.png',selectedIconPath:'images/clickedFunction.png',text:'功能'},
      {pagePath:'pages/my/index',iconPath:'images/Me.png',selectedIconPath:'images/clickedMe.png',text:'我的'}]

  }
})
