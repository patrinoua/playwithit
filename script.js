document.addEventListener('click',function(){
    console.log('lalala');
});

setInterval(()=>{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    $(".section1").css({
        color: 'rgb('+r+','+g+','+b+')'
    });
}, 410);

setInterval(()=>{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    $(".section2").css({
        color: 'rgb('+r+','+g+','+b+')'
    });
}, 500);

setInterval(()=>{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    $(".section3").css({
        color: 'rgb('+r+','+g+','+b+')'
    });
}, 450);
