/**
 * PetController
 *
 * @description :: Server-side logic for managing pets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'new':function(req, res){
    res.view();
  },

  create:function(req,res,next){
    Pet.create(req.params.all(), function petCreated(err, pet){
      if(err) return next(err);

      // Save the pet, creating the new pet and associations in the join table
      pet.save(function(err) {});

      res.redirect('/user1');
    });
  }
};

