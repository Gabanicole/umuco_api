const express = require ('express')
const router = express.Router();
const {getSites,createSite, getSite,updateSite,deleteSite} = require("../controllers/siteController")

router.route( "/").get (getSites).post (createSite);

router.route( "/:id").get (getSite).put (updateSite).delete (deleteSite);


//get site information
router.get('/:id/edit', (req, res) => {
 User.findById(req.params.id).then((user) => {
   if (user.permissions.manageUsers) {
     res.render('users/edit', { user });
   } else {
     res.redirect('/users');
   }
 });
});



module.exports = router;