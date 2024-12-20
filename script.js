document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        
        let inputForm = document.getElementById('numeros').value;
        // Adiciona chaves ao redor da string e substitui aspas simples por aspas duplas
        inputForm = `{${inputForm.replace(/'/g, '"')}}`;
        
        let jogos;
        try {
            jogos = JSON.parse(inputForm);
        } catch (e) {
            console.error('Erro ao analisar JSON:', e);
            return;
        }

        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: (jogos) => {
                function sleep(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                (async () => {
                    for (const numeros of Object.values(jogos)) {
                        for (const valor of numeros) {
                            const formattedValue = valor.toString().padStart(2, '0');
                            const seletor = `#n${formattedValue}`;
                            const num = document.querySelector(seletor);

                            if (num) {
                                await sleep(100);
                                num.click();
                            } else {
                                console.log(`Número ${valor} não encontrado.`);
                            }
                        }

                        // Clica no botão para adicionar o jogo ao carrinho
                        const btnCarrinho = document.getElementById('colocarnocarrinho');
                        if (btnCarrinho) {
                            btnCarrinho.click();
                        } else {
                            console.log('Botão "colocar no carrinho" não encontrado.');
                        }
                    }
                })();
            },
            args: [jogos]
        });
    });
});
