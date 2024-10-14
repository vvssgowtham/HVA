const { body } = require('express-validator');

exports.validate = (method) => {
  switch (method) {
    case 'getUser': {
      return [
        body('email', 'Invalid email').exists().isEmail(),
        body('password', 'Invalid password').exists().isLength({ min: 6 })
      ];
    }
  }
}