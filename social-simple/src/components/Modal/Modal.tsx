import { Dialog } from "@mui/material";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  children: React.ReactNode;
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Modal = ({ open, setOpen, children, title }: Props) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="lg:w-[600px] w-[350px] p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-[22px] text-primary">{title}</h2>
          <button
            className="text-[20px] outline-none hover:text-primary trans"
            onClick={handleClose}
          >
            <AiOutlineClose />
          </button>
        </div>

        <div className="pt-5">{children}</div>
      </div>
    </Dialog>
  );
};

export default Modal;
