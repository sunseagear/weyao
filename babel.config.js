module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'import',
      { libraryName: 'vant', libraryDirectory: 'es', style: true },
      'vant'
    ],
    [
      { "libraryName": "mint-ui", "style": true }
    ]
  ]
}
