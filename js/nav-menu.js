"use strict";$(".menu__burger-btn").on("click",(function(){$(".navbar-collapse").toggleClass("show-menu")})),$(window).scroll((function(){$(this).scrollTop()>1?$(".header__tel").addClass("header__tel--fixed"):$(".header__tel").removeClass("header__tel--fixed")})),$(document).ready((function(){$(".first-button").on("click",(function(){$(".animated-icon1").toggleClass("open")})),$(".second-button").on("click",(function(){$(".animated-icon2").toggleClass("open")})),$(".third-button").on("click",(function(){$(".animated-icon3").toggleClass("open")}))}));