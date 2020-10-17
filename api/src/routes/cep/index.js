const {
  Router
} = require('express');
const cepController = require('../../controllers/cep');

const router = new Router({
  mergeParams: true
});

router.get(
  '/',
  cepController.get
);

module.exports = router;