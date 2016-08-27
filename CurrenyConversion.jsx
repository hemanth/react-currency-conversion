import React from 'react'
import es6Promise from 'es6-promise'
es6Promise.polyfill();
import fetch from 'isomorphic-fetch'

class CurrenyConversion extends React.Component {
  constructor () {
    super()
    this.state = { val: 0 }
  }

  getDefaultProps() {
    return {
      date: 'latest'
    };
  }

  componentDidMount() {
    var from = this.props.from,
        to   = this.props.to,
        date = this.props.date,
        val  = this.props.val,
        API  =`http://api.fixer.io/${date}?base=${from}&symbols=${from},${to}`
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({val:data['rates'][to] * val}))
  }

  render () {
      return (<div>
          {this.state.val}
      </div>)
  }

}

CurrenyConversion.propTypes =  {
  from: React.PropTypes.string.isRequired,
  to: React.PropTypes.string.isRequired,
  date: React.PropTypes.string,
  val: React.PropTypes.string.isRequired
}
