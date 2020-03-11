/*The Process Object , can read functionality, we can communicate with
 our shell eg process.argv(argument variable) gives path, process*/

//  console.log(process.argv);
process.stdout.write("Ask me a question");
process.stdin.on('data', function(answer){
    console.log(answer.toString().trim())
})