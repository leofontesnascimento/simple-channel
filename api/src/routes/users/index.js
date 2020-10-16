const {
  Router
} = require('express');
const usersController = require('../../controllers/users');

const router = new Router({
  mergeParams: true
});

router.post(
  '/',
  usersController.post
);

module.exports = router;