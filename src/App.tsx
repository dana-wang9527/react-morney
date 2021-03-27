import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Tags from './Views/Tags';
import Money from './Views/Money';
import Statistics from './Views/Statistics';
import NoMatch from './Views/NoMatch';
import styled from 'styled-components';
import Home from 'Views/Home';
import Echart from './Views/Echarts';


const AppWrapper = styled.div`
  color: #333;
  max-width: 520px;
  margin: 0 auto;

`;

function App() {

    return (
        <AppWrapper>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route exact path="/statistics">
                        <Statistics/>
                    </Route>
                    <Route exact path="/money">
                    <Money/>
                </Route>
                    <Route exact path="/tags">
                        <Tags/>
                    </Route>
                    <Route exact path="/echarts">
                        <Echart/>
                    </Route>
                    <Redirect exact from='/' to='/money'/>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
    );
}


export default App;
