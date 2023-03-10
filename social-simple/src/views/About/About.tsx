import { Button, Card, CardActionArea, CardContent } from "@mui/material";
import React, { useState } from "react";
import EditAbout from "./components/EditAbout";

const About = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="py-16">
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
              <span className="font-medium">Name:</span> Soumik Ahammed
            </h2>
            <h2 className="py-1">
              {" "}
              <span className="font-medium">Email:</span>{" "}
              soumik.ahammed.9@gmail.com
            </h2>
            <h2 className="py-1">
              {" "}
              <span className="font-medium">University:</span> Varendra
              University, Rajshahi
            </h2>
            <h2 className="py-1">
              {" "}
              <span className="font-medium">Address:</span> Shahapur, Naogaon
            </h2>
          </div>
        </div>
      </div>

      <EditAbout open={open} setOpen={setOpen} />
    </>
  );
};

export default About;
