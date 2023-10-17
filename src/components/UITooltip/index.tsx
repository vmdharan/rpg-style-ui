import React from "react"
import * as styles from './index.module.scss';
import UIPanel from "../UIPanel";
import UIButton from "../UIButton";

type UITooltipPropsType = {
    title?: string;
    content: string;
};

const UITooltip = (props: UITooltipPropsType) => {

    return (
        <>
            <div className={styles['ui-tooltip']}>
                <UIPanel title={props.title} content={props.content} />
                <UIButton variant="primary" content="Close" />
            </div>
        </>
    )
};

export default UITooltip;