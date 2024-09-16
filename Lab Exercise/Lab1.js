
// question 01 
function capitalize_first_letter(str){
     let words = str.split(' ');

     for (let i = 0 ; i < words.length; i++){
        let firstLetter = words[i].charAt(0).toUpperCase();

        let restOfWord = words[i].slice(1);

        words[i] = firstLetter + restOfWord;

     }
     return words.join(' ');

    }

    let input_string = "my name is hamed haghani";
    
    console.log(capitalize_first_letter(input_string))

// question 02(a)

    function find_the_largest(num){
      let largest = num[0] ;
      let count = num.length;
      for (let i = 1 ; i < count; i++){
         if (num[i] > largest){
            largest  = num[i]
         }

      }
      return largest;
   }

    console.log(find_the_largest([2134,444,555,1000]));

//question 02(b)

function max(a , b , c){
   let largest = a;
   if ( b > largest){
      largest = b;
   }
   if (c > largest){
      largest = c;
   }
   return largest;
}

 console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));


// question 03

function right(str){

   if (str.length >= 3){
      let lastThree =str.substring(str.length -3);
      let restOfWord = str.substring(0 , str.length-3)
       return lastThree + restOfWord;
      
   }else{
       return "The String length must be at least 3 !"
   }
   
}
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));


// question 04

function angle_type(degree){
   if ( degree === 90 ){
       return "Right angel";
   }else if(degree === 180 ) {
      return "Straight angel";
   }else if(degree > 0 && degree < 90 ){
       return "acute angel";
   }else if(degree > 90 && degree < 180){
       return "Obtuse angel";
   }else{
      return "Invalid angel"
   }
}

console.log(angle_type(47))
console.log(angle_type(90))
console.log(angle_type(145))
console.log(angle_type(180))
console.log(angle_type(540))
