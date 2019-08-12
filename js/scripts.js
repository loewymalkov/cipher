console.log('erf');
$(document).ready(function() {
  console.log('here');
  var enterSentence = prompt('Please enter a sentence');
//  $('p').text(enterSentence);
  console.log('prompt');
  var firstLast = (function(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.charAt(-1).toUpperCase();
    console.log('function1');
  });
  var reverseLetter = (function(firstLast) {
    return (firstLast).reverse();
    console.log('function2');
  });
});
