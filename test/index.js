
/* IMPORT */

import {describe} from 'fava';
import fromCharCodes from '../dist/index.js';

/* MAIN */

describe ( 'fromCharCodes', it => {

  it ( 'works', t => {

    const fixture = 'Hello \0😃!';
    const charCodes = new Array ( fixture.length ).fill ( 0 ).map ( ( _, index ) => fixture.charCodeAt ( index ) );

    t.is ( fromCharCodes ( charCodes ), fixture );

  });

});
