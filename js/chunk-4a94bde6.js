(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a94bde6"],{"280b":function(t,a,e){},"71b4":function(t,a,e){"use strict";e("280b")},"76a1":function(t,a,e){"use strict";e.r(a);var r=e("7a23");function c(t,a,e,c,n,d){var i=Object(r["H"])("flower-pay");return Object(r["z"])(),Object(r["e"])(i)}var n={class:"payment"},d={class:"content-width"},i=Object(r["i"])('<div class="payment__comment text"><p> Не настоящая оплата. Сайт учебный. Можно оформить заказ и посмотреть его у себя в профиле, если авторизован. </p><p>&quot;Неоплаченные&quot; заказы в течении 3-6 минут, возвращаются на склад</p></div><div class="payment__body"><div class="payment__card payment__card--front card-front"><div class="card-front__number"><div class="card-front__label auxiliary">Card number</div><div class="card-front__input"><input disabled="true" type="text" class="input"></div></div><div class="card-front__date"><div class="card-front__label auxiliary">Expiration date</div><input disabled="true" type="text" class="input"><input disabled="true" type="text" class="input"></div><div class="card-front__holder"><div class="card-front__label auxiliary">Cardholder name</div><input disabled="true" type="text" class="input"></div><div class="card-front__icons"><span class="icon-font__visa"></span><span class="icon-font__mastercard"></span><span class="icon-font__mir"></span></div></div><div class="payment__card payment__card--back card-back"><div class="card-back__line"></div><div class="card-back__content"><div class="card-back__cvc auxiliary">CVC\\CVV</div><div class="card-back__input"><input disabled="true" type="text" class="input"></div><div class="card-back__text"> The last 3 or 4 digits on back of the card </div></div></div></div>',2),s={class:"payment__button"};function o(t,a,e,c,o,u){return Object(r["z"])(),Object(r["g"])("section",n,[Object(r["h"])("div",d,[i,Object(r["h"])("div",s,[Object(r["h"])("button",{type:"button",class:"button button--go",onClick:a[0]||(a[0]=function(){return u.orderProduct&&u.orderProduct.apply(u,arguments)})}," Оплатить ")])])])}var u=e("1da1"),l=e("5530"),p=(e("96cf"),e("5502")),b={components:{},props:{},computed:Object(l["a"])({},Object(p["c"])("cart",{orderId:"orderId"})),methods:Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(p["b"])("cart",{buy:"buy"})),Object(p["b"])("alerts",{addAlert:"addAlert"})),{},{orderProduct:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!t.orderId){a.next=6;break}return a.next=3,t.buy(t.orderId);case 3:e=a.sent,console.log(e),e?t.$router.push({name:"main"}):(t.$router.push({name:"cart"}),t.addAlert({text:"Заказ не найден, повторите попытку. Товары вернуться на склад в течении 3-6 минут",critical:!1,type:"error"}));case 6:case"end":return a.stop()}}),a)})))()}}),mounted:function(){}},v=(e("71b4"),e("6b0d")),_=e.n(v);const f=_()(b,[["render",o]]);var m=f,y={name:"pay",$head:function(){return{title:"Оплата"}},components:{FlowerPay:m},data:function(){return{}},methods:{}};const h=_()(y,[["render",c]]);a["default"]=h}}]);