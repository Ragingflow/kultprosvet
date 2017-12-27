function mas(m){
  var long=m[0].length;
  var newmas=[];
  for (var i=0;i<m.length;i++){
    if (m[i].length>long){
      long=m[i].length;
    }
    else{
      continue;
    }
  }
  for (i=0;i<m.length;i++){
    if (m[i].length>=long){
      newmas.push(m[i]);
    }
    else{
      continue;
    }
  }
  return newmas;
}
var m=['aba', 'aa','ad' , 'vsd', 'aba'];
mas(m);