
/* HELPERS */

const MAX_ARGUMENTS_LENGTH = 8192; // Above this threshold we risk a "call stack size exceeded" error

/* MAIN */

const fromCharCodes = ( charCodes: ArrayLike<number> | Uint8Array | Uint16Array | Uint32Array ): string => {

  if ( !Array.isArray ( charCodes ) ) return fromCharCodes ( Array.from ( charCodes ) );

  const {length} = charCodes;

  if ( length <= MAX_ARGUMENTS_LENGTH ) { // Small-enough length, no need to use chunks

    return String.fromCharCode.apply ( String, charCodes );

  } else { // Large-enough length, encoding in chunks

    const chunks: string[] = [];

    for ( let ci = 0, i = 0; i < length; ci++ ) {

      const slice = charCodes.slice ( i, i += MAX_ARGUMENTS_LENGTH );

      chunks[ci] = String.fromCharCode.apply ( String, slice );

    }

    return chunks.join ( '' );

  }

};

/* EXPORT */

export default fromCharCodes;
