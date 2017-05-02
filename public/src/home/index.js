import React ,{ Component } from 'react';
import { render } from 'react-dom';
import { LeftMenu} from './LeftMenu';
import './style.css'

export class Home extends Component {


    render() {

        return (
            <div className="background">
                <LeftMenu/>
            </div>
        );
    }
}


render(<Home/>, document.getElementById('root'));
