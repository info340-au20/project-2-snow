import React from 'react';
import _ from 'lodash';
import {useParams} from 'react-router-dom'

//import SAMPLE_DOGS from './dogs.json'; //a sample list of dogs (model)

export function InfoPageHeader({resorts}) {
  let resortName = ''; //REPLACE THIS WITH CORRECT VALUE
  const urlParams = useParams();
  resortName = urlParams.resort_name;
  console.log(resortName);

  //pretend we loaded external data    
  let resort =  _.find(resorts, {resort_name: resortName}); //find pet in data
  console.log(resort);

  if(!resort) return <h2>No resort specified</h2> //if unspecified

  return (
    <div>
      <h2>{resort.resort_name}</h2>
    </div>
  );
}