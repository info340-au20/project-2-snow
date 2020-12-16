// components
import React from 'react';
import CardList from './Card';
import { AlertMessage } from './AlertMessage';

export function Main({resorts, user, isLoading}) {
    let alert = resorts.length === 0;
    return (
      <div>
        <br></br>
        <div className="cards container">
          <AlertMessage alert={alert} isLoading={isLoading} />
          <CardList resorts={resorts} user={user} />
        </div>
        <br></br>
      </div>
    )
  }