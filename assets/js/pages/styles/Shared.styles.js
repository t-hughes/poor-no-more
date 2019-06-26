import styled from '@emotion/styled';

export const PageHeader = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '20px',
  paddingBottom: '40px',

  '.landing-header': {
    fontSize: '70px',
  },

  '.landing-header-line': {
    border: '2px solid #00cfbb',
    width: '50%',
    borderRadius: '5px',
  },

  '.landing-sub-header': {
    paddingBottom: '20px',
  },

  '.start-link': {
    color: '#6757b0',
    padding: '20px',
    fontSize: '20px',
    border: '4px solid #6757b0',
    borderRadius: '8px',
  },

  '.dashboard-header': {
    'fontSize': '40px',
  },
});
