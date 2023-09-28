const pokeApi = {}


/*fetch nos retorna um promisse. Quanto vamos fazer uma requisição HTTP, a resposta 
demora um determinado tempo
Promisse é uma promessa de um resultado

Um processamento assíncrono são processos realizados simultaneamente 
sem que um necessite que outro termine para ser executado, o que é útil 
para lidar com operações demoradas, como solicitações HTTP.
*/

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then(response => response.json())
        .then(jsonBody => jsonBody.results)
        .catch(error => console.log(error))

}

/* O objeto 'response' é a resposta da solicitação HTTP e contém informações
   como status, cabeçalhos e corpo da resposta. */

/*O fetch é iniciado, e a solicitação HTTP é feita de forma assíncrona.
O código continua a ser executado.

Se a solicitação for bem-sucedida, o .then é executado, e a resposta é impressa no console.

Se ocorrer um erro na solicitação, o .catch é executado, e o erro é impresso no console.

Independentemente do resultado da solicitação, o .finally é executado, e a mensagem 
"Requisição concluída" é impressa no console.*/


