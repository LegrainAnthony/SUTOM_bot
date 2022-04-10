require("dotenv").config();
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
   console.log('Félicitations, votre bot Discord a été correctement initialisé !');
});



const anthony = '846068548950032385';
const virgil = '625765617110351882';
const ruben = '318060804874305537';
const louise = '283013508231069696';
const florentin = '536198812289597441';

const days = Date.now();
let resultHours = GetHour(days);

function GetHour (date) {
   
   return dhm(date);
     
   }




const attente = [
   { name :'Anthony', score : 'n\'a pas encore joué'},
   { name :'Virgil', score : 'n\'a pas encore joué'},
   { name :'Ruben', score : 'n\'a pas encore joué'},
   { name :'Louise', score : 'n\'a pas encore joué'},
   { name :'Florentin', score : 'n\'a pas encore joué'}
];

const scores = [

];

client.on('messageCreate', message => {
   let str = message.content;
   if (str.includes('https://sutom.nocle.fr')) {
      let author = message.author.id
      let phrase =  message.content
      let result = Number(phrase.substring(10,11))
      switch(author){
         case anthony : 
         attente[0].score = result
         scores.push(attente[0])
         break; 
         case virgil :
            attente[1].score = result
            scores.push(attente[1])
            break; 
            case ruben : 
            attente[2].score = result
            scores.push(attente[2])
            break; 
            case louise : 
            attente[3].score = result
            scores.push(attente[3])
            break; 
            case florentin : 
            attente[4].score = result
            scores.push(attente[4])
            
            break;
         }
      }
      
      if (message.content === '!sutom') {
         setTimeout(() => {message.delete()},3000)
         
         const sortByMapped = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
         const byValue = (a,b) => a - b;
         const toScore = e => e.score;
         const byScore = sortByMapped(toScore,byValue);
         
         let result = [...scores].sort(byScore);
         
         let str = `Les scores SUTOM du jours :\n\n`
         
         for(let score of result) {
            
            str += `${score.name} : ${score.score}/6 \n`
         }
         
         
         message.reply(str)
      }
      
   });
   
   
   // Objectif du jours 
   
   // Reset les scores a minuit tous les jours
   
   function dhm(ms){
      getdays = Math.floor(ms / (24*60*60*1000));
      daysms=ms % (24*60*60*1000);
      hours = Math.floor((daysms)/(60*60*1000));
      hoursms=ms % (60*60*1000);
      return hours 
   }
  
   

   function resetDay (hour) {
      if(hour === 22) {
           scores.splice(1,5)
         }
      }



function callEveryHour() {
   setInterval(resetDay, 1000 * 60 * 60);
   console.log(resultHours);
 }
 
 var nextDate = new Date();
 if (nextDate.getMinutes() === 0) {
     callEveryHour()
 } else {
     nextDate.setHours(nextDate.getHours() + 1);
     nextDate.setMinutes(0);
     nextDate.setSeconds(0);
 
     var difference = nextDate - new Date();
     setTimeout(callEveryHour, difference);
 }

   // Enregistrer les scores à minuit dans un plus grand tableau et les calculer 
   
   // Heberger le bot


   client.login(process.env.BOT_TOKEN);