// IconButtonWithBadge.jsx
import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartBadge = styled(Badge)(() => ({
  [`& .${badgeClasses.badge}`]: {
    top: -5,
    right: -6,
  },
}));

export default function IconButtonWithBadge({ count = 0, onClick, size = 'small', darkMode }) {
  const iconColor = darkMode ? '#ffffff' : '#1c1e24'; // White in dark mode, black in light

  return (
    <IconButton style={{ color: iconColor }} onClick={onClick}>
      <CartBadge badgeContent={count} color="success" overlap="circular">
        <ShoppingCartIcon fontSize={size} />
      </CartBadge>
    </IconButton>
  );
}
