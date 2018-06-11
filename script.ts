interface IConvert{
 //method declaration
 convertToRomans(number:string) : string;
}

    class conversion implements IConvert {
        //method implemention
         convertToRomans(number:string= "") : string{
            let result:string;
            const Romans = ["I", "II", "III", "IIII", "V", "VI", "VII", "VIII", "VIIII", "X"];
            
            for(let i = 0; i <Romans.length; i+=1){
              console.log(i+1 + " is "+Romans[i] + " in roman");
              }
              result = number;
              return result;
            }
    }
    let romans = new conversion();
    console.log(romans.convertToRomans())
