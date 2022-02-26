const Commercial = require("../models/Commercial");

exports.getCommercials = async (req, res, next) => {
  try {
    const commercials = await Commercial.find();

    res.status(200).json({
      success: true,
      data: commercials,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.getCommercial= async (req, res, next) => {
  try {
    const commercial = await Commercial.findById(req.params.id);

    if (!commercial) {
      return res.status(400).json({
        success: false,
        error: req.params.id + " ID-тэй зар байхгүй.",
      });
    }

    res.status(200).json({
      success: true,
      data: commercial,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.createCommercial = async (req, res, next) => {
  console.log("data: ", req.body);

  try {
    const commercial = await Commercial.create(req.body);

    res.status(200).json({
      success: true,
      data: commercial,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.updateCommercial = async (req, res, next) => {
  try {
    const commercial = await Commercial.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!commercial) {
      return res.status(400).json({
        success: false,
        error: req.params.id + " ID-тэй зар байхгүй.",
      });
    }

    res.status(200).json({
      success: true,
      data: commercial,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.deleteCommercial = async (req, res, next) => {
  try {
    const commercial = await Commercial.findByIdAndDelete(req.params.id);

    if (!commercial) {
      return res.status(400).json({
        success: false,
        error: req.params.id + " ID-тэй зар байхгүй.",
      });
    }

    res.status(200).json({
      success: true,
      data: commercial,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};
