import React from 'react';

import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

const Skeletons = ({cards}) => {
    console.log(cards)
    
    return  Array(cards).fill(0).map((card, index) => 
        <div style={{width:'18rem', height:'450px'}}  className="card m-2 p-2 shadow-3" key={index}>               
            <div className="card-body">
            <Skeleton width={'100%'}  height={200} className="card-header" />             
            <Skeleton width={'100%'}  className="my-2" />             
            </div>
            <div className="card-text d-flex justify-content-center" >        
            <Skeleton width={120}className=""  />
            <Skeleton width={70} className="ms-5"/>           
            </div>
            <div className="card-text d-flex justify-content-center" >        
            <Skeleton width={120}className=""  />
            <Skeleton width={70} className="ms-5"/>           
            </div>
            <div className="card-text d-flex justify-content-center my-4" >        
            <Skeleton width={100}className="py-3"  />
            <Skeleton width={100} className="ms-5 py-3"/>           
            </div>         
        </div>
    ) 
        

};

export default Skeletons;