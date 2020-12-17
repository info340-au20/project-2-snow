// React
import React from 'react';
// components
import CardList from './Card';
import { AlertMessage } from './AlertMessage';

export function Main({resorts, user, dataLoading}) {
    let alert = resorts.length === 0;
    return (
      <div>
        <br></br>
        <div className="cards container">
          <AlertMessage alert={alert} dataLoading={dataLoading} />
          <CardList resorts={resorts} user={user} />
        </div>
        <br></br>
      </div>
    )
  }