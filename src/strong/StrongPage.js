import { Component } from 'react';
import StrongList from './StrongList';
import { getStrongest } from '../utils/strongest-api';
import './StrongPage.css';

export default class StrongPage extends Component {
  state = {
    strongest: []
  }


  async componentDidMount() {
    const strongest = await getStrongest();
    if (strongest) {
      this.setState({ strongest: strongest });
    }
    else {
      console.log('Only Weaklings here!');
    }
  }

  render() {
    const { strongest } = this.state;

    return (
      <div className="StrongestPage">
        <h2>The Strongest in the Universe</h2>

        <StrongList strongest={strongest}/>

      </div>
    );
  }

}