import $ from 'jquery'
import './css/1.css'
import './css/2.less'
import './css/3.scss'
import axios from 'axios'; //导入axios
import {getList} from './api/api'
// axios.defaults.headers = {
//   'Content-Type': 'application/x-www-form-urlencoded' //设置axios 发出post跨域请求
// }


getList(
  {"access_token":"51_m9VhzngBpiaXKpGU_6aq-Kuh8sK_QfYuZUbt8XRRqwT__NbHfUNljeZAf-ZASsl-cTErRYr-3LQOtQEtzm2EEAl6XmvJI_8NjxwWBirBVRXQ_-8C3-S8kks2mG9InJguSGzcMAQCkt9QvAKnATDeAJALEO","data":{"touser":"o60kw5JB5jEyxCFWlmR4sRWGxYco","template_id":"IfU3eOcH_ubviSy5EqYJkGpN_i1-w_JsUHCyZTTybS0","page":"pages/index/index","miniprogram_state":"trial","lang":"zh_CN","data":{"thing2":{"value":"11111"},"thing5":{"value":"订单已送达"},"character_string6":{"value":"SF4420210302"}}}},
)
.then(response => {
  console.log(response);
  // var ele ;
  // var node = document.querySelector('ul');
  // for (let index = 0; index < response.data.data.length; index++) {
  //   const element =  response.data.data[index];
  //   ele = document.createElement('li');
  //   ele.innerHTML = element.boatNo;
  //   node.appendChild(ele);
  //   // $(function(){
  //   $('li:odd').css('backgroundColor', 'yellow');
  //   $('li:even').css('backgroundColor', 'pink');
  //   // })
  // }
});
//import App from './components/App.vue'
//import Vue from 'vue'
//const vm = new Vue({
//el: '#app',
//render: h=> h(App)
//})