import React, { memo } from 'react';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';

function Loading({ isLoading }) {
  return (
    <div className="loading">
      <ClipLoader
        color="red"
        size={60}
        loading={isLoading}
      />
    </div>
  );
}

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

Loading.defaultProps = {
  isLoading: false,
};

export default memo(Loading);
