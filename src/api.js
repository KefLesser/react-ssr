import fetch from "isomorphic-fetch";

export function fetchRequest( ) {
    console.log( "fetchRequest api" );
    return fetch( "http://ergast.com/api/f1/2018/circuits.json" )
        .then( res => res.json( ) )
        .then( res => res.MRData.CircuitTable.Circuits );
}
