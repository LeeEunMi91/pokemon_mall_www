import React from 'react';
import axios from 'axios';

import ItemBox from './ItemBox';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            hide: false
        };
    }

    componentDidMount() {
        this.indexItems();
        this.checkHide();
    }

    indexItems() {
        axios.get('http://localhost:8003/items/')
            .then((response) => {
                const items = response.data;
                this.setState({
                    items: items
                })
            });
    }

    checkHide() {
        const hideDate = new Date(localStorage.getItem('hideTill'));
        if (hideDate) {
            const now = new Date();
            if (now.getTime() < hideDate.getTime()) {
                this.setState({
                    hide: true
                });
            }
        }
    }

    hideForADay = () => {
        const todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + 1);
        localStorage.setItem('hideTill', todayDate);
        this.setState({
            hide: true
        });
    }

    render() {
        const items = this.state.items.map((item) => {
            return (
                <ItemBox key={item.id} item={item} />
            )
        });
        return (
            <div>
                <div id="container">
                    <div id="item-list-container">
                        {items}
                    </div>
                </div>
                {
                    !this.state.hide &&
                    <div className="modal">
                        <button onClick={this.hideForADay} className="btn_close">오늘하루열지않음</button>

                    </div>
                }
            </div>
        );
    }
}

export default Home;

