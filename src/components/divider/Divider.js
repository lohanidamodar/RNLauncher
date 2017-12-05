import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Divider = ({ style }) =>
  <View style={[styles.container, style && style]} />;

Divider.propTypes = {
  style: PropTypes.any,
};

export default Divider;