import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    primary = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
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

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        rounded,
        disabled,
    });

    return (
        <Comp className={classes} {...props}>
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;
