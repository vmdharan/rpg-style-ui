import React from "react"
import * as styles from './index.module.scss';

type UIPanelPropsType = {
    title?: string;
    content: string;
};

const UIPanel = (props: UIPanelPropsType) => {

    return (
        <>
            <div className={styles['ui-panel']}>
                <div className={styles['ui-panel-title']}>{props.title}</div>
                <div>{props.content}</div>
            </div>
        </>
    )
};

export default UIPanel;