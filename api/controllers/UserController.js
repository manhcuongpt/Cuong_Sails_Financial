/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find:function(req,res){
		User.find()
			.exec(function(err,users){
				if(err){
					return res.json(err);
				}
				return res.json(users);
			})
	}
};

