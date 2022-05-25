import React, {Component} from 'react';

class List extends Component{
    render(){
        return(
            <div>
                <h4>Things I need to do</h4>
                <ul>
                    <li>Learn React</li>
                    <li>Climb Mt Everest</li>
                    <li>Run a marathon</li>
                    <li>Feed the cat</li>
                </ul>
            </div>
        )
    }
}

export default List;