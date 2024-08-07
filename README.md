# Extensão de Navegador para Preenchimento Automático

Esta é uma extensão de navegador desenvolvida para automatizar o preenchimento de formulários com números em uma página web e adicionar esses números a um carrinho de compras.

## Funcionalidades

- Permite ao usuário inserir uma lista de números no formato JSON.
- Preenche automaticamente os campos de entrada na página com os números fornecidos.
- Clica no botão "Adicionar ao carrinho" após preencher os campos.

## Instalação

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/lucasgommes/auto_bet.git

2. **Carregue a Extensão no Navegador:**
    Abra o Chrome e vá para chrome://extensions/.
    Ative o Modo de desenvolvedor (Developer mode).
    Clique em Carregar sem compactação (Load unpacked).
    Selecione a pasta onde o código da extensão está localizado.

## Uso
  **1. Digite os Números no Formulário:**
  
     Acesse a extensão clicando no ícone na barra de ferramentas do navegador.
     Insira os números no formato JSON no campo de entrada.
       **Exemplo:**  'Jogo 1': [2, 3, 4, 6, 8, 9, 10, 13, 15, 16, 17, 18, 20, 21, 25], 
                     'Jogo 2': [2, 3, 4, 5, 6, 10, 12, 15, 16, 18, 19, 21, 23, 24, 25]
                    
  **2. Verifique a Página Web:**
      A extensão preencherá automaticamente os campos correspondentes e clicará no botão "Adicionar ao carrinho" na página ativa.
