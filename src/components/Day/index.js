import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar, List } from 'antd';

import './Day.css'
const { Meta } = Card;
function Day (props) {
  return (
    <div className="day" onClick={props.handleClick}>
      <List.Item actions={[<a>edit</a>, <a>more</a>]}>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">blabla</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
        <div>content</div>
      </List.Item>
      {/* <Card
        hoverable
        style={{ width: 170, borderRadius: 15 }}
        cover={
          <img
            alt={props.name}
            src={props.imageUrl}
            style={{
              height: 130,
              borderRadius: '15px 15px 0 0 ',
              objectFit: 'cover',
            }}
          />
        }
      >
        <Meta title={props.name} description={`Serves ${props.serves}`} />
      </Card> */}
    </div>
  );
}

Day.propTypes = {
  name: PropTypes.string,
  serves: PropTypes.string,
  imageUrl: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Day;