import React from 'react';
import { TopNavbar } from './features/navbar/TopNavbar';
import { PostForm } from './features/post/PostForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TopNavbar />         
            </header>
            <div className="App-content">
                <br/>
                <PostForm />
            </div>
        </div>
    );
}

export default App;
