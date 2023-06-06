const User = require('./user.model');

/**
 * Service responsible for user operations.
 * @class
 */
class UserService {
  /**
   * Create a new user.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  async createUser(req, res) {
    const { name, age } = req.body;
  
    try {
      const user = new User({ name, age });
      await user.save();
      console.log('User created successfully');
      res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: user
      });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({
        success: false,
        message: 'Error creating user',
        error: error.message
      });
    }
  }  

  /**
   * Update an existing user.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  async updateUser(req, res) {
    const { id } = req.params;
    const { name, age } = req.body;
  
    try {
      const user = await User.findByIdAndUpdate(id, { name, age }, { new: true });
      if (!user) {
        console.log('User not found');
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }
  
      console.log('User updated successfully');
      res.status(200).json({
        success: true,
        message: 'User updated successfully'
      });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating user',
        error: error.message
      });
    }
  }  

  /**
   * Delete a user.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  async deleteUser(req, res) {
    try {
      const userId = req.params.id;
      await User.findByIdAndDelete(userId);
      console.log('User deleted successfully');
      res.status(200).json({
        success: true,
        message: 'User deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({
        success: false,
        message: 'Error deleting user',
        error: error.message
      });
    }
  }

  /**
   * Get a user by ID.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  async getUser(req, res) {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      
      if (!user) {
        res.status(404).json({
          success: false,
          message: 'User not found'
        });
        return;
      }
      
      console.log('User retrieved successfully');
      
      res.status(200).json({
        success: true,
        message: 'User retrieved successfully',
        data: user
      });
    } catch (error) {
      console.error('Error retrieving user:', error);
      
      res.status(500).json({
        success: false,
        message: 'Error retrieving user',
        error: error.message
      });
    }
  }
  
  /**
   * Get all users.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      console.log('Users retrieved successfully');
      res.status(200).json({
        success: true,
        message: 'Users retrieved successfully',
        data: users
      });
    } catch (error) {
      console.error('Error retrieving users:', error);
      res.status(500).json({
        success: false,
        message: 'Error retrieving users',
        error: error.message
      });
    }
  }
}

module.exports = UserService;