import React, { useState } from "react";

const Collapse = ({ children, header, isOpen = false }) => {
  const [open, setOpen] = useState(isOpen);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={toggle}>{header}</button>
      {open && children}
    </div>
  );
};

export default Collapse;
