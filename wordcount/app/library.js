'use strict'

module.exports = {
   words: function(str){
      var word = str.replace(/\s\s*/g, ' ');
      var word = word.replace(/[\r\n]\s*/g, ' ');
      
      var wordsplit = word.split(" ");
      var obj = { };
      for (var i = 0, j = wordsplit.length; i < j; i++){
         if (obj[wordsplit[i]]){
            obj[wordsplit[i]]++;
         }
         else {
            obj[wordsplit[i]] = 1;
         } 
      }
      return obj;
   }
} 
