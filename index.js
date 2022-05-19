const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased() {
  const finalFinalArray = tutorials.map(function(sentence) {
  const wordArray = sentence.split(' ')
    const finalArray = wordArray.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
    })
    const newFinalArray = finalArray.join(" ")
    return newFinalArray
  })
  console.log("hi", finalFinalArray)
  return finalFinalArray
}
// titleCased(tutorials)

// function titleCased(array){
//   const finalArray = array.map(function(sentance) {
//     const wordArray = sentance.split(' ')
//     const sliceArray = wordArray.map(function(word){
//       return word.charAt(0).toUpperCase() + word.slice(1)
//     })
//     const joinArray = sliceArray.join(' ')
//     return joinArray
//   })
//   console.log(finalArray)
//   return finalArray
// }

// titleCased(tutorials)

// const titleCased = () => {
//   const strings = tutorials.map( (tutorial) => tutorial.split(' '))
//   console.log(strings)
//   // const capitalizedTokens = strings.map(
//   //   (token) => token.charAt(0).toUpperCase() 
//   //   );
//   //   // console.log(capitalizedTokens)
//   return tutorials
// }



// const titleCased2 = () => {
//   return tutorials.map((line) => {
//     const tokens = line.split(" ");
//     console.log(tokens)
//     const capitalizedTokens = tokens.map(
//       (token) => token.charAt(0).toUpperCase() + token.slice(1)
//     );
//     const response = capitalizedTokens.join(" ");
//     return response;
//   });
// };


