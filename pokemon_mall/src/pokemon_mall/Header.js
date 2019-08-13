import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { inject } from 'mobx-react';

@inject('authStore')
class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        this.indexCategories();
    }

    indexCategories() {
        Axios.get('http://localhost:8003/categories')
            .then((Response) => {
                const categories = Response.data;
                this.setState({
                    categories: categories
                }); 
            });
    }

    logOut = () => {
        this.props.authStore.deleteToken();
        this.props.history.push('/');
    }

    render() {
        const categories = this.state.categories.map((category) => {
            return (
                <div className="header-left">
                    <Link key={category.id} to={'/categories/' + category.id}>{category.title}</Link>
                </div>
                
            )
        });
        return (
            <header>
                <div className="header-left">
                    <Link to="/"><img src='https://pokemonkorea.co.kr/templates/default/style/img/sub_logo_top.png' alt='이미지'/></Link>
                </div>
                <div className="header-left">
                    <Link to="/all">전체보기</Link>
                </div>
                    {categories}
                <div className="header-right">
                    {localStorage.getItem('auth_token') ?
                        <Link to="/me/items"> My Items </Link> :
                        null
                    }
                    </div>
                <div className="header-right">
                    {localStorage.getItem('auth_token') ?
                        <Link to="/cart/items"> Cart </Link> :
                        null
                    }
                </div>
                <div className="header-right">
                    {localStorage.getItem('auth_token') ?
                        null :
                        <Link to="/join"> Join </Link>
                    }
                    </div>
                <div className="header-right">
                    {localStorage.getItem('auth_token')?
                        <Link to='' onClick={this.logOut}> Logout </Link> :
                        <Link to="/login"> Login </Link>
                    }
                </div>
            </header>
        );
    }
}

export default withRouter(Header);