const Profile = require('../models/profile-model');

createProfile = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide something',
        })
    }

    const profile = new Profile(body)

    if (!profile) {
        return res.status(400).json({ success: false, error: err })
    }

    profile
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: profile._id,
                message: 'Profile created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Profile not created!',
            })
        })
}

getProfiles = async (req, res) => {
    await Profile.find({}, (err, profiles) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!profiles.length) {
            return res
                .status(404)
                .json({ success: false, error: `Profile not found` })
        }
        return res.status(200).json({ success: true, data: profiles, message: 'SUCCESS' })
    }).clone().catch(err => console.log(err))
}

module.exports = {
    createProfile,
    getProfiles
}