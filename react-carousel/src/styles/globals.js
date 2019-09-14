import { ARW, WRAP, DOTS_WRAP, DOTS, ITEM, IS_ACTIVE, IS_DEFAULT, SPACING } from '../helpers'

export const glob = {
  [ARW]: {
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'font-size': '100%',
    'border': 0,
    'padding': 0,
    'background-color': 'transparent',
    'min-width': '50px',
    'min-height': '50px',
  },
  [WRAP]: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'min-height': '400px'
  },
  [DOTS]: {
    'font-size': '100%',
    'border': 0,
    'border-radius': '50%',
    'padding': 0,
    'width': '15px',
    'height': '15px',
    'margin': '0 5px',
    [IS_DEFAULT]: {
      'background-color': '#ccc'
    },
    [IS_ACTIVE]: {
      'background-color': '#827b7b'
    }
  },
  [DOTS_WRAP]: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  },
  [ITEM]: {
    'display': 'none',
    'max-width': '600px',
    'padding-left': '25px',
    'padding-right': '25px',
    [SPACING]: {
      'padding-left': '50px',
      'padding-right': '50px'
    },
    [IS_ACTIVE]: {
      'display': 'flex',
      'flex-direction': 'column'
    }
  },
}