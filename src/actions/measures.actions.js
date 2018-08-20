import { measuresConstants } from '../constants/measures.constants';
import * as schema from './schemas';
import { authHeader } from '../helpers/auth.header';
const JWT = authHeader();

export const getAllMeasures = () => ({ type: measuresConstants.MEASURES_GET_ALL, api: { headers: JWT, endpoint: '/measures' }, schema: schema.measureSchema });
