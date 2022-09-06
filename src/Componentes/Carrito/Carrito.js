import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

 function Carrito() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge color="primary">
      <ShoppingCartIcon/>
      <a href='#'/>
      </StyledBadge>
    </IconButton>
  );
}

export default Carrito