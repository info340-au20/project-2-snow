import React from 'react';
import _ from 'lodash';
import {useParams} from 'react-router-dom'


export function InfoPageHeader() {
  return (
    <div className="header-img">
    <br></br>
    </div>
  )
}
export function InfoPage({resorts}) {
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
      <h2>{resort.resort_name}, {resort.state}
        < img className="pb-3" src={resort.img} alt={resort.resort_name} title={resort.resort_name}></img>
      </h2>
      <p>Summit: {resort.summit}'</p >
      <p>Base: {resort.base}'</p >
      <p>Vertical: {resort.vertical}'</p >
      <p>Lifts: {resort.lifts}</p >
      <p>Runs: {resort.runs}</p >
      <p>Acres: {resort.acres}</p >
      <p>Green Acres: {resort.green_acres}</p >
      <p>Blue Acres: {resort.blue_acres}</p >
      <p>Blue Acres: {resort.black_acres}</p >

    </div>
  );
}