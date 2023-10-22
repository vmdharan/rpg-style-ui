import React, { ReactNode } from "react"
import * as styles from './index.module.scss';
import Draggable from "react-draggable";

type UIPanelPropsType = {
    title?: string;
    content: ReactNode;
    classNames?: string;
};

const UIPanel = (props: UIPanelPropsType) => {
    return (
        <>
            <Draggable handle='.handle'>
                <div className={[props?.classNames, styles['ui-panel']].join(' ')}>
                    <div className={['handle', styles['ui-panel-title']].join(' ')}>{props.title}</div>
                    <div>{props.content}</div>
                </div>
            </Draggable>
        </>
    )
};

export default UIPanel;