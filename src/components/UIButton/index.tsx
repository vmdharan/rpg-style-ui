import React from 'react';
import * as styles from './index.module.scss';

type UIButtonPropsType = {
    variant: UIButtonVariantType;
    content: string;
};

type UIButtonVariantType = 'primary' | 'secondary' | 'text';

const UIButton = (props: UIButtonPropsType) => {
    const btnStyle = (variant: string) => {
        if(variant == 'primary') {
            return styles['btn-primary'];
        } else if(variant == 'secondary') {
            return styles['btn-secondary'];
        } else {
            return styles['btn-text'];
        }
    };


    return (
        <button className={[styles['btn'], btnStyle(props.variant)].join(' ')}>{props.content}</button>
    )
};

export default UIButton;