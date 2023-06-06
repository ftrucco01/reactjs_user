const express = require('express');
const UserService = require('./user.service');

const router = express.Router();
const userService = new UserService();

router.post('/', async (req, res) => {
  userService.createUser(req, res);
});

router.put('/:id', async (req, res) => {
  userService.updateUser(req, res);
});

router.delete('/:id', async (req, res) => {
  userService.deleteUser(req, res);
});

router.get('/:id', async (req, res) => {
  userService.getUser(req, res);
});

router.get('/', async (req, res) => {
  userService.getAllUsers(req, res);
});

module.exports = router;