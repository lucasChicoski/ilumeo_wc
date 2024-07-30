const {exec} = require("child_process")


// Executando o comando "yarn start"
exec('yarn start', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o comando: ${error}`);
      return;
    }
  
    console.log(`Saída do comando: ${stdout}`);
    console.log(`Erros durante a execução: ${stderr}`);
  });