var c1c=2;
var c2c=2;
var c3c=2;
var c4c=2;
var c5c=2;
var c6c=2;
var c7c=2;
var c8c=2;
var reset1=2;

function furiwake(huri){
    if(c1c==2){
        c1(huri);
    }
    else if(c2c==2){
        c2(huri);
    }
    else if(c3c==2){
        c3(huri);
    }
    else if(c4c==2){
        c4(huri);
    }
    else if(c5c==2){
        c5(huri);
    }
    else if(c6c==2){
        c6(huri);
    }
    else if(c7c==2){
        c7(huri);
    }
    else if(c8c==2){
        c8(huri);
    }
    else if(reset1==2){
        reset();
    }

}





function c1(k1){
    var change=document.getElementById("question");
    if(k1==0){
        alert("高専に進みました！");
        c1c=0;
        c2c=0;
        change.innerHTML="あなたは今高専にいます。\nもっと勉強したいですか？";
    }
    else if(k1==1){
        alert("工業高校に進みました！");
        c1c=0;
        change.innerHTML="あなたは今工業高校にいます。\nもっと勉強したいですか？";
    }
}

function c2(k2){
    var change=document.getElementById("question");
    if(k2==0){
        alert("工業大学に進みました！");
        c1c=0;c2c=0;c3c=0;c4c=0;c5c=0;
        change.innerHTML="あなたは今工業大学にいます。\nもっと勉強したいですか？";
    }
    else if(k2==1){
        c10();
    }
}

function c3(k3){
    var change=document.getElementById("question");
    if(k3==0){
        c1c=0;c2c=0;c3c=0;
        change.innerHTML="工業大学に編入しますか？";
    }
    else if(k3==1){
        c10();
    }
}

function c4(k4){
    var change=document.getElementById("question");
    if(k4==0){
        alert("工業大学に進みました！");
        c1c=0;c2c=0;c3c=0;c4c=0;c5c=0;
        change.innerHTML="あなたは今工業大学にいます。\nもっと勉強したいですか？";
    }
    else if(k4==1){
        alert("専攻科に進みました！");
        c1c=0;c2c=0;c3c=0;c4c=0;c5c=0;
        change.innerHTML="あなたは今専攻科にいます。\nもっと勉強したいですか？";
    }
}

function c5(k5){
    var change=document.getElementById("question");
    if(k5==0){
        alert("修士課程に進みました！");
        c1c=0;c2c=0;c3c=0;c4c=0;c5c=0;c6c=0;c7c=0;
        change.innerHTML="あなたは今修士課程にいます。\nもっと勉強したいですか？";
    }
    else if(k5==1){
        c10();
    }
}

function c6(k6){
    var change=document.getElementById("question");
    if(k6==0){
        alert("修士課程に進みました！");
        c1c=0;c2c=0;c3c=0;c4c=0;c5c=0;c6c=0;
        change.innerHTML="あなたは修士課程にいます。\nもっと勉強したいですか？";
    }
    else if(k6==1){
        c10();
    }
}

function c7(k7){
    var change=document.getElementById("question");
    if(k7==0){
        alert("博士課程に進みました！");
        c1c=0;c2c=0;c3c=0;c4c=0;c5c=0;c6c=0;c7c=0;
        change.innerHTML="あなたは今博士課程にいます。\nもっと勉強したいですか？";
    }
    else if(k7==1){
        c10();
    }
}

function c8(k8){
    var change=document.getElementById("question");
    if(k8==0){
        c9();
    }
    else if(k8==1){
        c10();
    }
}

function c9(){
    var change=document.getElementById("question");
    change.innerHTML="研究を頑張ってるのに芽が出ない…......";
    setTimeout(function() {
        change.innerHTML="研究を頑張ってるのに芽が出ない…\nこのままだと大学に残れない…";
    },1000);
    
    setTimeout(function() {
        change.innerHTML="もうこのままだと…......";
    },2000);
    
    setTimeout(function() {
        change.innerHTML="そうだ！！";
    },3000);
    
    setTimeout(function() {
        c10();
    },4000);
}

function c10(){
    c1c=0;c2c=0;c3c=0;c4c=0;c5c=0;c6c=0;c7c=0;c8c=0;
    var change=document.getElementById("question");
    change.innerHTML="大きな会社に就職できた！！......";
    setTimeout(function() {
        change.innerHTML="大きな会社に就職できた！！\nここは安寧の地！！！";
    },1000);
    setTimeout(function() {
        alert("おめでとうございます！工場に出荷です！");
        
    var resetno=document.getElementById("nobutton");
   var resetyes=document.getElementById("yesbutton");
        resetno.innerHTML="最初に戻る"
        resetyes.innerHTML="最初に戻る"
    },2000);
}

function reset(){
    c1c=2;c2c=2;c3c=2;c4c=2;c5c=2;c6c=2;c7c=2;c8c=2;
    resetno=document.getElementById("nobutton");
   var resetyes=document.getElementById("yesbutton");
        resetno.innerHTML="いいえ"
        resetyes.innerHTML="はい"
    change=document.getElementById("question");
    change.innerHTML="中学のころ勉強はできましたか？";
    
    
}



function yesButton(){
    var yes=0;
    furiwake(yes);
}

function noButton(){
    var no=1;
    furiwake(no);
}