const ELEMENTS = ['Rock!','Paper!','Scissors!']


let rock_btn = document.getElementById('rock_button');
let paper_btn = document.getElementById('paper_button');
let sc_btn = document.getElementById('scissors_button');
let result = document.getElementById('result')

function change_text(p_text, b_text) {
    let choice = document.getElementById('choice');
    choice.innerHTML = p_text;
    let bot_choice = document.getElementById('bot_choice');
    bot_choice.innerHTML=b_text
}

function random(){
    return ELEMENTS[Math.floor(Math.random()*ELEMENTS.length)]
}



rock_btn.addEventListener('click', function() {
    b_text = random();
    change_text('Rock!', b_text);
    if (b_text=='Scissors!'){
        result.innerHTML='You Won!'
    }
    else{
        result.innerHTML='Try again...'
    }
});

paper_btn.addEventListener('click', function() {
    b_text = random();
    change_text('Paper!', b_text);
    if (b_text=='Rock!'){
        result.innerHTML='You Won!'
    }
    else{
        result.innerHTML='Try again...'
    }
});

sc_btn.addEventListener('click', function() {
    b_text = random();
    change_text('Scissors!', b_text);
    if (b_text=='Paper!'){
        result.innerHTML='You Won!'
    }
    else{
        result.innerHTML='Try again...'
    }
});