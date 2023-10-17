import React from "react"
import * as styles from './index.module.scss';
import UIPanel from "../UIPanel";
import UIButton from "../UIButton";

type UIActionPanelPropsType = {
    title?: string;
    buttons: UIActionPanelButtonPropsType[];
};

type UIActionPanelButtonPropsType = {
    label: string;
}

const UIActionPanel = (props: UIActionPanelPropsType) => {
    return (
        <>
            {props?.title ? <b>{props.title}</b> : <></>}
            <div className={styles['ui-action-panel']}>
                {props.buttons.map(button => (
                    <UIButton variant="secondary" content={button.label} 
                        classNames={styles['ui-action-panel-buttons']} />
                ))}
            </div>
        </>
    )
};

export default UIActionPanel;