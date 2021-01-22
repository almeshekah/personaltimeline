import data from "../data";
import '../App.css';
import Events from "./Events";
const EventsList  = ()=>{
    const eventsList = data.map((dt) => 
        <Events key = {dt.id} event={dt}/>);
        return (
            <div >
                <li class="timeline-inverted">
              

                {eventsList}
                </li>
                  
            </div>
        );
      
};

export default EventsList;