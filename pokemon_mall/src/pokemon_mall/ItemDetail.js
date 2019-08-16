import React from 'react';
import axios from 'axios';
import { inject } from 'mobx-react';
import { withRouter, BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Menu from './Menu';
import MenuAa from './ManuAa';

@inject('authStore', 'itemStore')
class ItemDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: null
        };
    }

    componentDidMount() {
        this.getItem();
    }

    getItem = () => {
        const itemId = this.props.match.params.itemId;
        axios.get('http://localhost:8003/items/' + itemId)
            .then((response) => {
                const item = response.data;
                this.setState({
                    item: item
                })
            });

    }

    purchase = () => {
        const itemId = this.state.item.id;
        axios.post(
            'http://localhost:8003/items/' + itemId + '/purchase/',
            {},
            {
                headers: {
                    'Authorization': localStorage.getItem('auth_token')
                }
            }
        ).then((response) => {
            this.props.history.push('/me/items');
        });

    }

    addtocart = () => {
        const { itemStore } = this.props;
        const item = this.state.item;
        itemStore.addItemToCart(item);
        this.props.history.push('/cart/items');
    }

    render() {
        const item = this.state.item;
        const title = item ? item.title : '';
        const category = item ? item.category.title : '';
        const price = item ? item.price : '';
        const desc = item ? item.description : '';
        const image = item ? item.image : null;
        return (
            <div id="container">
                <div className="item-image-container">
                    <img src={image} alt="" />
                    <p className='title'>
                        <p>{title}</p>
                        <hr />
                        <table>
                            <td>
                                <tr>
                                    가격
                                </tr>
                                <tr>
                                    구매제한
                                </tr>
                                <tr>
                                    배송비
                                </tr>
                            </td>
                            <td>
                                <tr>
                                    {price} P
                                </tr>
                                <tr>
                                    최소 1개
                                </tr>
                                <tr>
                                    2,500 원
                                </tr>
                            </td>
                        </table>
                        <hr />
                    </p>
                    <div className='button green header-left' onClick={this.purchase}>
                        <div className='text'>
                            <div className='N_Pay header-left'>N</div>
                            <div className=''> Pay 구매</div>
                        </div>
                    </div>
                    <div className='button white header-left' onClick={this.addtocart}>
                        <div className='text'>
                            <div className=''> 장바구니 </div>
                        </div>
                    </div>
                </div>



                <Router>
                    <header>
                        <div className="header-left">
                            <Link to="/aaa">상품상세정보</Link>
                        </div>

                        <div className="header-left">
                            <Link to="/bbb">배송안내</Link>
                        </div>
                        <div className="header-left">
                            <Link to="/ccc">교환 및 반품 안내</Link>
                        </div>
                        <hr />
                    </header>
                    <div>
                        <Switch>
                            <Route exact path="/aaa">
                                <p>속성: {category}</p>
                                <p>특징: {desc}</p>
                            </Route>
                            <Route exact path="/bbb" component={Menu} />
                            <Route exact path="/ccc" component={MenuAa} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default withRouter(ItemDetail);