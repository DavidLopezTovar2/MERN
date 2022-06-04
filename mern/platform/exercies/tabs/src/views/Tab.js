import React, { useState } from 'react';

const Tab = ({content}) => {

    const showContent = (content) => {
        return(
            <p>
                Tab {content} content is showing here
            </p>
        )
    }

    return(
        <div>
            {showContent(content)}
        </div>
    )

}

export default Tab;