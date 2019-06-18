import merge from 'lodash.merge';
import { theme } from 'gatsby-theme-events';

export default merge({}, theme, {
  colors: {
    text: 'blue'
  }
});
