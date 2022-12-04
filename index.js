function saturdayFun(skay='roller-skate'){
return `This Saturday, I want to ${skay}!`
   
}
function mondayWork(skay='go to the office'){
    return `This Monday, I will ${skay}.`
}

function wrapAdjective(skay='*'){
   return function (st="a hard worker"){
   return `You are ${skay}${st}${skay}!`
    }
}
