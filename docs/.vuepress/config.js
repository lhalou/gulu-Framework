module.exports = {
  title: '咕噜 UI',
  description: '一个好用的 UI 框架',
  
  themeConfig: {
    logo: 'public/assets/gulu.png',
    sidebar: [
        {
          title: '开始',
          children: [ '/install/', '/get-started/']
        },
        {
          title: '组件',
          children: [
             '/components/button',
             '/components/input',
            '/components/layout'
             ]
        } 
      ],
      nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/components/button' },
            { text: 'github', link: 'https://github.com/lhalou/gulu-Framework' },
        ]
  
  }  
}