import Model from '../models/model';

const UpdateModel = new Model('StoreStudent');

export const UpdateStudent = async (req, res) => {
  try {
    const params = req.body;
    let data = '';
    data = await UpdateModel.Update(params);
    res.status(200).json({ UpdateStudent: data });
  } catch (err) {
    res.status(200).json({ UpdateStudent: err.stack });
  }
};
