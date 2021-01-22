import data from "../data";
import '../App.css';
import Events from "./Events";
const EventsList  = ()=>{
    const eventsList = data.map((dt) => 
        <Events key = {dt.id} event={dt}/>);
        return (
            <div class="timeline-inverted">
                <div class="timeline-image">

                {eventsList}

                </div>
                  
            </div>
        );
      
};

export default EventsList;