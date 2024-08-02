import React from 'react';
import classNames from 'classnames/bind';
import styles from './TitleContent.module.scss';

const cx = classNames.bind(styles);

const TitleContent = ({ title }) => {
    return <div className={cx('title-content')}>{title}</div>;
};

export default TitleContent;
