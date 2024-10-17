import React from 'react';
import { ShimmerForAbout } from './ShimmerForAbout';



class CompanyClass extends React.Component{


    constructor(props){
      super(props);
    }
    
    render(){
        return this.props.companydetail.para1 ? (<>
           <div className='company-details'>
    
            <p>
                {this.props.companydetail.para1}
            </p>
             <p>
             {this.props.companydetail.para2}
         </p>
         </div>
         <div className='founder-details'>
             <h1>Know the Founders</h1>
         </div>
    </>
        ) : (<ShimmerForAbout/>);
    }
}
export default CompanyClass;