/** @format */

"use client";
import DBManagement from "@/components/services-details/db-management";
import Development from "@/components/services-details/devlopment";
import Marketing from "@/components/services-details/digital-marketing";
import Dispatch from "@/components/services-details/dispatch";
import Infrastructure from "@/components/services-details/IT-infrastructure";
import Support from "@/components/services-details/support";
import ServicesDetails from "@/components/ServiceDetail";
import { Hero } from "@/components/ui/animated-hero";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <ServicesDetails />

      {/* <div id="development">
        <Development />
      </div>
      <div id="support">
        <Support />
      </div>
      <div id="dispatch">
        <Dispatch />
      </div>
      <div id="marketing">
        <Marketing />
      </div>
      <div id="infrasructure">
        <Infrastructure />
      </div>
      <div id="dbmanagement">
        <DBManagement />
      </div> */}
    </>
  );
};

export default page;
