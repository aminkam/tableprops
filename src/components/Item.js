import { Table, TableCell, TableContainer, TableHead, TableRow, ImageList, ButtonGroup, Button,  } from '@material-ui/core'
import React from 'react'

const Item = ({product,clickMe}) => {
    const {name, price , imageSrc}=product;
    return (
        <div>
             <TableContainer >
      <Table  aria-label="caption table">
        
        <TableHead>
          <TableRow>
            <TableCell>Product Name : {name}</TableCell>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
  <Button onClick={()=>clickMe(name,price)}>Alert Info</Button>
  
</ButtonGroup>
            <TableCell align="center">Price: {price}</TableCell>
            <ImageList  >
            <img className="img" src={imageSrc} alt={imageSrc} />
            </ImageList>
            
          </TableRow>
        </TableHead>
        
      </Table>
    </TableContainer>
        </div>
    )
}

export default Item

