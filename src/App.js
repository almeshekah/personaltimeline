
import './App.css';
import Introduction from "./components/Introduction";
import Header from "./components/Header";
import EventsList from "./components/EventsList";


function App() {
  return (
    <div className="App">
      <Header/>
    <body id="page-top">
        <section class="page-section" id="about">
            <div class="container">
              <Introduction/>
              
                <div class="timeline">
                  <li class="timeline-inverted">
                   <EventsList/>
                  </li>
                  <li class="timeline-inverted">
                        <div class="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of My
                                <br />
                                Story!
                            </h4>
                        </div>
                  </li>

                </div> 





            </div>
        </section>
    </body>
    </div>
  );
}

export default App;
