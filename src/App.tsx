import React from 'react';
import UIButton from './components/UIButton';
import UIPanel from './components/UIPanel';
import UITooltip from './components/UITooltip';
import UIActionPanel from './components/UIActionPanel';
import UITabbedPanel from './components/UITabbedPanel';

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
            <br />

            <UIPanel content='UI Panel without title. Some content goes here.' />
            <br />

            <UITooltip title='UI Tooltip' content='Tooltip content goes here.' />
            <br />

            <UIActionPanel title='Action bar 1'
                buttons={[
                    { label: '1' }, { label: '2' }, { label: '3' }, { label: '4' }, { label: '5' },
                    { label: '6' }, { label: '7' }, { label: '8' }, { label: '9' }, { label: '10' },
                    { label: '11' }, { label: '12' },
                ]} />

            <UITabbedPanel title='Configuration' tabs={
                [
                    { title: 'tab 1', content: <>MyContent</> },
                    { title: 'tab two', content: <>Some more content</> },
                    { title: 'Tab 3', content: <>Different content</> },
                    { title: 'myTab 4', content: <>Same content.</> }
                ]} />
        </>
    )
};

export default App;