import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataHelper from '../DataHelper';


class Header extends React.Component {

    helper = new DataHelper();
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
        axios.get(DataHelper.baseURL() + '/categorys/')
            .then((response) => {
                const categories = response.data;
                this.setState({
                    categories: categories
                });
            });
    }

    render() {
        const categories = this.state.categories.map((category) => {
            return (
                <Link key={category.id} to={'/categories/' + category.id}>{category.title}</Link>
            )
        });
        return (
            <header>
                <Link to="/">Pokemon_mall</Link>
                {categories}
                <div className="header-right">
                    {
                            <Link to="/login">Login</Link>
                    }
                </div>
            </header>
        );
    }
}

export default Header;