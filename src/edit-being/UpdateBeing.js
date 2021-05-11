import { Component } from 'react';
import StrongForm from '../form/StrongForm';
import { getBeing, updateBeing } from '../utils/strongest-api';
import './UpdateBeing.css';

export default class UpdateBeing extends Component {
  state = {
    being: null
  }

  async componentDidMount() {
    const { match } = this.props;
  
    const being = await getBeing(match.params.id);
    this.setState({ being: being });
   
  }

  handleUpdate = async being => {
    const { history } = this.props;
    const updatedBeing = await updateBeing(being);
    history.push(`/strongest/${updatedBeing.id}`);
  }

  render() {
    const { being } = this.state;

    return (
      <div className="UpdateBeing">
        <h2>Edit Challenger</h2>

        {being && <StrongForm being={being} onSubmit={this.handleUpdate}/>}
      </div>
    );
  }
}