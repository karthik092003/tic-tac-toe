let count = 0
const rows = 3;
const cols = 3;
const a = new Array(rows);
let ignore=2
for (let i = 0; i < rows; i++) {
  a[i] = new Array(cols).fill(0);
}
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        a[i][j]=ignore
        ignore=ignore+1
    }
}

function winner(p){
    document.getElementById("t").innerText="Player"+p+" is the winner"
}
function tie(){
    $(".box").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    document.getElementById("t").innerText="It's a draw"
}

    document.getElementById("one").addEventListener("click",function (){
        if(count%2===0){
            document.getElementById("one").innerText="O"
            a[0][0]=0
            console.log(a[0][0])
            check()
            count++
            console.log(count)
        }
        else{
            document.getElementById("one").innerText="X"
            a[0][0]=1
            check()
            count++
            console.log(count)
        }
    })
    document.getElementById("two").addEventListener("click",function (){
        if(count%2===0){
            document.getElementById("two").innerText="O"
            a[1][0]=0
            console.log(a[1][0])
            check()
            count++
            console.log(count)
        }
        else{
            document.getElementById("two").innerText="X"
            a[1][0]=1
            check()
            count++
            console.log(count)
        }
    })
    document.getElementById("three").addEventListener("click",function (){
        if(count%2===0){
            document.getElementById("three").innerText="O"
            a[2][0]=0
            console.log(a[2][0])
            check()
            count++
            console.log(count)
        }
        else{
            document.getElementById("three").innerText="X"
            a[2][0]=1
            check()
            count++
            console.log(count)
        }
    })
    document.getElementById("four").addEventListener("click",function (){
        if(count%2===0){
            document.getElementById("four").innerText="O"
            a[0][1]=0
            check()
            count++
            console.log(count)
        }
        else{
            document.getElementById("four").innerText="X"
            a[0][1]=1
            check()
            count++
            console.log(count)
        }
    })
    document.getElementById("five").addEventListener("click",function (){
        if(count%2===0){
            document.getElementById("five").innerText="O"
            a[1][1]=0
            check()
            count++
            console.log(count)
        }
        else{
            document.getElementById("five").innerText="X"
            a[1][1]=1
            check()
            count++
            console.log(count)
        }
    })
    document.getElementById("six").addEventListener("click",function (){
        if(count%2===0){
            document.getElementById("six").innerText="O"
            a[2][1]=0
            check()
            count++
            console.log(count)
        }
        else{
            document.getElementById("six").innerText="X"
            a[2][1]=1
            check()
            count++
            console.log(count)
        }
    })
    document.getElementById("seven").addEventListener("click",function (){
        if(count%2===0){
            document.getElementById("seven").innerText="O"
            a[0][2]=0
            check()
            count++
            console.log(count)
        }
        else{
            document.getElementById("seven").innerText="X"
            a[0][2]=1
            check()
            count++
            console.log(count)
        }
    })
    document.getElementById("eight").addEventListener("click",function (){
        if(count%2===0){
            document.getElementById("eight").innerText="O"
            a[1][2]=0
            check()
            count++
            console.log(count)
        }
        else{
            document.getElementById("eight").innerText="X"
            a[1][2]=1
            check()
            count++
            console.log(count)
        }
    })
    document.getElementById("nine").addEventListener("click",function (){
        if(count%2===0){
            document.getElementById("nine").innerText="O"
            a[2][2]=0
            check()
            count++
            console.log(count)
        }
        else{
            document.getElementById("nine").innerText="X"
            a[2][2]=1
            check()
            count++
            console.log(count)
        }
    })
    
    
function check (){
    if(count==8){
        console.log(count)
        tie()
    }
    if(a[0][0]==0 && a[1][0]==0 && a[2][0]==0){
        console.log("p1 winner")
        $("#one").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#two").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#three").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        winner(1)
    }
    else if(a[0][0]==1 && a[1][0]==1 && a[2][0]==1){
        console.log("p2 winner")
        $("#one").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#two").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#three").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        winner(2)
    }
    else if(a[0][1]==0 && a[1][1]==0 && a[2][1]==0){
        console.log("p1 winner")
        $("#four").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#five").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#six").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        winner(1)
    }
    else if(a[0][1]==1 && a[1][1]==1 && a[2][1]==1){
        console.log("p2 winner")
        $("#four").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#five").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#six").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        winner(2)
    }
    else if(a[0][2]==0 && a[1][2]==0 && a[2][2]==0){
        console.log("p1 winner")
        $("#seven").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#eight").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#nine").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        winner(1)
    }
    else if(a[0][2]==1 && a[1][2]==1 && a[2][2]==1){
        console.log("p2 winner")
        $("#seven").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#eight").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#nine").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        winner(2)
    }
    else if(a[0][0]==0 && a[0][1]==0 && a[0][2]==0){
        console.log("p1 winner")
        $("#one").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#four").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#seven").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        winner(1)
    }
    else if(a[0][0]==1 && a[0][1]==1 && a[0][2]==1){
        console.log("p2 winner")
        $("#one").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#four").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#seven").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        winner(2)
    }
    else if(a[1][0]==0 && a[1][1]==0 && a[1][2]==0){
        console.log("p1 winner")
        $("#two").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#five").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#eight").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        winner(1)
    }
    else if(a[1][0]==1 && a[1][1]==1 && a[1][2]==1){
        console.log("p2 winner")
        $("#two").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#five").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#eight").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        winner(2)
    }
    else if(a[2][0]==0 && a[2][1]==0 && a[2][2]==0){
        console.log("p1 winner")
        $("#three").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#six").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#nine").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        winner(1)
    }
    else if(a[2][0]==1 && a[2][1]==1 && a[2][2]==1){
        console.log("p2 winner")
        $("#three").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#six").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#nine").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        winner(2)
    }
    else if(a[0][0]==0 && a[1][1]==0 && a[2][2]==0){
        console.log("p1 winner")
        $("#one").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#five").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#nine").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        winner(1)
    }
    else if(a[0][0]==1 && a[1][1]==1 && a[2][2]==1){
        console.log("p2 winner")
        $("#one").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#five").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#nine").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        winner(2)
    }
    else if(a[0][2]==0 && a[1][1]==0 && a[2][0]==0){
        console.log("p1 winner")
        $("#seven").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#five").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#three").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        winner(1)
    }
    else if(a[0][2]==1 && a[1][1]==1 && a[2][0]==1){
        console.log("p2 winner")
        $("#seven").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#five").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#three").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        winner(2)
    }
}


