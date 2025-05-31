function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente.');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/fotocriancamas.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/fotojovemas.png')

            } else if (idade < 50) {
                img.setAttribute('src', 'img/fotoadultomas.png')

            } else {
                img.setAttribute('src', 'img/fotoidosomas.png')

            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
             if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/fotocriancafem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/fotojovemfem.png')

            } else if (idade < 50) {
                img.setAttribute('src', 'img/fotoadultofem.png')

            } else {
                img.setAttribute('src', 'img/fotoidosofem.png')

            }
        }
        res.style.textAlign = 'center'

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;

        res.appendChild(img)
    }
}
