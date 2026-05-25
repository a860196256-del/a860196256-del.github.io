document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("graficaODS");

    if(canvas){

        new Chart(canvas, {
            type: 'bar',

            data: {
                labels: ['Reciclaje', 'Reforestación', 'Educación', 'Limpieza'],

                datasets: [{
                    label: 'Participación',

                    data: [12, 19, 8, 15],

                    backgroundColor: [
                        '#2e8b57',
                        '#66cdaa',
                        '#3cb371',
                        '#20b2aa'
                    ]
                }]
            }
        });
    }

});
