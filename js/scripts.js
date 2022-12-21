
 for (square = 1; square <= 20; square++) {

    if(square % 3 == 0 && square % 5 == 0){
        console.log(square, 'fizzbuzz');
    
    }
    else if(square % 3 == 0){
        console.log(square, 'fizz')
    }
    else if(square % 5 == 0){
        console.log(square, 'buzz')
    }
    else{
        console.log(square)
    }
}