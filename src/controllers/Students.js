import Model from '../models/model';

const userModel = new Model('vwStudents');
const url = require('url');

export const Students = async (req, res) => {
  try {
    const queryObject = url.parse(req.url, true).query;
    let data = '';
    data = await userModel.select('*', queryObject);
    res.status(200).json({ vwUsers: data });
  } catch (err) {
    res.status(200).json({ vwUsers: err.stack });
  }
};
