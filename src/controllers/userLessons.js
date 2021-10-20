import Model from '../models/model';

const url = require('url');

const userModel = new Model('vwStudentLessons');

export const LessonsPage = async (req, res) => {
  try {
    const queryObject = url.parse(req.url, true).query;

    let data = '';
    data = await userModel.select('*', queryObject);

    res.status(200).json({ vwUsers: data });
  } catch (err) {
    res.status(200).json({ vwUsers: err.stack });
  }
};
