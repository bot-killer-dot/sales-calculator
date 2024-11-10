function adjustArrayUntilCondition(array) {
    // hello:
    x = 0;
    q=1
    console.log(array.length)
       while (x !== 1) {
           for (let i = 0; array[i] != -1; i++) {
          //    console.log(x)
        
               x += array[i];
               if(q==1)
               {
                 console.log("Q1")
                  //   console.log(x+array[i+1])
                      
             if(array[i+1]!=-1){
               if (x+array[i+1] > 3000 ) {
                 
                   let excess = array[i+1] + x - 3000;
                   let adjustedValue = array[i+1] - excess;
                   let y=i+1
                   array[y] = adjustedValue;
                   array.splice(y + 1, 0, excess);
                   q=2;
                 //  continue hello
               //    break;
               }
             }
               }
                else if(q==2)
               {
                           console.log("Q2")
                      //       console.log(x+array[i+1])
                      
                 if(array[i+1]!=-1){
               if (x+array[i+1] > 4000 ) {
               // console.log(x)
                   let excess = array[i+1] + x - 4000;
                   let adjustedValue = array[i+1] - excess;
                   let y=i+1
                   array[y] = adjustedValue;
                   array.splice(y + 1, 0, excess);
                        q=3;
                  // x=1;
                   //break
               }
               }
           }
           else if(q==3)
           {
                           console.log("Q3")
                               
                         //      console.log(x+array[i+1])
             //x=1;
             
             if(array[i+1]!=-1){
               if (x+array[i+1] > 5000 ) {
               
          //   console.log("sasaasas")
               // console.log(x)
                   let excess = array[i+1] + x - 5000;
                   let adjustedValue = array[i+1] - excess;
                   let y=i+1
                   array[y] = adjustedValue;
                   array.splice(y + 1, 0, excess);
                   q=4;
           }
             }}
             else if(q==4)
           {
                           console.log("Q4")
                           console.log(x+array[i+1])
             //x=1;
             if(array[i+1]!=-1){
               if (x+array[i+1] > 6000 ) {
                  
              //  console.log("ggg")
                   let excess = array[i+1] + x - 6000;
                   let adjustedValue = array[i+1] - excess;
                   let y=i+1
                   array[y] = adjustedValue;
                   array.splice(y + 1, 0, excess);
               q=5;    
                  
            
           }
             }}
            
   //console.log(x)
              
           
   }
   x=1;
   return array;
   }
   }
   let x=0
   let q=0
   //let array = [2920, 120 ,1000, 1000, 1000, -1];
   
   adjustArrayUntilCondition(array);
   //console.log(array);
   