const btnA = document.getElementById('a');
const btnB = document.getElementById('b');
const btnC = document.getElementById('c');
const forwBtn = document.getElementById('forwardBtn');
const backwBtn = document.getElementById('backwardBtn');

const titleP = document.getElementById('titleP');
const textP = document.getElementById('textP');

btnA.addEventListener('click',() => {
    titleP.innerText = 'O Interacionismo';
    textP.innerText = 'O interacionismo é uma concepção que prioriza a análise dos reflexos do mundo exterior no interior dos indivíduos, pela interação deles com a realidade. Trata-se, portanto, de uma visão sociocultural.';
    btnA.style.backgroundColor = 'hsl(235, 60%, 45%)';
    btnB.style.backgroundColor = '';
    btnC.style.backgroundColor = '';
})  
btnB.addEventListener('click',() => {
    titleP.innerText = 'Interdisciplinaridade';
    textP.innerText = 'Fundamenta-se no esforço para superar a visão fragmentada do conhecimento. Embora seja aprendido individualmente, o saber é uma totalidade. O todo é formado pelas partes, mas não implica apenas a soma delas; é maior que elas. Assim, a natureza complexa do próprio ato educativo exige explicação e compreensão pluridisciplinares.';
    btnA.style.backgroundColor = '';
    btnB.style.backgroundColor = 'hsl(235, 60%, 45%)';
    btnC.style.backgroundColor = '';
}) 
btnC.addEventListener('click',() => {
    titleP.innerText = 'Pensamento complexo';
    textP.innerText = 'A proposta para o modelo de pensamento complexo é a visão de equilíbrio entre o pensamento linear e o sistêmico. Ela pode se traduzir pelo equilíbrio entre os seguintes pontos: razão e intuição, indivíduo e grupo, conteúdos e processos, conhecimento e imaginação, quantidade e qualidade, avaliação e aprendizagem. Completa-se com a ideia da interdisciplinaridade. Está pautado no princípio da dialógica, que compreende ideias contrárias sem excluí-las. “É o conhecimento voltado para um saber que nos permite reconhecer as incertezas de sua origem e seus limites lógicos”. (Edgar Morin).';
    btnA.style.backgroundColor = '';
    btnB.style.backgroundColor = '';
    btnC.style.backgroundColor = 'hsl(235, 60%, 45%)';
}) 