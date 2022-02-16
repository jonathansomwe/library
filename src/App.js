import logo from './logo.svg';
import './App.css';
import { Button,UncontrolledCarousel,Pagination, PaginationItem,PaginationLink} from 'reactstrap';
function App() {
  return (
    <div>
		<script src="https://fontawesome.com/a076d05399.js"></script>
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

