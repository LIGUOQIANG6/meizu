// !function () {
// import ajax from './ajaxpromise.js';
// import { ajax } from "./ajaxpromise.js";
// class Zhuce {
//     constructor() {

//         this.goodslist = document.querySelector('#shangpin')
//     }
//     init() {
//         let _this = this;
//         ajax({
//             url: 'http://localhost/lianxi/diwuzhou/phpdata/username.php',
//             dataType: 'json'
//         }).then(function (data) {
//             // 渲染
//             // 遍历render
//             let strhtml = " "
//             for (let value of data) {
//                 strhtml += `
//                     <li>
//                         <div><a href="javasccript:;"><img src="${value.url}"><span
//                                     class="box-info "><span class="goods-name">魅族 Note9</span><span
//                                         class="goods-desc">${value.title}</span><span
//                                         class="goods-price"><i>￥</i>${value.price}<em></em><s></s></span></span><span
//                                     class="product-sign red">领券</span></a></div>
//                     </li>
//                     `
//             }
//             // strhtml += '</ul>';
//             _this.goodslist.innerHTML = strhtml
//         })
//     }
// }
// export { Zhuce };




let inputs = document.querySelectorAll('input');
const span = document.querySelector('span');
let btn = document.querySelector('btn')
//前端将用户名通过ajax传给后端。后端获取用户名和数据库里面的用户名进行比较，返回比较的结果
inputs[0].onblur = function () {
    let ajax = new XMLHttpRequest();
    ajax.open('post', 'http://localhost/projectname/php/username.php', true);
    ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    ajax.send('name=' + inputs[0].value);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status === 200) {
                //获取接口继续对应报错。
                if (!ajax.responseText) {//不存在
                    span.innerHTML = '√'
                    // btn.onclick = function () {
                    //     if (b) {
                    //         console.log(123)
                    //     }else{
                    //         console.log(56)
                    //     }
                    // }
                }
            } else {//存在
                span.innerHTML = '该用户名已经存在';
            }
        } else {
            throw new Error('接口地址有误');
        }
    }
}