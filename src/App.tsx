import React from 'react';
import UIButton from './components/UIButton';
import UIPanel from './components/UIPanel';

const App = () => {
    return (
        <>
            <>RPG Style UI</>
            <br />
            <UIButton variant='primary' content='Primary' />
            <UIButton variant='secondary' content='Secondary' />
            <UIButton variant='text' content='Text' />
            <br />
            <UIPanel title='UI Panel' content='UI Panel content goes here.' />
        </>
    )
};

export default App;