const removeSpace = (key,value)=>{
    let result = ''
    if(key ==='boshidan'){
        return value.trimStart();
    }else if(key =='oxiridan'){
        return value.trimEnd();
    }else if(key =='umumiy'){
        return value.trim()
    }
    value =' value o\'zgardi';
    return value
}

const removeSpace2 = (key,value) =>{
    let result = ''
    switch(key){
        case 'boshidan':
            result =  value.trimStart();
            break;
        case 'oxiridan':
            result = value.trimEnd();
            break;
        case 'hammasi':
            result = value.trim();
            break;
        default: result = 'salom test';
    }
    return result
}
// console.log(removeSpace2('test','   trim? salom   '));

const getMaxNumber = (num)=>{
    num = num.toString().split('');
    let maxNumber = num[0];
    for (let i = 0; i < num.length; i++) {
        if(maxNumber < num[i]){
            maxNumber = num[i];
        }        
    }
    return maxNumber
}

// console.log(getMaxNumber(4564654))

const loops = ()=>{
    let i = 0;
    while(i < 4){
        console.log("tartib raqami: ", i);
        i++;
    }
    // do{
    //     console.log("do while - tartib raqami: ", i);
    //     i++;
    // }while(i < 4)
}
loops()