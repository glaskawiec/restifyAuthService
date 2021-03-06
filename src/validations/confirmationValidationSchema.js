const Joi = require('joi');

module.exports = Joi.object().keys({
  email: Joi.string().email({ minDomainAtoms: 2 }).required(),
  token: Joi.string().required(),
});
