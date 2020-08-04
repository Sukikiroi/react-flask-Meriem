import React, { Component } from 'react';
import List from './List'
import Soso from './soso'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Comparaison from './Comparaison';
import Classification  from './Classification';


import Prediction from './Prediction';

class App extends Component {
  
  render () {
    
    return (
      
      <Router>
        <div className="App"style={{height: '800px',backgroundSize: "cover",backgroundImage: `url(${"https://lh3.googleusercontent.com/proxy/L2RXaWf9p-wmU8a-RtahNHOfevThsv3mtSIBhiUzeJf47DK5QvF6UQwR1IZBoun2vPRCTsgtNc-LK-InVXJPvRgB_UP0qv-xw0AhV0UqgPR9mNClSOwsJmtQASKcQgAVKinOLBFv0ZL8Ym2RGP1yD6Sh6DzuuS10uDzG"})`} } >
        <div className="container">
          <Route exact path="/" component={List} />
            <Route exact path="/Comparaison" component={Comparaison} />
            <Route exact path="/Classification" component={List} />
            <Route exact path="/Prediction" component={Prediction} />
          </div>
         
        </div>
      </Router>
    );
  }
}

export default App;
