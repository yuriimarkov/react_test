import React from 'react';

export default function Header(props){
    return (
        <header className="row block center">
        <div>
            <a href="#/">
                <h1>Cards</h1>
            </a>
        </div>
        <div>
            <a href="#/card">Card</a>
            <a href="#/singin">SingIn</a>
        </div>
        </header>
        );
}