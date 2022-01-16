import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  /**
   * A kapott tömb rendezése a szűrőkifejezés alapján.
   * @param value {any[]} - a tömb
   * @param key {string} - az objektumkulcs, amely alapján rendez
   * @returns {any[]} - a kulcs alapján rendezett tömb
   */
  transform(value: [], key: string): any[] {
    // A KÖVETKEZŐ SORT TÁVOLÍTSD EL!!!

    /**
     * FELADAT!
     * Ellenőrzés: ha a value nem tömb vagy nincs megadva a key,
     * térj vissza a value változóval.
     */
    if ( !Array.isArray(value) || !key ) {
      return value;
    }


    /**
     * FELADAT!
     * Térj vissza a value.sort metódus eredményével!
     * 1. Ha az a[key] és a b[key] típusa is szám, térj vissza a különbségükkel.
     * 2. Ha nem számok, akkor mind a kettőt konvertáld string típusúra,
     *  azután alakítsd őket kisbetűssé.
     * 3. Térj vissza a két string localeCompare metódus által visszaadott
     *  összehasonlításának az eredményével.
     */
    return value.sort( ( a : any, b : any ) : number =>
      (typeof a[key] === 'number' && typeof b[key] === 'number')
        ?
      a[key] - b[key]
        :
      [ a[key], b[key] ]
        .map( s => s.toString().toLowerCase() )
        .reduce( (a: string, b:string) : number => a.localeCompare(b) )
    );
  }

}

