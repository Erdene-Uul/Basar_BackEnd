const News = require("../models/News");

exports.getNews = async (req, res, next) => {
  try {
    const news = await News.find();

    res.status(200).json({
      success: true,
      data: news,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.getContent= async (req, res, next) => {
  try {
    const content = await Category.findById(req.params.id);

    if (!content) {
      return res.status(400).json({
        success: false,
        error: req.params.id + " ID-тэй мэдээ байхгүй.",
      });
    }

    res.status(200).json({
      success: true,
      data: content,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.createContent = async (req, res, next) => {
  console.log("data: ", req.body);

  try {
    const content = await News.create(req.body);

    res.status(200).json({
      success: true,
      data: content,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.updateContent = async (req, res, next) => {
  try {
    const content = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!content) {
      return res.status(400).json({
        success: false,
        error: req.params.id + " ID-тэй мэдээ байхгүй.",
      });
    }

    res.status(200).json({
      success: true,
      data: content,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.deleteContent = async (req, res, next) => {
  try {
    const content = await News.findByIdAndDelete(req.params.id);

    if (!content) {
      return res.status(400).json({
        success: false,
        error: req.params.id + " ID-тэй мэдээ байхгүй.",
      });
    }

    res.status(200).json({
      success: true,
      data: content,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};
