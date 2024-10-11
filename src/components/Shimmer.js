export const Shimmer = () =>{
    const numberOfCards=12;
    return(
    
       <div class="shimmer-container">
                {Array.from({ length: numberOfCards }, () => {return (
        <div class="shimmer-cards"></div>
        )})}          
           
     </div>
    )
}