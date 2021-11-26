import axios from 'axios'; //导入axios
// import { param } from 'jquery';
// import { devServer } from '../../webpack.config';
export function getList (param) {
    return new Promise ((resolve,reject) => {
        axios({
            method: 'post',
            url: '/api/list',
            data:param,
            
          })
          .then(response => {
              console.log(response);
              resolve(response)
          })
          .catch((e)=>{
            reject(e)
          })
    }) 
   
}
