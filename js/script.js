"use strict";!function(){$(document).ready((function(){$("a").on("click",(function(t){if(""!==this.hash){t.preventDefault();var s=this.hash;$("html, body").animate({scrollTop:$(s).offset().top-100},800)}}))})),$(".promo__link").on("click",(function(t){t.preventDefault()})),$(".questions__btn").on("click",(function(){$(window).width()<widthTablet?$(this).parent().toggleClass("active"):$(this).parent().hasClass("active")?$(this).parent().removeClass("active"):($(".questions__item").removeClass("active"),$(this).parent().addClass("active"))})),window.addEventListener("resize",(function(){$(window).width()>=widthTablet&&$(".questions__item").removeClass("active")}));$(".questions__btn-collapse--max").on("click",(function(){$(".questions__btn-collapse--min").css("display","block"),$(".questions__btn-collapse--max").css("display","none"),$(".questions__item").css("display","block")})),$(".questions__btn-collapse--min").on("click",(function(){$(".questions__btn-collapse--min").css("display","none"),$(".questions__btn-collapse--max").css("display","block"),$(".questions__item:not(:nth-child(1)):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(4))").css("display","none")}))}();