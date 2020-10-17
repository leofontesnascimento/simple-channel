const somethingWentWrong = {
  code: 700,
  message: 'Ops! Algo deu errado! Por favor, verifique se todos os campos foram preenchidos corretamente.',
}

const documentIdError = {
  code: 701,
  message: 'O CPF já está em uso! Por favor, insira outro número e continue seu cadastro.',
}

const cepError = {
  code: 702,
  message: 'CEP inválido! Por favor, verifique se o campo foi preenchido corretamente.',
}

module.exports = {
  documentIdError,
  somethingWentWrong,
  cepError,
}