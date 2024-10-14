export const Shimmer = () =>{
    const numberOfCards=12;
    return(
    
       <div className="shimmer-container">
                {Array.from({ length: numberOfCards }, () => {return (
        <div className="shimmer-cards"></div>
        )})}          
           
     </div>
    )
}