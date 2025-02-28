import React, { Component } from 'react';
import Calculator from './components/Calculator';

class App extends Component {
    render() {
        return (
            <div className='bg-[#141414] min-h-screen text-white flex item-center justify-center'>
                <Calculator/>
            </div>
        );
    }
}

export default App;