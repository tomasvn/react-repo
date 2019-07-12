import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Wrapper from './components/Wrapper'
import Title from './components/Title'
import Row from './components/Row'
import Cells from './components/Cells'

import { initialState } from './state'
import { setIp, setCity, setRegion, setName, setCode, apiUrl } from './helpers'

class Autodetect extends Component {
  static propTypes = {
    ip: PropTypes.string,
    city: PropTypes.string,
    region: PropTypes.string,
    countryName: PropTypes.string,
    icon: PropTypes.string,
  }

  state = initialState
  
  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const res = await fetch(apiUrl())
    const req = await res.json()

    this.setState(setIp(req.ip))
    this.setState(setCity(req.city))
    this.setState(setRegion(req.region))
    this.setState(setName(req.country_name))
    this.setState(setCode(req.country))
    
    console.log(req)
  }

  render() {
    const { ip, city, region, name, code } = this.state

    return(
      <Wrapper>
        <Title>Autodetect IP</Title>
        <Row>
          <Cells ip={ip} city={city} region={region} countryName={name} icon={code} />
        </Row>
      </Wrapper>
    )
  }
}

export default Autodetect