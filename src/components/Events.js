import '../App.css';
const Events  = (props)=>{
    
    return (
       
        <ul className="timeline , pp" >
            <li className= "timeline-inverted">
               <div class="timeline-image"><img class="rounded-circle img-fluid" src={props.event.img} alt="" /></div>
               <div class="timeline-panel">
                  <div class="timeline-heading">
                      <h2>{props.event.date}</h2>
                      <h2 class="subheading">{props.event.title}</h2>
                   </div>  
                  <div class="timeline-body"><h2 class="text-muted">{props.event.details}</h2></div>
               </div>
            </li>
         </ul>
  
    );
};


export default Events;

