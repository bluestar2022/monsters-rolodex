import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css'

export const CardList = (props) => {
    //console.log(props);
    return (<div className='card-list'>
        {//props.children
        }
        {
          props.allmonsters.map(a_monster => <Card key={a_monster.id} m={a_monster}/>)
        }
        </div>);
}