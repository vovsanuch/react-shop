import React, {useEffect} from 'react';

const Alert = (props) => {
    const {displayName = '', closeAlert = Function.prototype} = props

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)

        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line
    }, [displayName])

    return (
        <div id='toast-container'>
            <div className="toast">{displayName} добавлен в корзину</div>
        </div>
    );
};

export default Alert;