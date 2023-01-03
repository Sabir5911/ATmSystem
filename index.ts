
// creating a greeting function
import inquirer from'inquirer'
import prompt from 'inquirer/lib/ui/prompt.js'
import figlet from'figlet'
import chalk from 'chalk';



 



figlet.defaults({ fontPath: "assets/fonts" });



function ready() {
    console.log(figlet.textSync('Happy New Year 2023'));


}

ready()






// 
let greeting= async ()=>{

    const person=await inquirer.prompt
    
    
    ([
        {
    
            type:'input',
            name:"greet",
            message:"What is your Name? "
        },
        {

        type:'input',
        name:"greeting",
        message:"Enter the Name of the person to wish new year ",
        default:"Unknow"

            }
        
        ])
     
    let greet=person.greeting

    console.log(chalk.blue.bgRed.bold(`Welcome To New Year 2023 To my Friend ${greet} Wishing you a very happy New Year! May your 2023 be filled with love & Success Ameen`))
    console.log(chalk.hex('#DEADED').bold(`From  ${person.greet}`))    
  
   
        
    }


    
  let repeat =async ()=>{

    do{

        await greeting()
        var  person=await inquirer.prompt([{

                   
            type:'input',
            name:"greet",
            message:"If you want to continue press y? "
        
        }])
        
 

   
   
    }
    while(person.greet=="Y"||person.greet=="y")
  
  }

   

repeat()