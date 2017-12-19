function tick(a){
  if (a>=10 && a<=Math.pow(10,6)){
    var s=a.toString();
    if (s.length%2 ===0){
      var left=0;
      var right=0;
      for (var i=0;i<s.length/2;i++){
        left+= Number(s[i]);
      }
      for (var j=s.length/2;j<s.length;j++){
        right+= Number(s[j]);
      }
      if(left===right){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }
}
tick(239017);