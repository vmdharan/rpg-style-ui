import React from "react"
import * as styles from './index.module.scss';
import UIButton from "../UIButton";
import UIPanel from "../UIPanel";

type UIActionPanelPropsType = {
    title?: string;
    buttons: UIActionPanelButtonPropsType[];
};

type UIActionPanelButtonPropsType = {
    label: string;
}

const UIActionPanel = (props: UIActionPanelPropsType) => {
    const panelContent = (
        <>
            <div style={{ width: 'fit-content' }}>
                <div className={styles['ui-action-panel']}>
                    {props.buttons.map(button => (
                        <UIButton key={button.label} variant="secondary" content={button.label}
                            classNames={styles['ui-action-panel-buttons']} />
                    ))}
                </div>
            </div>
        </>
    );
    return (
        <>
            <UIPanel title={props?.title} content={panelContent} classNames={styles['ui-action-panel-base']} />
        </>
    )
};

export default UIActionPanel;