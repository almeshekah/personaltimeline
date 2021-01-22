
import './App.css';
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import EventsList from "./components/EventsList";



function App() {
  return (
    <div className="App">
      <Header/>
    <body id="page-top">
        <section class="page-section" id="about">
            <div class="container">
                 <Introduction/>
                <ul class="timeline">
                    <EventsList/>
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
                </ul>
            </div>
        </section>
    </body>
    </div>
  );
}

export default App;
