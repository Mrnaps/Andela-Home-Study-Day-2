'use strict'

module.exports = {
   reverseString: function(str){
      if (str === ""){
         return null;
      }
      else {
          var newString = "";
         for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
         }
    
         if (str != newString){
            return  newString;
         }
         else{
            return true;
         }
      }
   }
} 
