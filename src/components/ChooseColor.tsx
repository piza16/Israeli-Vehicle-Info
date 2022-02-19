export const ChooseColor = (zihum:number):string =>{
    if(zihum>12){
        return "red"
    }
    else if(zihum>9){
        return "orange"
    }
    else if(zihum>5){
        return "yellow"
    }
    else{
        return "green"
    }
}