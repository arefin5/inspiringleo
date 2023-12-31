"use client"

import Image from "next/image"
import teams from "../../../public/imgages/teams.png"
import { useEffect, useState } from "react";
import axios from "axios";
import TeamCard from "./TeamCard.jsx"
const Team = () => {
  // /team-member
  const [loading, setLoading] = useState(true);

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchUserPosts();

  }, []);

  const fetchUserPosts = async () => {
    try {
      const { data } = await axios.get("api/team-member");
      // console.log("user posts => ", data.team);
      setLoading(false); // Set loading to false when data is fetched

      setBlogs(data.team);
    } catch (err) {
      console.log(err);
      setLoading(false); // Set loading to false when data is fetched

    }
  };
  return (
    <div className="mb-5" style={{ marginTop: '7%' }}>
      <h3 className="text-danger text-center my-5"><b className="my-5">OUR TEAM</b></h3>
      {/* <div className="row mb-4">
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="image-container mb-3">
        <Image  src={teams} alt="Sample Image" className="w-100" />
        <div className="text-overlay">
          <p>This is some text on top of an image.</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="image-container mb-3">
      <Image  src={teams} alt="Sample Image" className="w-100" />

        <div className="text-overlay">
          <p>This is some text on top of an image.</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="image-container mb-3">
      <Image  src={teams} alt="Sample Image" className="w-100" />

        <div className="text-overlay">
          <p>This is some text on top of an image.</p>
        </div>
      </div>
    </div>
  </div> */}
      {/* <div className="row mb-4">
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="image-container mb-3">
      <Image  src={teams} alt="Sample Image" className="w-100" />

        <div className="text-overlay">
          <p>This is some text on top of an image.</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="image-container mb-3">
      <Image  src={teams} alt="Sample Image" className="w-100" />

        <div className="text-overlay">
          <p>This is some text on top of an image.</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="image-container mb-3">

      <Image  src={teams} alt="Sample Image" className="w-100" />
        <div className="text-overlay">
          <p>This is some text on top of an image.</p>
        </div>
      </div>
    </div>
  </div> */}
      {loading ? (
        // Render a loading indicator while data is being fetched
        <div className="text-center">Loading...</div>
      ) : (
        <div className="row">
          {
            blogs.map(item => (
              <div key={item._id} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3"
              >
                <TeamCard data={item} />
              </div>
            ))
          }
        </div>
      )}

    </div>

  )
}
export default Team