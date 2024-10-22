let index = 0;

function mostrarImagem(n) {
    const imagens = document.querySelectorAll('.imagens img');
    const totalImagens = imagens.length;

    // Se a imagem for maior que o número total, volta ao início
    if (n >= totalImagens) index = 0;
    // Se a imagem for menor que 0, vai para a última
    if (n < 0) index = totalImagens - 1;

    // Movimenta a galeria horizontalmente com base na imagem atual
    const translateX = -index * 100; 
    document.querySelector('.imagens').style.transform = `translateX(${translateX}%)`;
}

function mudarImagem(n) {
    index += n;
    mostrarImagem(index);
}

mostrarImagem(index);
/* 
setInterval(() => mudarImagem(1), 3000  ); */
