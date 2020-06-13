import React from "react";

const ContentsList = ({ children }) => {
  return (
    <section className="contents-list">
      <div className="contents-list__inner">
        {children}
      </div>
    </section>
  );
};

export default React.memo(ContentsList);