import Model from '../models/model';

const lessonModel = new Model('vwLessonLevelsSummary');
const url = require('url');

export const LevelsPage = async (req, res) => {
  try {
    const queryObject = url.parse(req.url, true).query;
    let data = '';

    data = await lessonModel.select('*', queryObject);
    res.status(200).json({ vwUsers: data });
  } catch (err) {
    res.status(200).json({ vwUsers: err.stack });
  }
};
