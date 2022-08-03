# Cartão de Crédito Válido

## Índice

* [1. Introdução](#1-Introdução)
* [2. Definição e objetivo do projeto]
* [3. Desenvolvimento]
* [4. Interface do usuário]
* [5. Design da experiência do usuário]
***

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumo do projeto

Este projeto foi desenvolvido para ser um aplicativo da Web que permite ao usuário validar o número de um cartão de crédito. O projeto foi pensado com foco em atender a necessidade de bancos que precisam disponibizar um experiência segura ao cliente para verificação de autenticidade e desbloqueio de um novo cartão recebido. Foi desenvolvido e tem o intuito de simplificar e facilitar a vida do usuário.

## 3. Desenvolimento

 O protótipo página foi rascunhado apenas para criar uma perspectiva do que seria o projeto.

O planejamento de execução deste projeto foi construído a partir de pequenos passos ilustrados com auxílio do Trello.

O objetivo era destrinchar as etapas em pequenas aplicações a serem alcançadas aos poucos.

O propósito final: produzir um produto claro e de fácil manuseio passando por todos os objetivos de aprendizagem.

A primeira etapa de desenvolvimento foi feita através do HTML e CSS se utilizando, por exemplo, de aplicação de semântica, uso de seletores, box model, display e o resultado foi uma página simples e com boa usabilidade.

A partir da criação do layout da página, a próxima etapa executada foi iniciada pelo arquivo de nome INDEX.JS ao qual é responsável por receber todos os seletores de DOM, gerenciadores de eventos de DOM e manipulação dinâmica de DOM.

A etapa seguinte foi executada a partir do arquivo VALIDATION.JS que é responsável por armazenar as aplicações do algoritmo de Luhn, criação de laços, condicionais, parâmetros e hospeda também as duas funções de teste. No decorrer das etapas foram sendo criadas as interações entre os arquivos e feito a utilização de módulo.

As atualizações do projeto ao GitHub foram feitas através dos comandos 'git' pelo terminal.

### Interface do usuário 

A interface permite ao usuário:

 Inserir o número do cartão que deseja validar.
 Constatar se o resultado é válido ou não.
 Constatar que todos os dígitos do número do cartão, exceto os últimos 4 caracteres foram ocultados.

### Design da experiência do usuário

O design da experiência do usuário foi estruturada com ideias de objetividade. Por isso, o layout da página tem o intuito de entregar apenas informações diretas e uma estética clean (limpa) para que o usuário consiga navegar com agilidade e ter um retorno rápido e prático.
