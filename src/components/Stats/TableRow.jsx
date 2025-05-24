import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ label, link, value }) => (
  <tr>
    <td>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ) : (
        label
      )}
    </td>
    <td>{value}</td>
  </tr>
);

TableRow.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default TableRow;
