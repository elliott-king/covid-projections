import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export const LegendContainer = styled.div`
  display: inline-flex;
  flex-direction: ${props => (props.condensed ? 'column' : 'row')};
`;

export const LegendItemHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.7);
`;

export const LegendItemContainer = styled.div`
  ${props =>
    props.condensed
      ? `
    display: flex;
    margin: 0;
    padding: 0;
  `
      : `
    display: flex;
    margin-right: 1.5rem;

    &:last-child {
      margin-right: 0;
    }

    @media (min-width: 960px) {
      margin: 0.5rem;
    }
  `}
`;

export const ColorBox = styled(Grid)`
  background-color: ${props => props.color};
  margin-right: 8px;
  border-radius: 100%;
  height: 14px;
  width: 14px;
`;

export const LegendWrapper = styled.div`
  ${props =>
    props.condensed
      ? `
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.75rem 0 0;
  `
      : `
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;

    @media (min-width: 600px) {
      flex-direction: row;
      margin-top: -1rem;
    }
  `}
`;

export const LegendTitle = styled(Typography)`
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;

  @media (min-width: 600px) {
    margin-right: 1.5rem;
    margin-bottom: 0;
  }
`;
