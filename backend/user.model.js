const mongoose = require('mongoose');

// User Model
// Represents a user in the application.

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - age
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user.
 *         age:
 *           type: number
 *           description: The age of the user.
 */

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;
