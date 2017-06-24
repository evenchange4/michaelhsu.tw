/* eslint no-unused-expressions:0 */

import { injectGlobal } from 'styled-components';
import normalize from 'polished/lib/mixins/normalize';

injectGlobal`
  html {
    ${normalize()}

    font-size: 15px;
    line-height: 1.5;
  }
`;
