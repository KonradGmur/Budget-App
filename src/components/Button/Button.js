import React from 'react';

function Button({ type }) {
    const Component = (() => {
        switch (type) {
            case 'inline':
                return 'InlineButton'
            case 'regular':
                return 'RegularButton'

            default:
                return 'RegularButton'
        }
    })();

    return (
        <div></div>
    );
}

export default Button;