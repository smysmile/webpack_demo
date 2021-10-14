import $ from 'jquery'
import './css/1.css'
import './css/2.less'
import './css/3.scss'
import axios from 'axios'; //导入axios

// axios.defaults.headers = {
//   'Content-Type': 'application/x-www-form-urlencoded' //设置axios 发出post跨域请求
// }


axios({
  method: 'get',
  url: 'http://localhost:8088/getAll?pageNo=1&pageSize=5',
})
.then(response => {
  console.log(response);
  var ele ;
  var node = document.querySelector('ul');
  for (let index = 0; index < response.data.data.length; index++) {
    const element =  response.data.data[index];
    ele = document.createElement('li');
    ele.innerHTML = element.boatNo;
    node.appendChild(ele);
    // $(function(){
    $('li:odd').css('backgroundColor', 'yellow');
    $('li:even').css('backgroundColor', 'pink');
    // })
  }
});
//import App from './components/App.vue'
//import Vue from 'vue'
//const vm = new Vue({
//el: '#app',
//render: h=> h(App)
//})