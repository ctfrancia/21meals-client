import { Modal, Form, Icon, Input, Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecipeCard from '../../components/RecipeCard';
import './RecipeInput.css';
import TextArea from '../../../node_modules/antd/lib/input/TextArea';
const FormItem = Form.Item;

class RecipeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <RecipeCard
          handleClick={this.showModal}
          imageUrl="https://cdn.onlinewebfonts.com/svg/img_211806.png"
          name="Add new"
          description="Add your recipe"
        />
        <Modal
          className="recipe__input"
          title="New Recipe"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            <Form layout="vertical" onSubmit={this.handleSubmit}>
              <FormItem label="Recipe name">
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                  placeholder="Recipe name"
                />
              </FormItem>
              <FormItem label="Recipe Instructions">
                <TextArea
                  autosize
                  type="text"
                  prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                  placeholder="Instructions..."
                />
              </FormItem>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

RecipeInput.propTypes = {
  recipes: PropTypes.array,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  loading: state.pages.loadingRecipes,
  recipes: state.pages.recipesIndex.map(el => state.entities.recipes[el])
});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(RecipeInput);
