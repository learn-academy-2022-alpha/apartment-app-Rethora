import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  CardText
} from 'reactstrap'

class Apartments extends Component {
  render() {
    const { apartments } = this.props
    return (
      <>
        <h1>All Apartments For Rent</h1>
        {
          apartments && apartments.map(apartment => (
            <Card key={apartment.id}>
              <CardHeader>
                {apartment.street}, {apartment.city}, {apartment.state}
              </CardHeader>
              <CardBody>
                <div className='card-flex'>
                  <div className='card-text-container'>
                    <CardText>
                      <strong>Price:</strong> {apartment.price}
                    </CardText>
                    <CardText>
                      <strong>Bedrooms:</strong> {apartment.bedrooms}
                    </CardText>
                    <CardText>
                      <strong>Bathrooms:</strong> {apartment.bathrooms}
                    </CardText>
                    <CardText>
                      <strong>Pets:</strong> {apartment.pets}
                    </CardText>
                    <CardText>
                      <strong>Manager:</strong> {apartment.manager}
                    </CardText>
                    <CardText>
                      <strong>Email:</strong> {apartment.email}
                    </CardText>
                    <CardText>
                      <NavLink to={`/apartmentsshow/${apartment.id}`}>
                        View Listing
                      </NavLink>
                    </CardText>
                  </div>
                  <CardImg
                    alt="Card image cap"
                    src={apartment.image}
                  />
                </div>
              </CardBody>
              <CardFooter>
                Listed On: {new Date(apartment.created_at).toLocaleDateString('en-US')}
              </CardFooter>
            </Card>
          ))
        }
      </>
    )
  }
}

export default Apartments
