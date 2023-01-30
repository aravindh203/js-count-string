function countString(string,letter){
	var count=0;
	for(i=0;i<string.length;i++){
		if(string[i].toLocaleLowerCase()==letter.toLocaleLowerCase()){
			++count;
		}
	}
	console.log(`The letter ${letter} is ${count} times in ${string}`);
}

countString("Aravindh","V")