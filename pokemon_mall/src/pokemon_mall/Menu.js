import React from 'react'

class Menu extends React.Component {
    render() {
        return (
            <div>
                <p>
- 배송비 : 기본배송료는 2,500원 입니다. (도서,산간,오지 일부지역은 배송비가 추가될 수 있습니다)<br />
  50,000원 이상 구매시 무료배송입니다.
 <br />                 
- 상품의 평균 배송일은 입금 확인 후, 1~5일입니다. 택배사의 사정에 따라 다소 늦어질수 있습니다.<br />
                    <br />
                    <br />
[배송예정일은 주문시점(주문순서)에 따른 유동성이 발생하므로 평균 배송일과는 차이가 발생할 수 있습니다.]<br />
                    <br />
-배송 지연이 생길 경우, 포켓몬 스토어 온라인 배너로 배송 지연 공지를 드리고 있사오니, 이 점 참고 부탁 드립니다.<br /></p>
            </div>
        );
    }
}

export default Menu;