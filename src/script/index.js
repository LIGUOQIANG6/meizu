!function () {
    class Render {
        constructor() {
            
            this.goodslist = document.querySelector('#shangpin')
        }
        init() {
            let  _this=this;
            ajax({
                url: 'http://localhost/lianxi/diwuzhou/day27/gouwuche/php/taobaodata.php',
                dataType: 'json'
            }).then(function (data) {
                // 渲染
                // 遍历render
                let strhtml = " "
                for (let value of data) {
                    strhtml += `
                    <li>
                        <div><a href="javasccript:;"><img src="${value.url}"><span
                                    class="box-info "><span class="goods-name">魅族 Note9</span><span
                                        class="goods-desc">${value.title}</span><span
                                        class="goods-price"><i>￥</i>${value.price}<em></em><s></s></span></span><span
                                    class="product-sign red">领券</span></a></div>
                    </li>
                    `
                }
                // strhtml += '</ul>';
                _this.goodslist.innerHTML=strhtml
            })
        }
    }
    
    new Render().init()
}()