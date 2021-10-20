import Model from '../models/model';

const UpdateModel = new Model('StoreClass');

export const UpdateClass = async (req, res) => {
  try {
    const params = req.body;
    let data = '';
    data = await UpdateModel.Update(params);
    res.status(200).json({ UpdateClass: data });
  } catch (err) {
    res.status(200).json({ UpdateClass: err.stack });
  }
};
