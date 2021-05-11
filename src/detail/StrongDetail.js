import { Component } from 'react';
import { getBeing, deleteBeing } from '../utils/strongest-api';
import './StrongDetail.css';

export default class StrongDetail extends Component {
  state = {
    being: null
  }

  async componentDidMount() {
    const { match } = this.props;
    const being = await getBeing(match.params.id);
    if (being) {
      this.setState({ being: being });
    }
    else {
      console.log('No one here, go home now!');
    }
  }

  handleDelete = async () => {
    const { being } = this.state;
    const { history } = this.props;

    const confirmation = `Do you wish to destroy ${being.name}?`;

    if (!window.confirm(confirmation)) { return; }

    try {
      await deleteBeing(being.id);
      history.push('/strongest');
    }
    catch (err) {
      console.log(err.message);
    }
  }

  render() {
    const { being } = this.state;

    if (!being) return null;

    return (
      <div className="StrongDetail">
        <h2>Details Page</h2>

        <p>Name: {being.name}</p>
        <p>Type: {being.type}</p>
        <p>Description: {being.description}</p>
        <p>Power Level: {being.power}</p>
        
        <button className="delete" onClick={this.handleDelete}>
          Destroy them!
        </button>
      </div>
    );
  }
}