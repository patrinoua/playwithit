// document.addEventListener('click',function(){
//     console.log('lalala');
// });

var myObj={
    section1:0,
    section2:0,
    section3:0,
};
$('.animation1').on('click',function(e){
    if(myObj[e.target.className]==0){
        myObj[e.target.className] = setInterval(()=>{
            var r=Math.floor(Math.random()*256);
            var g=Math.floor(Math.random()*256);
            var b=Math.floor(Math.random()*256);

            $(`.${e.target.className}`).css({
                color: 'rgb('+r+','+g+','+b+')'
            });
        }, 510);
    }else if(myObj[e.target.className]!=0){
        clearInterval(myObj[e.target.className])
        myObj[e.target.className]=0
    }
})


$('.animation2').click(function(e){
    $('.line').animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
    }, 3000, function() {
    }).animate({
        opacity: 1,
        left: "+=50",
        height: "toggle"
    }, 3000, function() {
          console.log('reverse Animation complete');
    });
})
// $('.line').on('click',function(e){
//     console.log('liiine',e);
// }).animate({
//     opacity: 0.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function() {
//       console.log('Animation complete');
// });
