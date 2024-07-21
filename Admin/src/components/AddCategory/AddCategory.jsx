import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./AddCategory.css";
import axios from "axios";

function AddCategory({ onClose }) {
  const [formData, setformData] = useState({
    name: "",
    color: "",
    images: "",
  });
  const handleChange = (e) => {
    const { name, value } = e?.target;
    setformData({ ...formData, [name]: value });
  };
  const addCategoryHandler = async () => {
    console.log(formData);
    axios
      .post("http://localhost:4000/api/category", formData)
      .then((res) => {
        if (res == 200) {
          console.log("Category add successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Dialog
        open={true}
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth={"md"}
      >
        <DialogTitle>Add Category</DialogTitle>
        <DialogContent>
          <>
            <Grid container spacing={2} className="grid">
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  type="text"
                  size="sm"
                  fullWidth
                  name="name"
                  value={formData?.categoryName}
                  id="outlined-basic"
                  label="Category Name"
                  variant="outlined"
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  type="text"
                  size="sm"
                  id="outlined-basic"
                  label="Color"
                  value={formData?.color}
                  variant="outlined"
                  fullWidth
                  name="color"
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextField
                  type="text"
                  fullWidth
                  size="sm"
                  id="outlined-basic"
                  label="Image Url"
                  name="images"
                  value={formData?.imageUrl}
                  variant="outlined"
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
          </>
        </DialogContent>
        <DialogActions>
          <Button size="small" variant="outlined" onClick={onClose}>
            cancel
          </Button>
          <Button
            size="small"
            variant="outlined"
            onClick={addCategoryHandler}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddCategory;
