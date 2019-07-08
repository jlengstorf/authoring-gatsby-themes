import merge from 'lodash.merge';
import { theme } from '@jlengstorf/gatsby-theme-events';

console.log('hello?');

export default merge({}, theme, {
  colors: {
    text: 'blue'
  }
});
