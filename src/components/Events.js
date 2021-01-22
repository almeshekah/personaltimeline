import '../App.css';
const Events  = (props)=>{
    
    return (
        <div >
            <li>
               <div >
               <div ><h4>{props.event.date}</h4></div>
                  <div class="timeline-heading">
                      
                      <h4 class="subheading">{props.event.title}</h4>
                   </div>  
                  <div class="timeline-body"><p class="text-muted">{props.event.details}</p></div>
               </div>
            </li>
       </div>
  
    );
};


export default Events;



