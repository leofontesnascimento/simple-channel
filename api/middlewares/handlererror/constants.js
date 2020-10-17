const somethingWentWrong = {
  code: 700,
  message: 'Ops! Algo deu errado!',
}

const documentIdError = {
  code: 701,
  message: 'O CPF já está em uso!',
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