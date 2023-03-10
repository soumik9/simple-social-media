// internal import
const About = require("../models/aboutSchema");

const get = async (req, res) => {
    try {
        // database query
        const datas = await About.find();
        res.send({ message: 'Successfully loaded data', success: true, data: datas[0] });
    } catch (error) {
        res.send({ error: error.message, message: 'Server side error', success: false });
    }
}

const update = async (req, res) => {
    try {

        const aboutDatas = await About.find();

        // checking length
        if (aboutDatas.length > 1) return res.send({ message: 'Already data is there!' });

        if (aboutDatas.length < 1) {
            const newData = new About(req.body);
            await newData.save();

            res.json({
                message: "About Created Successfully!",
                success: true,
            });
        } else {
            await About.findOneAndUpdate({ _id: req.body.dataId },
                req.body,
                { new: true });

            res.json({
                message: "About Updated Successfully!",
                success: true,
            });
        }
    } catch (error) {
        res.json({
            error: error.message,
            message: "Failed to create About",
            success: false,
        });
    }
}

module.exports = {
    get,
    update
}