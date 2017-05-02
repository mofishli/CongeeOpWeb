import React ,{ Component } from 'react';
import { render } from 'react-dom';
import { LeftMenu} from './LeftMenu';
import { RightPage} from './RightPage';
import './style.css'

export class Home extends Component {

    render() {
        return (
            <div className="background">
                <LeftMenu/>
                <RightPage/>
            </div>
        );
    }
}


render(<Home/>, document.getElementById('home'));
