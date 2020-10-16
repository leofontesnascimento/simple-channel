const { Router } = require('express');
const healthController = require('../../controllers/health');

const router = new Router({
  mergeParams: true
});

router.get(
  '/', 
  healthController.get
);

module.exports = router;