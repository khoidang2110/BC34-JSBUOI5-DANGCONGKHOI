



//Bai tap 1:
document.getElementById("result").onclick = function(){
  //input
  var standardScore = document.getElementById("standardScore").value*1;
  var area = document.getElementById("area").value;
  var subject = document.getElementById("subject").value;
  var score1 = document.getElementById("score1").value*1;
  var score2 = document.getElementById("score2").value*1;
  var score3 = document.getElementById("score3").value*1;
  //process
  var result ='';
  var areaSelect=0;
  var subjectSelect=0;
  switch(area){
    case "areaA": 
    areaSelect+=2;
      break;
      case "areaB": 
      areaSelect+=1;
      break;
      case "areaC": 
      areaSelect+=0.5;
      break;

  };
  switch(subject){
    case "subject1": 
   subjectSelect+=2.5;
      break;
      case "subject2": 
      subjectSelect+=1.5;
      break;
      case "subject3": 
      subjectSelect+=1;
      break;

  }
  if(score1>10||score2>10||score3>10){
    alert("Điểm mỗi môn phải nhỏ hơn 10!!!");
  }
  else if(standardScore<1){
alert("Bạn phải nhập điểm chuẩn!!!");
  }
  else if(standardScore>30){
    alert("Điểm chuẩn phải nhỏ hơn 30");
  }
  else if((score1==0||score2==0||score3==0)||(score1+score2+score3+areaSelect+subjectSelect)<standardScore){
  result="Bạn đã rớt!!!, tổng điểm là: " + (score1+score2+score3+areaSelect+subjectSelect);

  }else if((score1+score2+score3+areaSelect+subjectSelect)>=standardScore){
    result="Bạn đã đậu, tổng điểm là: " + (score1+score2+score3+areaSelect+subjectSelect);
  }
  //output
  document.getElementById("showResult").innerHTML = result;
};
//Bai tap 2:
document.getElementById("bill").onclick = function(){
  //input
  var fullName = document.getElementById("fullName").value;
  var kw =document.getElementById("kw").value;
  //process
  var bill =0;
if(kw<51){
  bill+=kw*500;
}else if(kw<101){
  bill+=50*500+(kw-50)*650;
}else if(kw<201){
  bill+=50*500+50*650+(kw-100)*850;
}else if(kw<351){
  bill+=50*500+50*650+100*850+(kw-200)*1100;
}else{
  bill+=50*500+50*650+100*850+150*1100+(kw-350)*1300;
}
  //output
document.getElementById("showBill").innerHTML = "<p>Họ tên: "+fullName+" - Tiền điện: " +new Intl.NumberFormat("vn-VN").format(bill)+ " vnd";
}
