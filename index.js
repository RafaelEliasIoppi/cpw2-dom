/**
 * Aplica a cor #BECCC3 no background do body da página
 */
function background(){

    /**
     * Tarefa/Issue  1
     *
     * Desenvolva uma função capaz de trocar a cor do fundo da página, ou seja,
     * alterar o background do body para a cor #BECCC3.
     */
    var body = document.body
    body.style.backgroundColor = "#BECCC3"

}

/**
 * Recupera os valores dos campos de texto cujo o id='fname' e id='lname'
 * e apresente o nome e o sobrenome de uma pessoa (separado por um espaço)
 * na div id='result'
 */
function show(){

     /**
      * Issue  2
      *
      * Recupera os valores dos campos de texto cujo o id='fname' e id='lname' e apresente o nome
      * e o sobrenome de uma pessoa (separado por um espaço) na div id='result'
      */
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var fullName = firstName + ' ' + lastName;

document.getElementById('result').textContent = 'Nome Completo: ' + fullName;

}

/**
 * Filtra o array de objetos (data) de acordo com os caracteres
 * digitados no campo de texto id='name'
 */
function search(){

    var data = [{name: "Rodrigo"}, {name: "Ricardo"}, {name: "Fabio"}, {name: "Alex"}, {name: "Sílvia"}];

    /**
     * Issue 3
     *
     * Utilizando o array (data) de objetos JSON acima, desenvolva um código que permita com que os
     * usuários procurem pelo nome de pessoas. Assim, quando o usuário digitar a letra 'r' no campo
     * de texto (id='name'), todas as pessoas que iniciarem com essa letra devem ser apresentados.
     * Consequentemente, quando for digitado 'ro' o sistema deve filtrar e apresentar na div com o
     * id='search' as pessoas cujo o nome inicia com 'ro'.
     *
     * Segue algumas funções que podem auxiliar na resolução da questão:
     *      substr - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
     *      length - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length
     *      toUpperCase - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
     *
     * Além disso, a função removeAllChildren abaixo também pode ser útil para o desenvolvimento da solução
     */


    function search() {
        // Limpar a div 'search' antes de exibir os resultados
        removeAllChildren('search');
    
        // Obter o texto digitado no campo de texto
        var searchText = document.getElementById('name').value.toLowerCase();
    
        // Array de nomes de exemplo
        var nomes = ["Rafael", "Roberto", "Rogério", "João", "Maria", "Rosana", "Ronaldo"];
    
        // Filtrar os nomes que começam com o texto digitado
        var resultados = nomes.filter(function(nome) {
            return nome.toLowerCase().startsWith(searchText);
        });
    
        // Exibir os resultados na div 'search'
        var searchDiv = document.getElementById('search');
        if (resultados.length > 0) {
            var ul = document.createElement('ul');
            resultados.forEach(function(resultado) {
                var li = document.createElement('li');
                li.textContent = resultado;
                ul.appendChild(li);
            });
            searchDiv.appendChild(ul);
        } else {
            searchDiv.textContent = 'Nenhum resultado encontrado.';
        }
    }
    
    function removeAllChildren(elementId) {
        var parent = document.getElementById(elementId);
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    
    // Chamar a função de pesquisa sempre que o usuário digitar no campo de texto
    document.getElementById('name').addEventListener('input', search);

}

/**
 * Remove todos os filhos de um nó
 *
 * @param {*} node Um objeto HTML Node
 */
function removeAllChildren(node){
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}
