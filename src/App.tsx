import React from 'react';
import UIButton from './components/UIButton';

const App = () => {
    return (
        <>
            <>RPG Style UI</>
            <br />
            <UIButton variant='primary' content='Primary' />
            <UIButton variant='secondary' content='Secondary' />
            <UIButton variant='text' content='Text' />
        </>
    )
};

export default App;