/**
 * Userrole.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	autoCreateAt:false,
	autoUpdateAt:false,
  attributes: {
  	userId:{
  		type:"integer",
  		model:"User"
  	},
  	
  	roleId:{
  		type:"integer",
  		model:"Role"
  	}
  }
};

