const data = new Date()
//Exibe a data completa no formato padrão (Tue Mar 04 2025 15:30:45 GMT-0300 (Horário Padrão de Brasília), por exemplo).
console.log(data)
//Retorna o dia da semana (0 = Domingo, 1 = Segunda, ..., 6 = Sábado).
console.log(data.getDay())
//Retorna o dia do mês (de 1 a 31).
console.log(data.getDate())
//Retorna o mês (0 = Janeiro, 1 = Fevereiro, ..., 11 = Dezembro).
console.log(data.getMonth())
//Retorna o número de milissegundos desde 1º de janeiro de 1970 (Epoch time).
console.log(data.getTime())
//Retorna o ano completo (exemplo: 2025).
console.log(data.getFullYear())
//Retorna a hora local (de 0 a 23).
console.log(data.getHours())
//Retorna a hora em UTC (Tempo Universal Coordenado).
console.log(data.getUTCHours())
//Retorna os minutos (de 0 a 59).
console.log(data.getMinutes())
//Retorna os segundos (de 0 a 59).
console.log(data.getSeconds())
//Retorna os milissegundos (de 0 a 999).
console.log(data.getMilliseconds())
//Retorna a diferença de fuso horário em minutos entre o UTC e a hora local.
console.log(data.getTimezoneOffset())
//Define o dia do mês como 5 e retorna o timestamp atualizado.
console.log(data.setDate(5),data)
//Define o ano como 2025 e retorna o timestamp atualizado.
console.log(data.setFullYear(2025), data)

console.log("-======================================-")

//Retorna uma representação em string da data completa, incluindo data, hora e fuso horário local.
// Exemplo de saída: "Tue Mar 04 2025 14:30:00 GMT-0300 (Brasilia Standard Time)".
console.log(data.toString())
//Retorna apenas a parte da data (sem hora), formatada de forma legível.
// Exemplo: "Tue Mar 04 2025".
console.log(data.toDateString())
//Retorna a data no formato ISO 8601 (UTC), útil para armazenamento e intercâmbio de dados.
// Exemplo: "2025-03-04T17:30:00.000Z".
console.log(data.toISOString())
//Retorna apenas a parte da data (sem hora) no formato do idioma padrão do sistema.
// Exemplo (pt-BR): "04/03/2025".
console.log(data.toLocaleDateString())
//Retorna a data e a hora no formato local padrão.
// Exemplo (pt-BR): "04/03/2025 14:30:00".
console.log(data.toLocaleString())
//Retorna a data e a hora no formato dos EUA (mês/dia/ano).
// Exemplo: "3/4/2025, 2:30:00 PM".
console.log(data.toLocaleString("en-US"))
//Personaliza o formato da data em português, exibindo o dia, o nome do dia da semana e o nome do mês por extenso.
// Exemplo: "terça-feira, 4 de março".
console.log(data.toLocaleString("pt-BR", {month: "long", weekday: "long", day:"numeric"}))
//data.toLocaleString(...) → Converte a data armazenada na variável data para uma string formatada de acordo com o idioma e as opções fornecidas.
// "en-US" → Define o formato de data e hora para o inglês dos EUA.
// { hour12: false } → Garante que a hora seja exibida no formato de 24 horas (em vez do formato de 12 horas com AM/PM).
console.log(data.toLocaleString("en-US", {hour12: false}))
//Retorna a data no formato UTC (padrão internacional).
// Exemplo: "Tue, 04 Mar 2025 17:30:00 GMT".
console.log(data.toUTCString())