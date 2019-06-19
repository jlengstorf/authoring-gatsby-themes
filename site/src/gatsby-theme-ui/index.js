import merge from 'lodash.merge';
import { theme } from '@jlengstorf/gatsby-theme-events';

export default merge({}, theme, {
  colors: {
    text: 'blue'
  }
});
