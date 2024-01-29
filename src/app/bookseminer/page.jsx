"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../component/navbar';
import Subsscribe from '../component/subscribe';
import Fotter from '../component/Foter';
import TopBanner from '../component/TopBanner';
import ContactForm from '../component/ContactForm';
import MainBanner from '../component/MainBanner';
import SeminerBook from '../component/SeminerBook';

const Page = () => {
 
  return (
    <div>
      <NavBar />
      <MainBanner title="Booking Confirm Page" />
      <SeminerBook />
      {/* <Subsscribe />
      <Fotter /> */}
    </div>
  );
};

export default Page;
