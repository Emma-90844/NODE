var readline = require('readline');
var RL = readline.createInterface(process.stdin, process.stdout) ;
RL.question('What is your name', (name) => {
    // Util.log works same as console.log
    console.log(name);

    //Sets the prompt
    RL.setPrompt(`${name} how old are you?`);
    //Displays it
    RL.prompt();
    //On-line(on-line is an event) will listen to prompt() feed back(display)
    RL.on('line', (age) => {
        if(age < 18){
            console.log(`${name.trim()} because you are ${age} years old, you cannot proceed`)
            //to kill the prompt
            RL.close();
        } else {
            console.log(`${name.trim()} is great you are ${age} years old, and now you can enjoy our services`)
            RL.close() ;
        }
    });
})
