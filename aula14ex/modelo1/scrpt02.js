function contar(){
    var ini = document.getElementById('txt1')
    let fim = document.getElementById('txt2')
    let pass = document.getElementById('txt3')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        window.alert('erro! faltam dados')
    } else {
        res.innerHTML = 'contando: <br>'
        let i  = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if ( p <= 0){
            window.alert('passo invalido! considerando passo 1')
            p = 1
        }
        if ( i < f){
            for (let c = i; c <= f; c += p ){
                res.innerHTML += `${c} \u{1F4A8}` //prestar atenção na forma de adicionar o emoji
            }
        } else {
            for ( c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F4A8}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}