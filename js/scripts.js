let containerSmall = document.getElementById('container-small');
let content

for (square = 1; square <= 50; square++) {


    if(square % 3 == 0 && square % 5 == 0){
        console.log(square, 'fizzbuzz');

        content = 'fizzbuzz'

        
    }
    else if(square % 3 == 0){
        console.log(square, 'fizz');

        content = 'fizz'

    }
    else if(square % 5 == 0){
        console.log(square, 'buzz');

        content = 'buzz'

    }
    else{
        console.log(square);

        content = square;

    }

containerSmall.innerHTML += '<div class="box">' + (content) + '</div>';

}