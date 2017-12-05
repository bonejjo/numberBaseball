var number=new Array();

for(var i=0;i<4;++i){
    var ran=Math.floor(Math.random()*9);
    for(var j=0;j<i;j++){
        while(1){
            if(number[j]!=ran) break;
            ran=Math.floor(Math.random()*9);
        }
    }
    number.push(ran);
}
console.log(number);
function myFunction() {
    var num = new Array();
    var res=new Array();
    var text=$('#result');

    num.push($('#first').val());
    num.push($('#second').val());
    num.push($('#third').val());
    num.push($('#four').val());
    console.log(num);

    let strike = 0;
    let ball = 0;
    let out;

    for (let i = 0; i < number.length; ++i) {
        for (let j = 0; j < num.length; ++j) {
            if (number[i] == num[j]) {
                if (i == j) {
                    strike++;
                }
                else {
                    ball++;
                }
            }
        }
    }
    out = 4 - strike - ball;
    if(strike==4){
        res.push("축하합니다!");
    }
    else{
        res.push(`${strike} strike ${ball} ball ${out} out`);
    }
    for(let i=0;i<res.length;i++){
        text.html(res);
    }
}