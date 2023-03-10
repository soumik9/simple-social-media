import Modal from "@components/Modal/Modal";
import { TextField } from "@mui/material";
import React from "react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const EditAbout = ({ open, setOpen }: Props) => {
  return (
    <Modal open={open} setOpen={setOpen} title="Edit About">
      <TextField label="Name" id="name" variant="filled" className="w-full" />
    </Modal>
  );
};

export default EditAbout;
