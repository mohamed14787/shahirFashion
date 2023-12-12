
import { Grid } from "@material-ui/core"
import Button from '@material-ui/core/Button';
function Footer(){

  const hyperlinkArray = [
    { text: 'Home page', url: 'https://example.com/link1' },
    { text: 'Couture', url: 'https://example.com/link2' },
    { text: 'Collection', url: 'https://example.com/link3' },
    { text: 'Contact us', url: 'https://example.com/link4' },
  ];

  const hyperlinkArray2 = [
    { text: 'Shipping', url: 'https://example.com/link1' },
    { text: 'Privacy policy', url: 'https://example.com/link2' },
    { text: 'FAQs', url: 'https://example.com/link3' },
    
  ];
  const column2 = ["Home page","Couture","Collection","Contact us"]
    return(
      <div className="grid-container">
      <div className="grid-item">
        <div className="verticalDiv">
      
      <img
        src={require('./logo.png')}  // Replace with the actual URL or path of your image
        alt="logo"
        width={100}
        height={100}
        align="left"
         // Adjust styling as needed
      />
      <p>Shahira Lasheen has always preferred to spend 
her time surrounded by luxurious fabrics and
sewing kits. An undeniable passion</p>
      </div>

     <div>
      
</div>
     
      </div>
      <div className="grid-item">
      {hyperlinkArray.map((link, index) => (
        <div key={index}>
         <Button variant={link}  style={{ backgroundColor: 'transparent', border: 'none',color: "black" }}>{link.text}</Button>
        </div>
      ))}</div>
      <div className="grid-item">
      {hyperlinkArray2.map((link, index) => (
       <div key={index}>
       <Button variant={link}  style={{ backgroundColor: 'transparent', border: 'none',color: "black" }}>{link.text}</Button>
      </div>
      ))}
      </div>
    
            <p>© 2021 Shahira. All Rights Reserved.</p>
        </div>
    )
}
export default Footer;  


