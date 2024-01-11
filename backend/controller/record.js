const record = require("../model/record");

exports.getAllRecords = async (req, res, next) => {
  try {
    const records = await record.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  };

  exports.getRecord = async (req, res, next) => {
    try {
      const record = await Record.findById(req.params.id);
      res.json(record);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.createRecord = async (req, res, next) => {
    try {
      const newRecord = new Record({
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      });
      await newRecord.save();
      res.json({ message: "Record added successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.updateRecord = async (req, res, next) => {
    try {
      await Record.findByIdAndUpdate(req.params.id, {
        $set: {
          name: req.body.name,
          position: req.body.position,
          level: req.body.level,
        },
      });
      res.json({ message: "Record updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.deleteRecord = async (req, res, next) => {
    try {
      await Record.findByIdAndDelete(req.params.id);
      res.json({ message: "Record deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

 