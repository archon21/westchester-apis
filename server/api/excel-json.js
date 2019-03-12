var router = require('express').Router();
var excelToJson = require('convert-excel-to-json');
var fs = require('fs');

router.post('/', async (req, res, next) => {
  const path = req.body.filepath;

  try {
    const result = await excelToJson({
      sourceFile: path
    });

    fs.unlinkSync(path);
    res.json({ error_code: 0, err_desc: null, data: result });
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;
