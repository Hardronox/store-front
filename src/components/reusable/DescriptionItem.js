import React from 'react';

const DescriptionItem = ({title, value}) => {
  return (
    <div className="description-item flex-row">
      <div className="description-title flex-col">{title}</div>
      <div className="description-value flex-col">{value}</div>
    </div>
  );
};

export default DescriptionItem;
