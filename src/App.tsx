import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Tags from './Views/Tags';
import Money from './Views/Money';
import Statistics from './Views/Statistics';
import NoMatch from './Views/NoMatch';
import styled from 'styled-components';
import {Tag} from './Views/Tag';


const AppWrapper=styled.div`
    color: #333;
`;

function App() {

    return (
        <AppWrapper>
        <Router>
            <Switch>
                <Route path="/tags" component={Tag}>
                    <Tags/>
                </Route>
                <Route exact path="/money">
                    <Money/>
                </Route>
                <Route path="/statistics" exact={true}>
                    <Statistics/>
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
