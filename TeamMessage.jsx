import React from 'react';
import {communicate, useMessageContext } from 'stream-chat-react';

const TeamMessage = () => {
    const { handleOpenThread, message } = useMessageContext();

    return (
        <communicate
            message={{ ...message, user: {}}}
            // handleOpenThread={}
        />
    )
}

export default TeamMessage