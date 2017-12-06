function century(year){
if (year<1 || year>2017){
	return false;
}
else{
	return Math.ceil(year / 100);
}
}
century(1270);