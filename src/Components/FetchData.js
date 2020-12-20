import Axios from "axios";
import React, { Component } from "react";

import './Styles.scss';
export default class FetchData extends React.Component {

    state = {
        loading: true,
        people: []
    };

    async componentDidMount() {
        const url = "https://stg-svc.worldvision.ca/donorservice/api/profile/0c5cff858031433189bb6b392175e3ee/donor/children/en/NamedPrivate?svc=45507";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.sponsoredChildrenDisplay, loading: false});
       
    

    }
    render() {
        if(this.state.loading) {
            return <div>loading...</div>
        }

        if(!this.state.people.length) {
            return <div>didn't get a person</div>
        }
        return ( 
            <div>
                
                {this.state.people.map(person => (
                <div className="card-container">
                <div className="info">
                <div key={person.firstName}>
                <div>Name:{person.firstName}</div>
                <div>Gender:{person.gender}</div>
                <div>Country:{person.country}</div>
                <div>Favorite Subject:{person.favoriteSubject}</div>
                <div className="image-container">
                <img src={person.imageLatestUrl}/>
                </div>

                </div>
                </div>
               
                    
                   </div> 
                    
                ))}
                
                </div>
    );
    }
}
