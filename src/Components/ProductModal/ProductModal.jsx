import React, { useState } from "react";
import { Button, Dialog } from "@mui/material";

import { IoCloseSharp } from "react-icons/io5";

const ProductModal = (props) => {

  const [productModal, setProductModal] = useState(true);
  return (
    <React.Fragment>
      <Dialog
        onClose={() => setProductModal(props.productModalHandler)}
        open={productModal}
        className="locationModal"
      ><Button onClick={() => setProductModal(false)} className="closeMenu">
          <IoCloseSharp />
        </Button>
        <h6 className="entry-title mb-2">
          Blue Diamond Almonds Lightly Salted
        </h6>
        
      </Dialog>
    </React.Fragment>
  );
};
export default ProductModal;
