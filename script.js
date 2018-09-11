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
        $('.line, .fourthRectangle').animate({
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
        }, 1500, function() {
        }).animate({
            opacity: 1,
            left: "+=50",
            height: "toggle"
        }, 1500, function() {
              console.log('reverse Animation complete');
        });
    })

    // animation 3
    // add the lines
    var horizontalLines = document.getElementById('horizontalLines');
    var horizontalLine;

    for (var a = 0; a < 7; a++) {
        horizontalLine = document.createElement('div');
        horizontalLine.classList.add('horizontalLine');
        horizontalLine.setAttribute('id', 'horizontal'+a);
        horizontalLines.appendChild(horizontalLine);
    }

    var verticalLines = document.getElementById('verticalLines');
    var verticalLine;
    for (var a = 0; a < 7; a++) {
        verticalLine = document.createElement('div');
        verticalLine.classList.add('verticalLine');
        verticalLine.setAttribute('id', 'vertical'+a);
        verticalLines.appendChild(verticalLine);
    }

    $('#vertical0').css({zIndex:1})
    $('#vertical2').css({zIndex:1})
    $('#vertical4').css({zIndex:1})
    $('#vertical6').css({zIndex:1})

    $('.horizontalLine').on('mouseover',(e)=>{
        // console.log('horizontalLine mouseover', e.target);
        $(e.target).css({
            background:"orange"
        }).on('mouseout',()=>{
            $(e.target).css({
                background:"pink"
            })
        })
    })
    $('.verticalLine').on('mouseover',(e)=>{
        // console.log(' vertical mouseover');
    })

    $('#grid').on('click',(e)=>{
        // $(e.target).addClass("animateTheLine!")
        console.log('targeting..', e.target);
        $(e.target).css({
            transform: 'rotate(' + +45 + 'deg)'
        })
        .on('mouseleave',()=>{
            $(e.target).css({
                transform: 'rotate(' + 0 + 'deg)'
            })
        })
    })

    //animation4

})();
