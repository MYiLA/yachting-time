"use strict";$(".cruises-select__tabs-caption").on("click",".cruises-select__tab:not(.active)",(function(){$(this).addClass("active").siblings().removeClass("active").closest(".cruises-select__wrap").children(".cruises-select__content-wrap").find(".cruises-select__tabs-content").removeClass("active").eq($(this).index()).addClass("active")})),$(".cruises-select__btn-collapse").on("click",(function(){$(".cruises-select__wrap").toggleClass("active")})),$(".form__input-wrap").on("click",(function(){$(this).addClass("active")})),$(".form__submit").on("click",(function(c){c.preventDefault()})),$(".form__btn-close").on("click",(function(){$(".popup-form").removeClass("active")})),$(".form__btn-close").on("click",(function(){$(".popup-form").removeClass("active--no-places")})),$(".upcoming-trips__btn--book").on("click",(function(){$(".popup-form").addClass("active")})),$(".upcoming-trips__btn--tel").on("click",(function(){$(".popup-form").addClass("active--no-places")}));