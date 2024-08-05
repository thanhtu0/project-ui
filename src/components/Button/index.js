import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    fill = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    plus = false,
    minus = false,
    size = false,
    iconSize = '2.8rem',
    iconMargin = '16px',
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listerner when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        fill,
        outline,
        text,
        rounded,
        disabled,
        plus,
        minus,
        size,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && (
                <span className={cx('icon')} style={{ fontSize: iconSize, marginRight: iconMargin }}>
                    {leftIcon}
                </span>
            )}
            <span className={cx('title')}>{children}</span>
            {rightIcon && (
                <span className={cx('icon')} style={{ fontSize: iconSize, marginRight: iconMargin }}>
                    {rightIcon}
                </span>
            )}
        </Comp>
    );
}

export default Button;
