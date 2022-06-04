import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'
// import Colors from './Colors';
import Tab from './Tab';

const Home = () => {

    const [tabs, setTabs] = useState(["1","2","3"]);
    const [content, setContent] = useState('');

    const printTab = (tab) => {
        setContent(tab);
    }

    return(
        <div>
            <div>
                {tabs?.map((tab,idx) =>(
                    <button 
                        key={idx}
                        onClick={() => printTab(tab)}>
                            Tab {tab}
                    </button>
                ))}
            </div>
            <div>
                <Tab content={content}></Tab>
            </div>
        </div>
    )
}

export default Home;