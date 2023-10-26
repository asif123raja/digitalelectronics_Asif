document.getElementById("process").onclick = function(){
  let first = document.getElementById("input1");
  let second = document.getElementById("input2");
  let x=first.checked;
  let y=second.checked;
  let result1 = x ^ y;
  let result2= x && y;
  if(result1==false){
    result1="low";
  }
  else{
    result1="High";
  }
  if(result2==false){
    result2="low";
  }
  else{
    result2="High";
  }
  console.log("result is :", result1);
  console.log("result is :", result2);
  document.getElementById("outbox1").innerHTML= result1;
  document.getElementById("outbox2").innerHTML= result2;
}
document.getElementById("process2").onclick = function(){
  let first2 = document.getElementById("input3");
  let second2 = document.getElementById("input4");
  let third2 = document.getElementById("input5");
  let x=first2.checked;
  let y=second2.checked;
  let z=third2.checked;
  let result3 = (x ^ y) ^ z;
  let result4= ((x ^ y) && z) || (x && y);
  if(result3==false){
    result3="low";
  }
  else{
    result3="High";
  }
  if(result4==false){
    result4="low";
  }
  else{
    result4="High";
  }
  console.log("result is :", result3);
  console.log("result is :", result4);
  document.getElementById("outbox3").innerHTML= result3;
  document.getElementById("outbox4").innerHTML= result4;
}
document.getElementById("process3").onclick = function(){
  let first3 = document.getElementById("input6");
  let second3 = document.getElementById("input7");
  let x=first3.checked;
  let y=second3.checked;
  let result5 = x ^ y;
  let result6= x && !y;
  if(result5==false){
    result5="low";
  }
  else{
    result5="High";
  }
  if(result6==false){
    result6="low";
  }
  else{
    result6="High";
  }
  console.log("result is :", result5);
  console.log("result is :", result6);
  document.getElementById("outbox5").innerHTML= result5;
  document.getElementById("outbox6").innerHTML= result6;
}
document.getElementById("process4").onclick = function(){
  let first4 = document.getElementById("input8");
  let second4 = document.getElementById("input9");
  let third4 = document.getElementById("input10");
  let x=first4.checked;
  let y=second4.checked;
  let z=third4.checked;
  let result7 = (x ^ y) ^ z;
  let result8= ( !x && z)|| (!x && y) ||(y && z); 
  if(result7==true){
    result7="High";
  }
  else {
    result7="Low";
  }
  if(result8==true){
    result8="High";
  }
  else{
    result8="Low";
  }
  console.log("result is :", result7);
  console.log("result is :", result8);
  document.getElementById("outbox7").innerHTML= result7;
  document.getElementById("outbox8").innerHTML= result8;
}
document.getElementById("process5").onclick = function(){
  let fir = document.getElementById("input11");
  let sec = document.getElementById("input12");
  let x=fir.checked;
  let y=sec.checked;
  let res1 = !x && !y;
  let res2= !x && y;
  let res3= x && !y;
  let res4= x && y;
  if(res1==true){
    res1="High";
  }
  else {
    res1="Low";
  }
  if(res2==true){
    res2="High";
  }
  else{
    res2="Low";
  }
  if(res3==true){
    res3="High";
  }
  else{
    res3="Low";
  }
  if(res4==true){
    res4="High";
  }
  else{
    res4="Low";
  }
  console.log("result1 is :", res1);
  console.log("result2 is :", res2);
  console.log("result3 is :", res3);
  console.log("result4 is :", res4);
  document.getElementById("outbox9").innerHTML= res1;
  document.getElementById("outbox10").innerHTML= res2;
  document.getElementById("outbox11").innerHTML= res3;
  document.getElementById("outbox12").innerHTML= res4;
}
document.getElementById("process6").onclick = function(){
  let fir = document.getElementById("input13");
  let sec = document.getElementById("input14");
  let thi = document.getElementById("input15");
  let x=fir.checked;
  let y=sec.checked;
  let z=thi.checked;
  let res1 = !x && !y && !z;
  let res2= !x && !y && z;
  let res3= !x && y && !z;
  let res4= !x && y && z;
  let res5= x && !y && !z;
  let res6= x && !y && z;
  let res7= x && y && !z;
  let res8= x && y && z;
  if(res1==true){
    res1="High";
  }
  else {
    res1="Low";
  }
  if(res2==true){
    res2="High";
  }
  else{
    res2="Low";
  }
  if(res3==true){
    res3="High";
  }
  else{
    res3="Low";
  }
  if(res4==true){
    res4="High";
  }
  else{
    res4="Low";
  }
  if(res5==true){
    res5="High";
  }
  else {
    res5="Low";
  }
  if(res6==true){
    res6="High";
  }
  else{
    res6="Low";
  }
  if(res7==true){
    res7="High";
  }
  else{
    res7="Low";
  }
  if(res8==true){
    res8="High";
  }
  else{
    res8="Low";
  }
  console.log("result1 is :", res1);
  console.log("result2 is :", res2);
  console.log("result3 is :", res3);
  console.log("result4 is :", res4);
  console.log("result5 is :", res5);
  console.log("result6 is :", res6);
  console.log("result7 is :", res7);
  console.log("result8 is :", res8);
  document.getElementById("outbox13").innerHTML= res1;
  document.getElementById("outbox14").innerHTML= res2;
  document.getElementById("outbox15").innerHTML= res3;
  document.getElementById("outbox16").innerHTML= res4;
  document.getElementById("outbox17").innerHTML= res5;
  document.getElementById("outbox18").innerHTML= res6;
  document.getElementById("outbox19").innerHTML= res7;
  document.getElementById("outbox20").innerHTML= res8;
}
document.getElementById("process7").onclick = function(){
  let first = document.getElementById("input16");
  let second = document.getElementById("input17");
  let third = document.getElementById("input18");


  let x=first.checked;
  let y=second.checked;
  let z=third.checked;
  let result1 = 0;
  if(z==true){
    result1=y;
  }
  else{
    result1=x;
  }
  if(result1==true){
    result1="HIGH";
  }
  else{
    result1="LOW";
  }
  console.log("result is :", result1);
  document.getElementById("outbox21").innerHTML= result1;
}
document.getElementById("process8").onclick = function(){
  let first = document.getElementById("input19");
  let second = document.getElementById("input20");
  let third = document.getElementById("input21");
  let fourth= document.getElementById("input22");
  let fifth = document.getElementById("input23");
  let sixth = document.getElementById("input100");


  let x=first.checked;
  let y=second.checked;
  let a=third.checked;
  let b=fourth.checked;
  let s1=fifth.checked;
  let s2=sixth.checked;
  let result1 = 0;
  if(s1==true && s2==true){
    result1=b;
  }
  else if(s1==true && s2==false){
    result1=a;
  }
  else if(s1==false && s2==true){
    result1=y;
  }
  else if(s1==false && s2== false){
    result1=x;
  }
  if(result1==true){
    result1="HIGH";
  }
  else if(result1==false){
    result1="LOW";
  }
  console.log("result is :", result1);
  document.getElementById("outbox22").innerHTML= result1;
}
document.getElementById("process9").onclick = function(){
  let first = document.getElementById("input24");
  let second = document.getElementById("input25");
  let third = document.getElementById("input26");
  let fourth= document.getElementById("input27");
  let fifth = document.getElementById("input28");
  let sixth = document.getElementById("input29");
  let seventh = document.getElementById("input30");
  let eighth = document.getElementById("input31");
  let select1 = document.getElementById("input32");
  let select2= document.getElementById("input33");
  let select3 = document.getElementById("input34");
  


  let i1=first.checked;
  let i2=second.checked;
  let i3=third.checked;
  let i4=fourth.checked;
  let i5=first.checked;
  let i6=sixth.checked;
  let i7=seventh.checked;
  let i8=eighth.checked;
  let s1=select1.checked;
  let s2=select2.checked;
  let s3=select3.checked;
  let result1 = 0;
  if(s1==true && s2==true && s3==true){
    result1=i8;
  }
  else if(s1==true && s2==true && s3==false){
    result1=i7;
  }
  else if(s1==true && s2==false && s3==true){
    result1=i6;
  }
  else if(s1==true && s2== false && s3==false){
    result1=i5;
  }
  else if(s1==false && s2==true && s3==true){
    result1=i4;
  }
  else if(s1==false && s2==true&& s3==false){
    result1=i3;
  }
  else if(s1==false && s2== false && s3==true){
    result1=i2;
  }
  else if(s1==false && s2== false && s3==false){
    result1=i1;
  }
  if(result1==true){
    result1="HIGH";
  }
  else if(result1==false){
    result1="LOW";
  }
  console.log("result is :", result1);
  document.getElementById("outbox23").innerHTML= result1;
}
document.getElementById("process10").onclick = function(){
  let first = document.getElementById("input35");
  let second = document.getElementById("input36");
  let inp=first.checked;
  let st=second.checked;
  let result1 = !st && inp;
  let result2= st && inp;
  if(result1==false){
    result1="low";
  }
  else{
    result1="High";
  }
  if(result2==false){
    result2="low";
  }
  else{
    result2="High";
  }
  console.log("result is :", result1);
  console.log("result is :", result2);
  document.getElementById("outbox24").innerHTML= result2;
  document.getElementById("outbox25").innerHTML= result1;
}
document.getElementById("process11").onclick = function(){
  let first = document.getElementById("input37");
  let second = document.getElementById("input39");
  let third = document.getElementById("input38");
  let d=first.checked;
  let s0=second.checked;
  let s1=third.checked;
  let result1 = !s1 && !s0 && d;
  let result2= !s1 && s0 && d;
  let result3 = s1 && !s0 && d;
  let result4= s1 && s0 && d;
  if(result1==false){
    result1="low";
  }
  else{
    result1="High";
  }
  if(result2==false){
    result2="low";
  }
  else{
    result2="High";
  }
  if(result3==false){
    result3="low";
  }
  else{
    result3="High";
  }
  if(result4==false){
    result4="low";
  }
  else{
    result4="High";
  }
  console.log("result is :", result1);
  console.log("result is :", result2);
  console.log("result is :", result3);
  console.log("result is :", result4);
  document.getElementById("outbox26").innerHTML= result4;
  document.getElementById("outbox27").innerHTML= result3;
  document.getElementById("outbox28").innerHTML= result2;
  document.getElementById("outbox29").innerHTML= result1;
}
document.getElementById("process12").onclick = function(){
  let first = document.getElementById("input40");
  let second = document.getElementById("input43");
  let third = document.getElementById("input42");
  let fourth = document.getElementById("input41");
  let d=first.checked;
  let s0=second.checked;
  let s1=third.checked;
  let s2=fourth.checked;
  let result1 =!s2 && !s1 && !s0 && d;
  let result2=!s2 && !s1 && s0 && d;
  let result3 =!s2 && s1 && !s0 && d;
  let result4=!s2 && s1 && s0 && d;
  let result5 =s2 && !s1 && !s0 && d;
  let result6= s2 && !s1 && s0 && d;
  let result7 = s1 && s2 && !s0 && d;
  let result8= s1 && s0 && s2&& d;
  if(result1==false){
    result1="low";
  }
  else{
    result1="High";
  }
  if(result2==false){
    result2="low";
  }
  else{
    result2="High";
  }
  if(result3==false){
    result3="low";
  }
  else{
    result3="High";
  }
  if(result4==false){
    result4="low";
  }
  else{
    result4="High";
  }
  if(result5==false){
    result5="low";
  }
  else{
    result5="High";
  }
  if(result6==false){
    result6="low";
  }
  else{
    result6="High";
  }
  if(result7==false){
    result7="low";
  }
  else{
    result7="High";
  }
  if(result8==false){
    result8="low";
  }
  else{
    result8="High";
  }
  console.log("result is :", result1);
  console.log("result is :", result2);
  console.log("result is :", result3);
  console.log("result is :", result4);
  console.log("result is :", result5);
  console.log("result is :", result6);
  console.log("result is :", result7);
  console.log("result is :", result8);
  document.getElementById("outbox30").innerHTML= result8;
  document.getElementById("outbox31").innerHTML= result7;
  document.getElementById("outbox32").innerHTML= result6;
  document.getElementById("outbox33").innerHTML= result5;
  document.getElementById("outbox34").innerHTML= result4;
  document.getElementById("outbox35").innerHTML= result3;
  document.getElementById("outbox36").innerHTML= result2;
  document.getElementById("outbox37").innerHTML= result1;

}