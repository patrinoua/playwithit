document.addEventListener('click',function(){
    console.log('lalala');
});


setInterval(()=>{
    // console.log('hey');
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    $(".section1").css({
        color: 'rgb('+r+','+g+','+b+')'
    });
}, 410);
setInterval(()=>{
    // console.log('yo');
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    $(".section2").css({
        color: 'rgb('+r+','+g+','+b+')'
    });
}, 500);
setInterval(()=>{
    // console.log('yo');
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    $(".section3").css({
        color: 'rgb('+r+','+g+','+b+')'
    });
}, 450);

// var promise1 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 1000, 'foo');
// });
// setTimeout(function(){ alert("Hello"); }, 1000);
// for(var i=0;i<10;i++){
//     setTimeout(function(){
//         promise1.then(()=>{
//                 console.log('yey');
//                 var r=Math.floor(Math.random()*256);
//                 var g=Math.floor(Math.random()*256);
//                 var b=Math.floor(Math.random()*256);
//                 $(".section1").css({
//                     color: 'rgb('+r+','+g+','+b+')'
//                 });
//                 console.log(i);
//                 i++
//             }
//         )
//     }, 200);
// }
//
//
//
//
//
// console.log(promise1);
// var i = 0;
// promise1.then(()=>{
//         console.log('yey');
//         var r=Math.floor(Math.random()*256);
//         var g=Math.floor(Math.random()*256);
//         var b=Math.floor(Math.random()*256);
//         $(".section1").css({
//             color: 'rgb('+r+','+g+','+b+')'
//         });
//         console.log(i);
//         i++
//     }
// )
