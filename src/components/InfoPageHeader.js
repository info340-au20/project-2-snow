import React from 'react';
import _ from 'lodash';
import {useParams} from 'react-router-dom'


export function InfoPageHeader() {
  return (
    <div className="header-img">
      <div className="header-name">
        <h1>Ski Resort Detail</h1>
      </div>
    </div>
  )
}

export function InfoPage({resorts}) {
  let resortName = '';
  const urlParams = useParams();
  resortName = urlParams.resort_name;

  // find the resort with the correct name in data
  let resort =  _.find(resorts, {resort_name: resortName});

  if(!resort) return <h2>No resort specified</h2> //if unspecified

  return (
    <div className="detailResort">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="image-container">
                        < img className="img-fluid" src={resort.img} alt={resort.resort_name} title={resort.resort_name}></img>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="text-container">
                        <h2>{resort.resort_name}, {resort.state}</h2>
                        <p className="text">Summit: {resort.summit}'</p >
                        <p className="text">Base: {resort.base}'</p >
                        <p className="text">Vertical: {resort.vertical}'</p >
                        <p className="text">Lifts: {resort.lifts}</p >
                        <p className="text">Runs: {resort.runs}</p >
                        <p className="text">Acres: {resort.acres}</p >
                        <p className="green">Green Acres: {resort.green_acres} {"  "} ({resort.green_percent*100}%) </p >
                        <p className="blue">Blue Acres: {resort.blue_acres} {"  "} ({resort.blue_percent*100}%)</p >
                        <p className="black">Blue Acres: {resort.black_acres} {"  "} ({resort.black_percent*100}%)</p >
                    </div> 
                </div> 
            </div>
        </div>
    </div>
  );
}