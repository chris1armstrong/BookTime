import React, { Component } from 'react';
import { Card, Statistic } from 'antd';
import './CalcCards.css';

class CalcCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  getFinishTime = () => {
    return 300;
  }

  getFinishPerTime = () => {
    return 400;
  }

  render() {
    return (
      <div className="centering">
        <div className="smallContainer">
          <Card title="No. Words" size="small">

          </Card>
          <Card title="Reading Speed" size="small">

          </Card>
          <Card title="Timeframe to finish" size="small">

          </Card>
        </div>
        <div className="smallContainer">
          <Card size="small">
            <Statistic
              title="Time to Finish"
              value={this.getFinishTime()}
            />
          </Card>
          <Card size="small">
            <Statistic
              title="Time per unit to Finish"
              value={this.getFinishPerTime()}
            />
          </Card>
        </div>
      </div>
    )
  }
}

export default CalcCards;
