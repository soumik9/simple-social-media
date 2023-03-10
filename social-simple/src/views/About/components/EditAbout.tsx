import Modal from "@components/Modal/Modal";
import { LoadingButton } from "@mui/lab";
import { Alert, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: any;
  fetch: any;
};

const EditAbout = ({ open, setOpen, data, fetch }: Props) => {

  const [input, setInput] = useState({
    name: '', email: '', university: '', address: '', dataId: ''
  })

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInput({
      name: data?.name, email: data?.email, university: data?.university, address: data?.address, dataId: data?._id
    })
  }, [data])

  const handleUpdateAbout = (e: any) => {

    const headers = {
      'Content-Type': 'application/json',
    }
    setLoading(true)
    axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}about`, input, {
      headers: headers
    })
      .then((response) => {
        setLoading(false);
        if (response.data.success) {
          fetch();
          toast.success(response.data.message)
        } else {
          toast.error(response.data.message)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Modal open={open} setOpen={setOpen} title="Edit About">

      <TextField
        label="Name"
        id="name"
        variant="filled"
        className="w-full"
        value={input.name}
        onChange={(e) => setInput({ ...input, name: e.target.value })}
      />

      <TextField
        label="Email"
        id="email"
        variant="filled"
        className="w-full mt-5"
        value={input.email}
        onChange={(e) => setInput({ ...input, email: e.target.value })}
      />

      <TextField
        label="University"
        id="university"
        variant="filled"
        className="w-full mt-5"
        value={input.university}
        onChange={(e) => setInput({ ...input, university: e.target.value })}
      />

      <TextField
        label="Address"
        id="address"
        variant="filled"
        className="w-full mt-5"
        value={input.address}
        onChange={(e) => setInput({ ...input, address: e.target.value })}
      />

      <div className="flex justify-end mt-5">
        <LoadingButton loading={loading} variant="outlined" onClick={handleUpdateAbout} size="large" className="text-primary border-primary">
          Update
        </LoadingButton>
      </div>

    </Modal>
  );
};

export default EditAbout;
