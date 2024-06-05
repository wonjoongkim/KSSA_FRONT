import Slider from 'react-slick';
import { Card, Tooltip, Image } from 'antd';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Style.css';
import lool_Image_1 from '../../images/lool_Image_1.png';
import lool_Image_2 from '../../images/lool_Image_2.png';
import lool_Image_3 from '../../images/lool_Image_3.png';
import lool_Image_4 from '../../images/lool_Image_4.png';
import lool_Image_5 from '../../images/lool_Image_5.png';

const Slick = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,

        nextArrow: (
            <div>
                <div className="next-slick-arrow rotate-180"></div>
            </div>
        ),

        prevArrow: (
            <div>
                <div className="prev-slick-arrow"></div>
            </div>
        )
    };

    const boxStyle = {
        width: '100%',
        height: '60px'
    };

    const LogoLink = (Links) => {
        const windowFeatures = `
            menubar=yes,
            location=yes,
            resizable=yes,
            scrollbars=yes,
            status=yes,
            width=1280
        `.replace(/\s+/g, '');
        window.open(Links, '_blank', windowFeatures);
    };

    return (
        <Card
            bordered={true}
            style={{
                width: '100%',
                border: '0px'
            }}
        >
            <div style={boxStyle} justify="space-evenly" align="center">
                <Slider {...settings}>
                    <div>
                        <Image.PreviewGroup preview={false}>
                            <Tooltip title="인천국제공항보안" color="#108ee9">
                                <Image src={lool_Image_1} style={{ cursor: 'pointer' }} onClick={() => LogoLink('http://airportsc.kr/')} />
                            </Tooltip>
                        </Image.PreviewGroup>
                    </div>
                    <div>
                        <Image.PreviewGroup preview={false}>
                            <Tooltip title="인천국제공항공사" color="#108ee9">
                                <Image
                                    src={lool_Image_2}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => LogoLink('https://www.airport.kr/co/ko/index.do')}
                                />
                            </Tooltip>
                        </Image.PreviewGroup>
                    </div>
                    <div>
                        <Image.PreviewGroup preview={false}>
                            <Tooltip title="한서대학교" color="#108ee9">
                                <Image
                                    src={lool_Image_3}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => LogoLink('https://www.hanseo.ac.kr/intro2/intro.html')}
                                />
                            </Tooltip>
                        </Image.PreviewGroup>
                    </div>
                    <div>
                        <Image.PreviewGroup preview={false}>
                            <Tooltip title="항공보안협회" color="#108ee9">
                                <Image src={lool_Image_4} style={{ cursor: 'pointer' }} onClick={() => LogoLink('http://www.kasa21.kr/')} />
                            </Tooltip>
                        </Image.PreviewGroup>
                    </div>
                    <div>
                        <Image.PreviewGroup preview={false}>
                            <Tooltip title="항공보안학회" color="#108ee9">
                                <Image src={lool_Image_5} style={{ cursor: 'pointer' }} onClick={() => LogoLink('http://kafas.or.kr/')} />
                            </Tooltip>
                        </Image.PreviewGroup>
                    </div>
                </Slider>
            </div>
        </Card>
    );
};
export default Slick;
