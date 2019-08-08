import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Link To='/'>고객센터:카카오톡 오픈채팅</Link>
            </footer>
        )
    }
}

export default Footer;