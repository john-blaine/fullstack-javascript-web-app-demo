const db = require('../../../db/models');
const Gizmo = db.Gizmo;

const examplesService = {};

examplesService.listGizmos = async () => {
  const gizmos = await Gizmo.findAll();
  const plainGizmos = gizmos.map(gizmo => gizmo.get({ plain: true}));
  return plainGizmos;
};

examplesService.retrieveGizmo = async id => {
  const gizmo = await Gizmo.findByPk(id);
  console.log('This gizmo', gizmo);
  const plainGizmo = gizmo.get({ plain: true });
  return plainGizmo;
}

examplesService.createGizmo = async gizmo => {};

examplesService.updateGizmo = async gizmo => {}

examplesService.deleteGizmo = async id => {}

module.exports = examplesService;