/**
 * User1Controller
 *
 * @description :: Server-side logic for managing user1s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'new':function(req, res){
    res.view();
  },

  create:function(req,res,next){
    User1.create(req.params.all(), function user1Created(err, user1){
      if(err) return next(err);

      // Queue up a new pet to be added and a record to be created in the join table
      //user1.pets.add({ breed: 'labrador', type: 'dog', name: 'fido' });
      user1.pets.add(req.param('petId'));

      // Save the user, creating the new pet and associations in the join table
      user1.save(function(err) {});

      res.redirect('/user1/show/' + user1.id);
    });
  },

  show: function (req, res, next) {
    User1.findOne(req.param('id')).populateAll().exec(function foundUser1(err, user1) {
      if (err) return next(err);
      if (!user1) return next();

      res.view({
        user1: user1
      });
    });
  },

  index:function(req,res,next){
    User1.find(function foundUser1(err, user1s){
      if(err) return next(err);

      res.view({
        user1s: user1s
      });
    });
  }

};

