import React from "react"
import * as styles from './index.module.scss';
import UIButton from "../UIButton";
import Draggable from "react-draggable";

type UIActionPanelPropsType = {
    title?: string;
    buttons: UIActionPanelButtonPropsType[];
};

type UIActionPanelButtonPropsType = {
    label: string;
}

const UIActionPanel = (props: UIActionPanelPropsType) => {
    return (
        <Draggable>
            <div style={{width: 'fit-content'}}>
                {props?.title ? <b>{props.title}</b> : <></>}
                <div className={styles['ui-action-panel']}>
                    {props.buttons.map(button => (
                        <UIButton variant="secondary" content={button.label}
                            classNames={styles['ui-action-panel-buttons']} />
                    ))}
                </div>
            </div>
        </Draggable>
    )
};

export default UIActionPanel;