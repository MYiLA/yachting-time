"use strict";!function(){var e="https://cors-anywhere.herokuapp.com/https://formspree.io/xknqwaqr",o=function(e,o,t,a,n){var s=new XMLHttpRequest;s.responseType="json",s.addEventListener("load",(function(){200===s.status?t(s.response):a("Статус ответа: "+s.status+" "+s.statusText)})),s.addEventListener("error",(function(){a("Произошла ошибка соединения")})),s.addEventListener("timeout",(function(){a("Закончился срок действия запроса")})),s.timeout=1e4,s.open(e,o),s.send(n)};$(".cruises-select__tabs-caption").on("click",".cruises-select__tab:not(.active)",(function(){$(this).addClass("active").siblings().removeClass("active").closest(".cruises-select__wrap").children(".cruises-select__content-wrap").find(".cruises-select__tabs-content").removeClass("active").eq($(this).index()).addClass("active")})),$(".cruises-select__btn-collapse").on("click",(function(){$(".cruises-select__wrap").toggleClass("active")})),$(".form__input").on("focusout",(function(){""===$(this).val()&&($(this).parent().removeClass("active"),$(this).parent().removeClass("valid"))})),$(".form__input-wrap").on("click",(function(){$(this).addClass("active")})),$(".form__btn-close").on("click",(function(){$(".popup-form").removeClass("active"),$(".popup-form").removeClass("active--no-places"),$(".popup-form .form__form")[0].reset(),$(".popup-form .form__input-wrap").each((function(){$(this).removeClass("valid"),$(this).removeClass("active")}))})),$(".upcoming-trips__btn--book").on("click",(function(){$(".popup-form").addClass("active")})),$(".upcoming-trips__btn--tel").on("click",(function(){$(".popup-form").addClass("active--no-places")}));IMask($("#tel")[0],{mask:"+{7} (900) 000-00-00",placeholderChar:"_",lazy:!1}),IMask($("#tel-popup")[0],{mask:"+{7} (900) 000-00-00",placeholderChar:"_",lazy:!1}),IMask($("#name-popup")[0],{mask:/^(?!.*\s{2,})[a-zA-Zа-яА-Я\s]+$/}),IMask($("#name")[0],{mask:/^(?!.*\s{2,})[a-zA-Zа-яА-Я\s]+$/});$(".landing__form").on("submit",(function(e){e.preventDefault()})),$(".popup-form").on("submit",(function(e){e.preventDefault()}));var t=function(e){return""!==e[0].value?(e.parent().removeClass("invalid"),e.parent().addClass("valid"),!0):(e.parent().addClass("invalid"),e.parent().removeClass("valid"),e.parent().children("label").text("Имя введено не полностью"),e.parent().children("label").css({color:"#e30a17"}),setTimeout((function(){e.parent().removeClass("invalid"),e.parent().children("label").text("Ваше имя"),e.parent().children("label").attr("style","")}),2500),!1)},a=function(e){return-1===e.val().search("_")&&""!=e.val()?(e.parent().removeClass("invalid"),e.parent().addClass("valid"),!0):(e.parent().addClass("invalid"),e.parent().removeClass("valid"),e.parent().children("label").text("Номер телефона введен не полностью"),e.parent().children("label").css({color:"#e30a17"}),setTimeout((function(){e.parent().removeClass("invalid"),e.parent().children("label").text("Ваш номер телефона"),e.parent().children("label").attr("style","")}),2500),!1)};$("#name").on("focusout",(function(){t($("#name"))})),$("#tel").on("focusout",(function(){a($("#tel"))})),$("#name-popup").on("focusout",(function(){t($("#name-popup"))})),$("#tel-popup").on("focusout",(function(){a($("#tel-popup"))}));var n=function(e){$(".popup-thanks").addClass("active"),$(".popup-thanks").addClass(e)},s=function(e){$(".popup-thanks").removeClass("active"),$(".popup-thanks").removeClass(e)},p=function(e){$(".popup-error").addClass("active"),$(".popup-error").addClass(e)},r=function(e){$(".popup-error").removeClass("active"),$(".popup-error").removeClass(e)},i=function(e){p("popup-error--white")},l=function(){n("popup-thanks--white"),$(".landing__form .form__form")[0].reset(),$(".landing__form .form__input-wrap").each((function(){$(this).removeClass("valid"),$(this).removeClass("active")}))},c=function(e){p("popup-error--black")},u=function(){n("popup-thanks--black"),$(".popup-form .form__form")[0].reset(),$(".popup-form .form__input-wrap").each((function(){$(this).removeClass("valid"),$(this).removeClass("active")}))};$(".popup-form .form__submit").on("click",(function(n){n.preventDefault(),t($("#name-popup")),a($("#tel-popup")),$(".popup-form .form__input-wrap.invalid").length>0||($(".popup-form").removeClass("active"),$(".popup-form").removeClass("active--no-places"),o("POST",e,u,c,new FormData($(".popup-form .form__form")[0])))})),$(".landing__form .form__submit").on("click",(function(n){n.preventDefault(),t($("#name")),a($("#tel")),$(".landing__form .form__input-wrap.invalid").length>0||o("POST",e,l,i,new FormData($(".landing__form .form__form")[0]))})),$(".popup-thanks__btn").on("click",(function(){s("popup-thanks--white"),s("popup-thanks--black")})),$(".popup-error__btn").on("click",(function(){r("popup-error--white"),r("popup-error--black")}))}();