document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    const autoBet = (numbersInForms) => {
        numbersInForms.forEach(valor => {
            const seletor = `#n${valor}`;
            const num = document.querySelector(seletor);
            
            if (num) {
                num.click();
            } else {
                console.log(`Número ${valor} não encontrado.`);
            } 

        });
    };

    form.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        
        const inputForm = document.getElementById('numeros').value;
        const numbersInForms = inputForm.split(',').map(num => num.trim());


        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: (numbers) => {

                numbers.forEach(valor => {
                    const formattedValue = valor.toString().padStart(2, '0');
                    const seletor = `#n${formattedValue}`;
                    const num = document.querySelector(seletor);
                    
                    if (num) {
                        num.click();
                    } else {
                        console.log(`Número ${valor} não encontrado.`);
                    }
                });
                document.getElementById('colocarnocarrinho').click();
            },
            args: [numbersInForms]
        });
    });
});
