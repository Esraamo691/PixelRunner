import React from 'react';
import PropTypes from 'prop-types';
import { BoxWrapper } from './Box.styled';

const Box = () => (
 <BoxWrapper data-testid="Box">
    Box Component
 </BoxWrapper>
);

Box.propTypes = {};

Box.defaultProps = {};

export default Box;
