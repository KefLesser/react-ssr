import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";

class Home extends React.Component {
    componentDidMount( ) {
        if ( this.props.circuits.length <= 0 ) {
            console.log( "fetchData" );
            this.props.fetchData( );
        }
    }

    render( ) {
        const { circuits } = this.props;

        return (
            <div className="wrapper">
                <h2>Server side rendered data.  NOTE: no requests in the browser</h2>
                <ul>
                    { circuits.map( ( { circuitId, circuitName, Location } ) => (
                        <li key={ circuitId } >{ circuitName } - { Location.locality }, { Location.country }</li>
                    ) ) }
                </ul>
            </div>
        );
    }
}
Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = ( state ) => ( {
    circuits: state.data,
} );

const mapDispatchToProps = {
    fetchData,
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
