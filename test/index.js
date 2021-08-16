
/* IMPORT */

const {describe} = require ( 'fava' );
const {default: fromCharCodes} = require ( '../dist' );

/* MAIN */

describe ( 'fromCharCodes', it => {

  it ( 'works', t => {

    const fixture = 'Hello \0😃!';
    const charCodes = new Array ( fixture.length ).fill ( 0 ).map ( ( _, index ) => fixture.charCodeAt ( index ) );

    t.is ( fromCharCodes ( charCodes ), fixture );

  });

});
