export const ChooseColor = (zihum:number):string =>{
    if(zihum>12){
        return "red"
    }
    else if(zihum>6){
        return "yellow"
    }
    else{
        return "green"
    }
}