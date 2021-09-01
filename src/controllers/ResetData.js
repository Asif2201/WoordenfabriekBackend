import Model from '../models/model';

const UpdateModel = new Model('ResetData');

export const ResetData = async (req, res) => {
  try {
    let data = '';
    const params = '';
    data = await UpdateModel.Update(params);
    res.status(200).json({ ResetData: data });
  } catch (err) {
    res.status(200).json({ ResetData: err.stack });
  }
};
