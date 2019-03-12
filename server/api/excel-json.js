var router = require('express').Router();
var excelToJson = require('convert-excel-to-json');

router.post('/', async (req, res, next) => {
  const path  = req.body.filepath
  try {
    const result = excelToJson({
      sourceFile: path
    });
    console.log(result);
    res.json({ error_code: 0, err_desc: null, data: result });
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;
