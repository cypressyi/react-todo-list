import React from 'react';
import { Input, Button, Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onItemAdd } from '../actions/action';

class TodoAddForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
    };
  }

  handleInputChange = (inputText) => {
    this.setState({
      inputText,
    });
  }

  triggerAddItem = () => {
    if (this.state.inputText.trim()) {
      this.props.onItemAdd({
        id: +new Date(),
        text: this.state.inputText,
        isEditing: false,
        isCompleted: false,
      });

      this.setState({
        inputText: '',
      });
    }
  };

  render() {
    const { placeholderText } = this.props;
    const { inputText } = this.state;
    return (
      <div>
        <Row>
          <Col span={20}>
            <Input
              type="text"
              placeholder={placeholderText}
              value={inputText}
              onChange={(e) => { this.handleInputChange(e.target.value); }}
              onKeyPress={
                (e) => {
                  if (e.key === 'Enter') {
                    this.triggerAddItem();
                  }
                }
              }
            />
          </Col>
          <Col span={4}>
            <Button type="button" onClick={this.triggerAddItem}>Add</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ onItemAdd }, dispatch)
);

export default connect(null, mapDispatchToProps)(TodoAddForm);
