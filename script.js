(function(){
    // animation 1
    var myObj={
        section1:0,
        section2:0,
        section3:0,
    };
    myObj['section1'] = setInterval(()=>{
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        $(".section1").css({
            color: 'rgb('+r+','+g+','+b+')'
        });
    }, 410);
    myObj['section2'] = setInterval(()=>{
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        $(".section2").css({
            color: 'rgb('+r+','+g+','+b+')'
        });
    }, 590);
    myObj['section3'] = setInterval(()=>{
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        $(".section3").css({
            color: 'rgb('+r+','+g+','+b+')'
        });
    }, 810);

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

    // animation 2
    $('.animation2').click(function(e){
        $('.line').animate({
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
        }, 2000, function() {
        }).animate({
            opacity: 1,
            left: "+=50",
            height: "toggle"
        }, 2000, function() {
              console.log('reverse Animation complete');
        });
    })
    // animation 3

    var horizontalLines = document.getElementById('horizontalLines');
    var horizontalLine;

    // add the lines
    for (var a = 0; a < 7; a++) {
    horizontalLine = document.createElement('div');
    horizontalLine.classList.add('horizontalLine');
    horizontalLine.setAttribute('id', + a);
    horizontalLines.appendChild(horizontalLine);
    }
    
    var verticalLines = document.getElementById('verticalLines');
    var verticalLine;
    for (var a = 0; a < 7; a++) {
    vertical = document.createElement('div');
    vertical.classList.add('verticalLine');
    vertical.setAttribute('id', + a);
    grid.appendChild(vertical);
    }

})();
// var myObj={
//     section1:0,
//     section2:0,
//     section3:0,
// };
//
// myObj[section1] = setInterval(()=>{
//     var r=Math.floor(Math.random()*256);
//     var g=Math.floor(Math.random()*256);
//     var b=Math.floor(Math.random()*256);
//     console.log('this works');
//     $(".section1").css({
//         color: 'rgb('+r+','+g+','+b+')'
//     });
// }, 510);
// console.log('yodfv', myObj);
// $('.animation1').on('click',function(e){
//     if(myObj[e.target.className]==0){
//         myObj[e.target.className] = setInterval(()=>{
//             var r=Math.floor(Math.random()*256);
//             var g=Math.floor(Math.random()*256);
//             var b=Math.floor(Math.random()*256);
//
//             $(`.${e.target.className}`).css({
//                 color: 'rgb('+r+','+g+','+b+')'
//             });
//         }, 510);
//     }else if(myObj[e.target.className]!=0){
//         clearInterval(myObj[e.target.className])
//         myObj[e.target.className]=0
//     }
// })
//
//
// $('.animation2').click(function(e){
//     $('.line').animate({
//         opacity: 0.25,
//         left: "+=50",
//         height: "toggle"
//     }, 3000, function() {
//     }).animate({
//         opacity: 1,
//         left: "+=50",
//         height: "toggle"
//     }, 3000, function() {
//           console.log('reverse Animation complete');
//     });
// })
// $('.line').on('click',function(e){
//     console.log('liiine',e);
// }).animate({
//     opacity: 0.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function() {
//       console.log('Animation complete');
// });
