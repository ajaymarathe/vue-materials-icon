# vue-materials-icon
🍺 Hi there, font-awesome icons for react lovers <3, Thanks...

[![NPM](https://img.shields.io/npm/v/vue-materials-icon.svg)](https://www.npmjs.com/package/vue-materials-icon)  [![NPM](https://img.shields.io/npm/dt/vue-materials-icon.svg)](https://www.npmjs.com/package/vue-materials-icon) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Installation
Using NPM:
```js
npm i vue-materials-icon

npm i material-icons
```

## Usage
Import it in your main file `e.g main.js`
```js
import Vue from 'vue'

//import material-icon scss
import 'material-icons/iconfont/material-icons.scss';

//defined as global component
Vue.component('V-MaterialIcon', require('vue-materials-icon/src/components/MaterialIcon').default);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

```

Use wherever in your template..
```js
<V-MaterialIcon icon="android" size="4" color="orange"></V-MaterialIcon>
```

## Note
- add only name to icon, e.g `icon="android"`
- **icon** - font-awesome icon name will find here [material icons](https://material.io/resources/icons/?style=baseline)
- **size** - icon size in `rem`.
- **color** - you can give any valid value `e.g red, yellow, #fffff, #ff0000.`

## Author

Ajay Marathe

+ https://github.com/ajaymarathe

## Copyright and License

Copyright 2019 [Ajay Marathe](https://github.com/ajaymarathe). Code released under the [MIT](https://github.com/ajaymarathe/vue-fontawesome/blob/master/LICENSE) license.
