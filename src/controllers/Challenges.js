import Model from '../models/model';

const ChallengeModel = new Model('vwChallenges');

export const Challenges = async (req, res) => {
  try {
    let { LevelID } = req.query;
    let data = '';
    if (LevelID) {
      LevelID = `'${LevelID}'`;
      data = await ChallengeModel.select('challenge_x_levelid, levelid, challengeid, challengedescription, challengetitle, challengesubtitle, challengetypeid, helptext', 'levelid', LevelID);
    } else {
      data = await ChallengeModel.select('challenge_x_levelid, levelid, challengeid, challengedescription, challengetitle, challengesubtitle, challengetypeid, helptext');
    }
    res.status(200).json({ Challenge: data });
  } catch (err) {
    res.status(200).json({ Challenge: err.stack });
  }
};
