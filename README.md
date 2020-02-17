# Vue Materials Icon
🍺 Material Icon for Vue lovers. Coded by [Bootcatch](http://bootcatch.com/).

[![NPM](https://img.shields.io/npm/v/vue-materials-icon.svg)](https://www.npmjs.com/package/vue-materials-icon)  [![NPM](https://img.shields.io/npm/dt/vue-materials-icon.svg)](https://www.npmjs.com/package/vue-materials-icon) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Installation
Using NPM:
```js
npm i vue-materials-icon --save 

npm i material-icons --save 
```

## Usage
Import it in your main file `e.g main.js`
```js
import Vue from 'vue'

//import material-icon scss
import 'material-icons/iconfont/material-icons.css';

//defined as global component
Vue.component('V-MaterialIcon', require('vue-materials-icon/MaterialIcon').default);

new Vue({
  render: h => h(App),
}).$mount('#app')

```

Use wherever in your template..
```js
<V-MaterialIcon icon="android" size="4" color="orange"></V-MaterialIcon>
```

## Note
- *Add only name to icon, e.g `icon="android"`*
- ***icon** - Material Icon name will find here [material icons](https://material.io/resources/icons/?style=baseline)*
- ***size** - Icon size in `rem`.*
- ***color** - You can give any valid value `e.g red, yellow, #fffff, #ff0000.`*

## Author

Ajay Marathe

+ https://github.com/ajaymarathe

## Copyright and License

Copyright 2019 [Ajay Marathe](https://github.com/ajaymarathe). Code released under the [MIT](https://github.com/ajaymarathe/vue-materials-icon/blob/master/LICENSE) license.
