
import './App.css';
import {GetThreadList} from './GetThreadList';
import {MakeThread} from './makeThread';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {PostList} from './PostList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div className="App-header-left">
            <p>掲示板</p>
          </div>
          <div class="App-header-right">
            <a href="/thread/new" class="makeThreadButton">スレッドをたてる</a>
          </div>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <GetThreadList/>
            </Route>
            <Route path="/thread/new">
              <div class="makeThread-form">
                <MakeThread/>
                <a href="/" class="backToTop">topに戻る</a>
              </div>
            </Route>
            <Route path="/thread/:id">
              <PostList/>
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
