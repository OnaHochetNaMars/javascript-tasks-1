function rim(x,Res){
    if (x>=50) {return rim(x-50,Res+'L')}
        else if (x>=40) {return rim(x-40,Res+'XL')}
            else if (x>=10) {return rim(x-10,Res+'X')}
                else if (x>=9) {return rim(x-9,Res+'IX')}
                    else if (x>=5) {return rim(x-5,Res+'V')}
                        else if (x>=4) {return rim(x-1,Res+'IV')}
                            else if (x>=1) {return rim(x-1,Res+'I')}
                                else return Res;
}

function correctTime(hours,minutes){
    return (hours>=0 && hours<=23 && minutes>=0 && minutes<=59)
    }

function romanTime(hours, minutes){
    if (correctTime(hours,minutes)) {
        return rim(hours,'')+' : '+rim(minutes,'')
    }
    else return 'Время указано не верно';
}
		
var hours = process.argv[2];
var minutes = process.argv[3];

console.log(romanTime(hours,minutes));
