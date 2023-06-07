import { useEffect, useState } from "react";

import Aboutcomp from "../../components/aboutcomp/aboutcomp";

import "./about.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function About() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      
      <div className="about">
     <Aboutcomp/>
        
      </div>
    </>
  );
}
