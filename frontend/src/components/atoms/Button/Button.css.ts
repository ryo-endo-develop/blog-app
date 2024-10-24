import { style } from '@vanilla-extract/css';
import * as vars from '../../stylesheets/variables';

export const root = style({
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'background-color 0.3s',
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const primary = style({
  backgroundColor: '#007bff',
  color: 'white',
  ':hover': {
    backgroundColor: '#0056b3',
  },
});

export const secondary = style({
  backgroundColor: '#6c757d',
  color: 'white',
  ':hover': {
    backgroundColor: '#545b62',
  },
});

export const small = style({
  backgroundColor: '#f8f9fa',
  color: '#212529',
  ':hover': {
    backgroundColor: '#e2e6ea',
  },
});

export const xxsm = style({
  width: vars.dimension.width.input.xxsm,
});

export const xsm = style({
  width: vars.dimension.width.input.xxsm,
});

export const sm = style({
  width: vars.dimension.width.input.xxsm,
});

export const md = style({
  width: vars.dimension.width.input.xxsm,
});

export const lg = style({
  width: vars.dimension.width.input.xxsm,
});

export const xlg = style({
  width: vars.dimension.width.input.xxsm,
});

export const fit = style({ width: 'auto' });
