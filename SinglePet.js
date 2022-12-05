import React from 'react';

const SinglePet = () => <div className="single-pet"></div>;
{props.pet}

export default SinglePet;


const ListComponent = (props) => { 
  
  return ( 
    
    <div> 
    
      <h1>{props.text}</h1> 
      
    </div> 
    
  ); 
  
}; 

export {ListComponent};
