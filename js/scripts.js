
for (let square = 0; square < 50; square++) {

    console.log(square);

    let containerSmall = document.getElementById('container-small');
    
    containerSmall.innerHTML += '<div class="box">' + (square + 1) + '</div>';

} 