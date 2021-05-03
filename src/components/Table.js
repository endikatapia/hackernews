import React from 'react';
import {Fecha} from  './Fecha.js';
import {Button} from  './Button.js';

const Table = ({list, onDismiss}) =>
    <div className="table">
        {list.map(item => {
            return <div key={item.objectID} className="table-row">

               <span style={{ width: '40%' }}>
                  <a href={item.url}>{item.title}</a>
               </span>
                <span style={{ width: '30%' }}>
                  {item.author}
                </span>

                <span style={{ width: '10%' }}>
                    <Fecha>
                        {item.created_at}
                    </Fecha>
                </span>

                <span style={{ width: '10%' }}>
                  <Button
                      onClick={() => onDismiss(item.objectID)}
                      className="button-inline"
                  >
                    Dismiss
                  </Button>
                </span>

            </div>;
        })}
    </div>;



export{Table};
