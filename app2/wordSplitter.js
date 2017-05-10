//delimiters are the space tab and the newline

const words = (sentence)=>{
         mwords =[] ;
         let counter= -1;
        let word="";
        sentence = sentence.replace("  "," ");

         for(let i=0 ; i < sentence.length; i++)         
              {            	   
                   

                   if(sentence[i] === ' ' || sentence[i] === '\t' || sentence[i] === '\n')                  	      
                     
                   {
                   	    counter += 1;
                   	    mwords[counter] = word;
                   	    word ="";
                   	    continue;
                   }
                   word += sentence[i] ;
                   
               }//loop ends

    
           mwords[++counter] = word;

           result = getJSON(mwords);

           

               return result;
           }


const getJSON=(arrWord)=>
{
      wordObject = {};

      for(let i=0; i < arrWord.length ; i++)
      	{
      	  wordObject [arrWord[i] ] = getWordCount(arrWord[i] , arrWord);
      	  //console.log(arrWord[i]);
        }
  
      return wordObject; 	
}
const getWordCount=(word,arra)=>
{
	 let count=0;
      
     for(let i=0 ; i < arra.length ; i++)
      	   if(word === arra[i])
      	   	 count += 1;
     return count;
}
exports.words= words;