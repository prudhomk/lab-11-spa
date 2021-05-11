import { Component } from 'react';
import './StrongForm.css';

export default class StrongForm extends Component {
  state = {
    name : '',
    type: '',
    image: '',
    description: '',
    power: '',
    isGood: false
  }

  componentDidMount() {
    const { being } = this.props;
    if (!being) { return; }

    this.setState(being);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChangeName = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleChangeType = ({ target }) => {
    this.setState({ type: target.value });
  }

  handleChangeImage = ({ target }) => {
    this.setState({ image: target.value });
  }

  handleChangeDescription = ({ target }) => {
    this.setState({ description: target.value });
  }

  handleChangePower = ({ target }) => {
    this.setState({ power: target.value });
  }

  handleChangeIsGood = ({ target }) => {
    this.setState({ isGood: target.value });
  }

  render() {
    const { name, type, image, description, power, isGood } = this.state;
    const { being } = this.props;

    return (
      <form className="StrongForm" onSubmit={this.handleSubmit}>
        <p>
          <label>
            <span>Name</span>
            <input name="name" required placeholder="Competetor Name..." value={name} onChange={this.handleChangeName}/>
          </label>
        </p>

        <p>
          <label>
            <span>Type</span>
            <input name="type" required placeholder="Species..." value={type} onChange={this.handleChangeType}/>
          </label>
        </p>

        <p>
          <label>
            <span>Image</span>
            <input name="image" required placeholder="Image URL" value={image} onChange={this.handleChangeImage}/>
          </label>
        </p>

        <p>
          <label>
            <span>Description</span>
            <input name="description" required placeholder="A short description..." value={description} onChange={this.handleChangeDescription}/>
          </label>
        </p>

        <p>
          <label>
            <span>Power Level</span>
            <input name="power" required placeholder="Their Power Level..." value={power} onChange={this.handleChangePower}/>
          </label>
        </p>

        <p>
          <label>
            <span>Good or Bad</span>
            <input name="isGood" required placeholder="Are they good or bad?" value={isGood} onChange={this.handleChangeIsGood}/>
          </label>
        </p>
      

        <p>
          <button>Add Cat</button>
        </p>

      </form>

    );
  }
}