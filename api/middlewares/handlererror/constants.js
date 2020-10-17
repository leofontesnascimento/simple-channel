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
  message: 'CEP inválido!',
}

module.exports = {
  documentIdError,
  somethingWentWrong,
  cepError,
}