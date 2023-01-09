const express = require('express');

const ProfileCtrl = require('../controllers/profile-ctrl');

const router = express.Router();

router.post('/create-profile', ProfileCtrl.createProfile);
router.get('/get-profiles', ProfileCtrl.getProfiles);

module.exports = router;