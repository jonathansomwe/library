import logo from './logo.svg';
import './App.css';
import { Button,Container,Table,Row,Col,UncontrolledCarousel,Pagination, PaginationItem,PaginationLink} from 'reactstrap';
function App() {
  return (
    <div>
  <Row>
    <Col className="background">
    <nav>
	  <input type="checkbox" id="check"></input>
		  <label for="check" className="checkbtn">
			  <i className="fas fa-bars"></i>
		  </label>
		<label>DesignX</label>
		<ul>
			<li><a className="active" href="#">Home</a></li>
			<li><a href="#">About us</a></li>
			<li><a href="#">Product</a></li>
			<li><a href="#">Services</a></li>
			<li><a href="#">Contact</a></li>
		</ul>
	</nav>
    </Col>
  </Row>
		<script src="https://fontawesome.com/a076d05399.js"></script>
  <Container>
    <Row>
      <Col className='.col-6' xs='6'>
      <Table bordered>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        First Name
      </th>
      <th>
        Last Name
      </th>
      <th>
        Username
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Mark
      </td>
      <td>
        Otto
      </td>
      <td>
        @mdo
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
        @fat
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        @twitter
      </td>
    </tr>
  </tbody>
</Table>
      </Col>
    </Row>
  </Container>
	<Button color="danger">Danger!</Button>
	<UncontrolledCarousel
  items={[
    {
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
      src: 'https://picsum.photos/id/123/1200/600'
    },
    {
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
      src: 'https://picsum.photos/id/456/1200/600'
    },
    {
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
      src: 'https://picsum.photos/id/678/1200/600'
    }
  ]}
 />
 <Pagination>
  <PaginationItem>
    <PaginationLink
      first
      href="#"
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      previous
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      1
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      3
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      4
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      5
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      next
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      last
    />
  </PaginationItem>
</Pagination>
    </div>
  );
}

export default App;

