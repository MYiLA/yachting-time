"use strict";$(".cruises-select__tabs-caption").on("click",".cruises-select__tab:not(.active)",(function(){$(this).addClass("active").siblings().removeClass("active").closest(".cruises-select__wrap").children(".cruises-select__content-wrap").find(".cruises-select__tabs-content").removeClass("active").eq($(this).index()).addClass("active")})),$(".cruises-select__btn-collapse").on("click",(function(){$(".cruises-select__wrap").toggleClass("active")})),$(".form__input-wrap").on("click",(function(){$(this).addClass("active")})),$(".form__submit").on("click",(function(s){s.preventDefault()})),promo__link;