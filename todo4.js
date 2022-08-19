import chalk from 'chalk';
import readlineSync from 'readline-sync'
console.log(chalk.bold.blackBright("Olá! Seja bem vindo! Sou a AJUDA para organizar seus objetivos"))
console.log(chalk.blackBright("Responda as perguntas que irei estruturar as historias de usuario para sua aplicação"))
var quem = readlineSync.question(chalk.red('Como posso te chamar: '));
console.log("Muito Prazer " + quem + "!")
var persona = readlineSync.question(chalk.red('A historia que deseja contar, tera como papel principal quem: '));
    console.log("Legal!")
        var desejo = readlineSync.question(chalk.red('Pode me contar o que '+persona+' deseja?'));
        console.log("Entendi!")
        var demanda = readlineSync.question(chalk.red("E qual o objetivo a ser atingido com este desejo?"));
        console.log("Vou te apresentar a estrutura!")
        console.log('Como, ' + chalk.red(persona) + ' eu desejo' + ' ' + chalk.red(desejo) + ' para ' + chalk.red(demanda));
        
