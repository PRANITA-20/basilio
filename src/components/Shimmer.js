export const Shimmer = () =>{
    const numberOfCards=12;
    let  count=0;
    return(
    
       <div className="shimmer-container">
                {Array.from({ length: numberOfCards }, () => {return (
        <div key={count++} className="shimmer-cards"></div>
        )})}          
           
     </div>
    )
}