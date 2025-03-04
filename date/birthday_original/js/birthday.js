function quantoFaltaPara(m, d) {
    const dataAtual = new Date()
    dataAtual.setHours(0, 0, 0, 0)

    let anoAtual = dataAtual.getFullYear()

    let dataNiver = new Date(anoAtual, m - 1, d)

    const dataAtualTS = +dataAtual
    let dataNiverTS = +dataNiver

    if (dataNiverTS < dataAtualTS) {
        dataNiver.setFullYear(anoAtual + 1) // Corrigindo o erro aqui
        dataNiverTS = +dataNiver
    }

    const UM_DIA = 24 * 60 * 60 * 1000
    const diferenca = dataNiverTS - dataAtualTS
    return Math.floor(diferenca / UM_DIA) 
}
