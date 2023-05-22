import React from 'react'
import {Col, Container, Row, Card, Button } from 'react-bootstrap';

//! react alaninda döngü olarak sadece map desteklenir. Conditionlardan da sadece ternary desteklenir. 

const CourseCard = ({data}) => {
    // console.log(props);
    // console.log(props.data[0].name);
    console.log(data);
//! alttaki ilk return reactin ekrana bastirilan kismi
  return (
    <div>
<Container>

<Row className="g-3 text-center mt-4">
{data.map(({img, name, text, id})=>{

    //! arrow(map) süslü ile kullanildiginda return ister. 
    //!react'ta süslü koymak zorunda degiliz. O zaman returne de ihtiyac olmaz. 
    //? databaseden cekilen veriler ekrana bastirilirken en dis div uniqe bir veri ister. bunu da key={id } seklinde yazariz. id olmak zorunda degil unique herhangi bir porperty olabilir, mesela img
return(
    <Col className="d-flex justify-content-center" key={id} sm={12} md={6} lg={4}>
          <Card style={{width:"18rem"}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
               {text}
              </Card.Text>
              <Button variant="info">
                Detaylar
              </Button>
            </Card.Body>
          </Card>
        </Col>
)


}

)
}



</Row>


</Container>


    </div>
  )
}

export default CourseCard