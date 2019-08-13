import React from 'react'
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Link to="/"><img src='https://pokemonkorea.co.kr/v2/pokemonkorealogo.png' alt='이미지' /></Link>
                <p>©2019 Pokémon. ©1995-2019 Nintendo/Creatures Inc./GAME FREAK inc.<br />
                    ©1997 Nintendo, Creatures, GAME FREAK, TV Tokyo, ShoPro, JR Kikaku. ©Pokémon.<br />
                    ©1997 Nintendo, Creatures, GAME FREAK, TV Tokyo, ShoPro, JR Kikaku. ©Pokémon. ©2018 PIKACHU PROJECT.<br />
                    ©2019 Niantic, Inc. ©2019 Pokémon. ©1995-2019 Nintendo / Creatures Inc. / GAME FREAK inc.<br /><br />
                    포켓몬스터, 포켓몬, Pokémon, 몬스터볼은 Nintendo의 상표입니다.<br />
                    Trademarks are property of their respective owners. <br />
                    Nintendo Switch, Nintendo 2DS, Nintendo 3DS and Nintendo DS are trademarks of Nintendo.<br /><br />

                    본 사이트의 컨텐츠에 대한 무단 복제 및 도용을 금하며 이를 어길 시 법적조치를 받을 수 있습니다.<br />
                    ㈜포켓몬몰 대표이사 이은미 · 개인정보관리책임자 이은미 · 사업자등록번호 486-86-07676<br /><br />

                    고객센터 : 운영시간 : 평일 9시 ~ 18시<br />
                    포켓몬 스토어 온라인 : 031-272-0194 <br />
                    게임 및 게임 이벤트 042-000-0000 / 카드 게임 및 카드 게임 이벤트 : 1588-1004<br />
                    애니메이션 : 02-356-2222 / 제휴 및 라이선스 : 042-444-0000<br />
                    webmaster@pokemonkorea.co.kr ※당사에서는 Pokémon GO 관련 문의는 대응하지 않습니다.<br />
                    서울특별시 강남구 청담동 801, 4층<br /></p>
            </footer>
        );
    }
}

export default Footer;