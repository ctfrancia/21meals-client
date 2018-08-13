import {mockConstants} from '../constants/mock.constants';

export const getChuck = () => ({
  type: mockConstants.CHUCK_GET,
  api: {
    endpoint: '/jokes/random'
  }
})