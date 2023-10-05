// Code your solutions in this file
// Function to write thank you cards
function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
  }
  
  // Function to count down from a given number
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Example usage:
  const names = ["Alice", "Bob", "Charlie"];
  const eventName = "birthday";
  const countdownNumber = 5;
  
  const thankYouMessages = writeCards(names, eventName);
  console.log(thankYouMessages);
  
  countDown(countdownNumber);
  



