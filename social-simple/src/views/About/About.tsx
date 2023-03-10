import BackdropLoading from "@components/Loading/BackdropLoading";
import { Button, Card, CardActionArea, CardContent } from "@mui/material";
import React, { useState } from "react";
import useAbout from "src/hooks/useAbout";
import EditAbout from "./components/EditAbout";

const About = () => {

  const { about, aboutLoading, aboutFetch } = useAbout();

  // process.env.NEXT_PUBLIC_SERVER_URL
  const [open, setOpen] = useState<boolean>(false);

  if(aboutLoading) return <BackdropLoading />

  return (
    <>
      <div className="py-20">
        <div className="container">
          <div className="w-full p-5 bg-gray-300">
            <div className="flex justify-end">
              <Button
                onClick={() => setOpen(true)}
                variant="outlined"
                size="large"
                className="text-primary border-primary"
              >
                Edit
              </Button>
            </div>

            <h2 className="py-1">
              {" "}
              <span className="font-medium">Name: </span> {about?.data?.name ? about?.data?.name : 'No name updated'}
            </h2>
            <h2 className="py-1">
              {" "}
              <span className="font-medium">Email: </span>{" "}
              {about?.data?.email ? about?.data?.email : 'No email updated'}
            </h2>
            <h2 className="py-1">
              {" "}
              <span className="font-medium">University: </span> 
              {about?.data?.university ? about?.data?.university : 'No university name updated'}
            </h2>
            <h2 className="py-1">
              {" "}
              <span className="font-medium">Address: </span>  
              {about?.data?.address ? about?.data?.address : 'No address updated'}
            </h2>
          </div>
        </div>
      </div>

      <EditAbout open={open} setOpen={setOpen} data={about?.data} fetch={aboutFetch} />
    </>
  );
};

export default About;
