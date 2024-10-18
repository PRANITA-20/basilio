export const Shimmer = () =>{
    const numberOfCards=12;
    let  count=0;
    return(
    
       <div className="shimmer-container space-between margin-auto max-width-1320 flex">
                {Array.from({ length: numberOfCards }, () => {return (
        <div key={count++} className="shimmer-cards shimmer-bg"></div>
        )})}          
           
     </div>
    )
}