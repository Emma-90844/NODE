/*Node js provides a default writable and readerble streams
process.stnout and process.standIn are the writable and readerble streams*/

const questions = [ 
    "What is your name?", 
    "What would you rather be doing?", 
    "What is your preferred programming language?" 
  ]; 

  //An arrow function that takes in an index and writes the questions out
  const ask = (i = 1 ) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    // process.stdout.write(` > `)
  }
//   Calling the ask() method
  ask();
  console.log(ask())

  const answers = [ ]; 

/*Listen to input by subscribimg to the data event on standard input 'data' event
all events are subscribed to by calling the on method*/
process.stdin.on("data", data => {

 });

process.stdin.on("data", data => { 
    answers.push(data.toString().trim()); 
    if (answers.length < questions.length) { 
        ask(answers.length); 
        } else { 
        process.exit(); 
        }
    }); 

// In the call back we push data to answer.

















