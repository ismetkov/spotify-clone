import styled from 'styled-components';

const Divider = styled.div`
  border-top: 1px solid ${props => props.theme.gray};
  display: block;
  line-height: 1px;
  margin: 30px 0;
  position: relative;
  text-align: center;

  strong {
    background: ${props => props.theme.white};
    font-size: 12px;
    letter-spacing: 1px;
    padding: 0 20px;
    text-transform: uppercase;
  }
`;

export default Divider;
