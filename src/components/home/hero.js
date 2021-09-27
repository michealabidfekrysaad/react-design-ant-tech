import React from "react";
import { Carousel, Button } from "antd";

const AppHero = () => {
  const items = [
    {
      key: '1',
      title: 'Web and mobile payment built for developers',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '2',
      title: 'Work better together. Schedule meetings',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '3',
      title: 'The best app to increase your productivity',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
  ]
  return (
    <div id="hero" className="heroBlock">
      <Carousel autoplay swipeToSlide={false}>
          {items.map(item => {
              return (
                  <div className="container-fluid" key={item.key}>
                      <div className="content">
                      <h1>to deploy website <br/> https://www.youtube.com/watch?v=nxLaOaGqML8&list=PLiUrl-SQRR7LM5cw7azA2H_FZwFx2UgkI&index=15&ab_channel=CodewithBibek</h1>

                          <h3>{item.title}</h3>
                          <p>{item.content}</p>
                          <div className="btnHolder">
                          <Button type="primary" size="large">Learn More</Button>
                          <Button size="large"><i className="fas fa-desktop"></i>Watch a Demo</Button>
                          </div>
                      </div>
                  </div>
              )
          })
          }
      </Carousel>
    </div>
  );
};

export default AppHero;