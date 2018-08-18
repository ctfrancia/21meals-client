import { measuresConstants } from '../constants/measures.constants';
import * as schema from './schemas';

export const getAllMeasures = () => ({
  type: measuresConstants.MEASURES_GET_ALL,
  api: { endpoint: '/measures' },
  schema: schema.measureSchema
});
