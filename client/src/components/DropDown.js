import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Dropdown,  DropdownButton} from 'react-bootstrap';
 
export default function DropDown() {  
  return (  
    <div className="App">  
   <Container className='p-4'>  
   <DropdownButton size='lg' variant="success" id="dropdown-basic-button" title="Dropdown button">  
    <Dropdown.Item href="#/action-1">Dropdown Item 1</Dropdown.Item>  
    <Dropdown.Item href="#/action-2">Dropdown Item 2</Dropdown.Item>  
    <Dropdown.Item href="#/action-3">Dropdown Item 3</Dropdown.Item>  
    <Dropdown.Item href="#/action-3">Dropdown Item 4</Dropdown.Item>  
</DropdownButton>  
</Container>  
    </div>  
  );  
}