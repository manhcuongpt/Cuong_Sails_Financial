/**
 * PetController
 *
 * @description :: Server-side logic for managing pets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'new':function(req,res,next){
    Pet.findOne(req.param('owners'), function foundPet(err, pet){
      if(err) return next(err);
      if(!pet) return next();

      res.view({
        pet: pet
      });
    });
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

