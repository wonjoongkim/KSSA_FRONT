import Slider from 'react-slick';
import { Card, Image } from 'antd';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Style.css';

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
        height: '120px'
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
                        <Image.PreviewGroup
                            preview={{
                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`)
                            }}
                        >
                            1.
                            <Image width={100} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                        </Image.PreviewGroup>
                    </div>
                    <div>
                        <Image.PreviewGroup
                            preview={{
                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`)
                            }}
                        >
                            2.
                            <Image width={100} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                        </Image.PreviewGroup>
                    </div>
                    <div>
                        <Image.PreviewGroup
                            preview={{
                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`)
                            }}
                        >
                            3.
                            <Image width={100} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                        </Image.PreviewGroup>
                    </div>
                    <div>
                        <Image.PreviewGroup
                            preview={{
                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`)
                            }}
                        >
                            4.
                            <Image width={100} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                        </Image.PreviewGroup>
                    </div>
                    <div>
                        <Image.PreviewGroup
                            preview={{
                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`)
                            }}
                        >
                            5.
                            <Image width={100} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                        </Image.PreviewGroup>
                    </div>
                    <div>
                        <Image.PreviewGroup
                            preview={{
                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`)
                            }}
                        >
                            6.
                            <Image width={100} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                        </Image.PreviewGroup>
                    </div>
                    <div>
                        <Image.PreviewGroup
                            preview={{
                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`)
                            }}
                        >
                            7.
                            <Image width={100} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                        </Image.PreviewGroup>
                    </div>
                    <div>
                        <Image.PreviewGroup
                            preview={{
                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`)
                            }}
                        >
                            8.
                            <Image width={100} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                        </Image.PreviewGroup>
                    </div>
                    <div>
                        <Image.PreviewGroup
                            preview={{
                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`)
                            }}
                        >
                            9.
                            <Image width={100} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                        </Image.PreviewGroup>
                    </div>
                    <div>
                        <Image.PreviewGroup
                            preview={{
                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`)
                            }}
                        >
                            10.
                            <Image width={100} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                        </Image.PreviewGroup>
                    </div>
                    <div>
                        <Image.PreviewGroup
                            preview={{
                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`)
                            }}
                        >
                            11.
                            <Image width={100} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                        </Image.PreviewGroup>
                    </div>
                </Slider>
            </div>
        </Card>
    );
};
export default Slick;
