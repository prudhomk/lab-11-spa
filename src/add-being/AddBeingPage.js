import { Component } from 'react';
import StrongForm from '../form/StrongForm';
import { addBeing } from '../utils/strongest-api';
import './AddBeingPage.css';

export default class AddBeingPage extends Component {
  handleAdd = async beingToAdd => {
    const { history } = this.props;
    const newBeing = await addBeing(beingToAdd);
    history.push(`/strongest/${newBeing.id}`);
  }
  render() {

    return (
      <div className="AddBeingPage">
        <h2>A New Challenger Appears!</h2>
        <StrongForm onSubmit={this.handleAdd}/>
      </div>
    );
  }
}
