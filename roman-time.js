function Rim2(x,Res){
    if (x>=50) {return Rim2(x-50,Res+'L')}
        else if (x>=40) {return Rim2(x-40,Res+'XL')}
            else if(x>=10) {return Rim2(x-10,Res+'X')}
	        else if(x==9) {return Rim2(x-9,Res+'IX')}
                    else if(x>=5) {return Rim2(x-5,Res+'V')}
                        else if(x>=1) {return Rim2(x-1,Res+'I')}
                            else return Res;
}

function correctTime(H,M){
    if (H>=0 && H<=24 && M>=0 && M<=59) {
        return true
    }
	    else return false}

function RomanTime (hour, minute){
    if (correctTime(hour,minute)) {
	    return Rim2(hour,'')+' : '+Rim2(minute,'')
    }
		else return 'Время указано не верно';
}
		
var hours = process.argv[2];
var minutes = process.argv[3];

console.log(RomanTime(hours,minutes));
