document.getElementById('btn').addEventListener('click',saveTimer);


var id = 0;
//save Timer
function saveTimer(e){
    id++;
    var num = {
        count:1,
        id:0
    }
    num.id = id;
    console.log("yo");

    if(localStorage.getItem('Timers')===null){
        var Timers = [];
        
        Timers.push(num);
        
        // setInterval(function(){
        //     num.count++;
        // },1000);
        
        localStorage.setItem('Timers',JSON.stringify(Timers));

        console.log("if");

    }
    else{
        var Timers= JSON.parse(localStorage.getItem('Timers'));
        Timers.push(num);
        localStorage.setItem('Timers',JSON.stringify(Timers));

        console.log("else");
    }

    
    // setInterval(function(){
    //     num.count++;

    // },1000);
    fetchTimers();
}

function deleteTimer(id){
    var Timers= JSON.parse(localStorage.getItem('Timers'));

    for(var i=0;i<Timers.length;i++){
        if(Timers[i].id==id)
            Timers.splice(i,1);
    }

    localStorage.setItem('Timers', JSON.stringify(Timers));

    fetchTimers();
}

function fetchTimers(){

    console.log("fetchtimers called");
    var Timers = JSON.parse(localStorage.getItem('Timers'));
    console.log(Timers);
    
    var timerResults = document.getElementById('timerResults');
    timerResults.innerHTML='';

    for(var i=0;i<Timers.length;i++)
    {
        var count=Timers[i].count;
        var buttonID= Timers[i].id;
        timerResults.innerHTML+='<div class="box">'+
                                '<h2>'+count+'</h2>'+
                                '<div class="delBtn">'+
                                '<button onClick="deleteTimer(\''+buttonID+'\')">DELETE'+
                                buttonID+'</button>'+
                                '</div>';
    }
}

// setInterval(function(){
//     var Timers = JSON.parse(localStorage.getItem('Timers'));

//     for(var i=0;i<Timers.length;i++)
//     {
//         Timers[i].count++;
//     }
//     localStorage.setItem('Timers',JSON.stringify(Timers));
//     fetchTimers();
// },1000);



window.onload = fetchTimers;