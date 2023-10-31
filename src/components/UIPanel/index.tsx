import React, { ReactNode } from "react"
import * as styles from './index.module.scss';
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

type UIPosition = {
    x: number,
    y: number,
    positionIndex: number
};

type UIComponent = {
    positionIndex: number,
    component: ReactNode
};

type UIPanelPropsType = {
    title?: string;
    content: ReactNode;
    classNames?: string;
    position: UIPosition;
    update: (newX: number, newY: number, position: UIPosition) => void;
};

const UIPanel = (props: UIPanelPropsType) => {
    return (
        <>
            <Draggable handle='.handle' 
                onStop={(e: DraggableEvent, data: DraggableData) => props.update(data.x, data.y, props.position)} 
                defaultPosition={{x: props.position.x, y: props.position.y}}>
                <div className={[props?.classNames, styles['ui-panel']].join(' ')}>
                    <div className={['handle', styles['ui-panel-title-bar']].join(' ')}>
                        <div className={styles['ui-panel-title']}>{props.title}</div>
                        <div className={styles['ui-panel-title-btn-close']}>X</div>
                    </div>
                    <div>{props.content}</div>
                </div>
            </Draggable>
        </>
    )
};

export default UIPanel;

export type { UIPosition, UIComponent };