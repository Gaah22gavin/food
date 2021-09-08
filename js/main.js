$('#menu').on('click', function(){
    $("header").toggleClass("open");
    $(".menu").toggleClass("openner")
});
// ==================================
    const countdown = () =>{
      const countDate = new Date("sep 20, 2021 00:00:00").getTime();
      let now = new Date().getTime();
      const gap = countDate - now;

      // ============
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      // ============ 

      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);

      document.querySelector('.day').innerText = textDay;
      document.querySelector('.day').innerText = textDay;
      document.querySelector('.hour').innerText = textHour;
      document.querySelector('.minute').innerText = textMinute;
      document.querySelector('.second').innerText = textSecond;

    };
    // countdown();
    setInterval(countdown, 1000);
// ============================

$(document).on('ready', function(){

  // $(".center").slick({
  //     dots: false,
  //     infinite: true,
  //     centerMode: true,
  //     slidesToShow:2,
  //     slidesToScroll: 3,
  //     autoplay:true,

  //     // responsive:[        
  //     //     {
  //     //       breakpoint:480,
  //     //       settings:{
  //     //         slidesToShow:1,
  //     //         slidesToScroll:3,
  //     //       }        
  //     //     },

  //     //     {
  //     //       breakpoint:1024,
  //     //       settings:{
  //     //         slidesToShow:3,
  //     //         slidesToScroll:3,
  //     //       }
  //     //     }
  //     // ]
  // });

  // $(".tabbs-slick").slick({
  //   dots: false,
  //   infinite: true,
  //   centerMode: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 3,
  //   // prevArrow:"#prev",
  //   // nextArrow:"#next",
  //   autoplay:false,
  // });


  $(".center").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:"#prev",
    nextArrow:"#next",
    autoplay:true,
  });


  $(".center_two").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    arrow:false,
  });


  $(".tabbs-slick").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    // prevArrow:"#prev",
    // nextArrow:"#next",
  });


});



// document.addEventListener("DOMContentLoaded", () => {
//   setupTabs();


// =============================================

var model = document.getElementById("simplemodule");
var model_btn = document.getElementById("modulebtn");
var close_btn = document.getElementById("close_btn");


model_btn.addEventListener('click',function(){
  model.style.visibility = "visible"
  close_btn.style.display = "block"
});

close_btn.addEventListener('click', function(){
  model.style.visibility  = "hidden"
  close_btn.style.display = "none"
});
// ====================================

var two = document.getElementById("two");
var model_two = document.getElementById("simple-two");
var close = document.getElementById("close");

two.addEventListener('click',function(){
  model_two.style.visibility = "visible"
  close.style.display = "block"
});

close.addEventListener('click', function(){
  model_two.style.visibility  = "hidden"
  close.style.display = "none"
});

// =======================================

// btn
var fast = document.getElementById("fast");
// content box
var fastfood = document.getElementById("fastfood");
//closing box
var fastclose = document.getElementById("fastclose");

// btn
fast.addEventListener('click',function(){
  fastfood.style.visibility = "visible"
  fastclose.style.display = "block"
});

// closing btn
fastclose.addEventListener('click', function(){
  fastfood.style.visibility  = "hidden"
  fastclose.style.display = "none"
});

// ======================================


// btn
var cupacake = document.getElementById("cupcake");
// content box
var cupacake_box = document.getElementById("cupcake-box");
//closing box
var closecupcake = document.getElementById("closecupcake");

// btn
cupacake.addEventListener('click',function(){
  cupacake_box.style.visibility = "visible"
  closecupcake .style.display = "block"
  console.log("hello")
});

// closing btn
closecupcake.addEventListener('click', function(){
  cupacake_box.style.visibility  = "hidden"
  fclosecupcake .style.display = "none"
});


// btn
var sandwich = document.getElementById("sandwich");
// content box
var sandwich_box = document.getElementById("sandwich-box");
//closing box
var closesandwich = document.getElementById("closesandwich");

// btn
sandwich.addEventListener('click',function(){
  sandwich_box.style.visibility = "visible"
  closecupcake .style.display = "block"
});

// closing btn
closesandwich.addEventListener('click', function(){
  sandwich_box.style.visibility  = "hidden"
  closesandwich.style.display = "none"
});


// btn
var spaghitte = document.getElementById("spaghitte");
// content box
var spaghitte_box = document.getElementById("spaghitte-box");
//closing box
var closespaghetti= document.getElementById("closespaghetti");

// btn
spaghitte.addEventListener('click',function(){
  spaghitte_box.style.visibility = "visible"
  closespaghetti.style.display = "block"
});

// closing btn
closespaghetti.addEventListener('click', function(){
  spaghitte_box.style.visibility  = "hidden"
  closespaghetti.style.display = "none"
});
// ======================================================

// btn
var order = document.getElementById("order");
// content box
var order_box = document.getElementById("order-box");
//closing box
var closeorder = document.getElementById("closeorder");

// btn
order.addEventListener('click',function(){
  order_box.style.visibility = "visible"
  closeorder.style.display = "block"
});

// closing btn
closeorder.addEventListener('click', function(){
  order_box.style.visibility  = "hidden"
  closeorder.style.display = "none"
});