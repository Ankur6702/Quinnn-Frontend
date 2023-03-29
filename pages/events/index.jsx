import CreateEvent from "@/src/home/components/create/CreateEvent";
import TopEvents from "@/src/home/components/events/topEvents";
import React from "react";
import PostSection from "@/src/home/components/create/PostSection";


const index = () => {
  return( 
  <>
  <CreateEvent />
  <TopEvents />
  </>
  );
};

export default index;
