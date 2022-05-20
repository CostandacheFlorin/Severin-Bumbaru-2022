import React, { useEffect, useState, useContext } from "react";

import InternshipHistoryList from "../../components/Internship/InternshipHistoryList/InternshipHistoryList";
import { AuthContext } from "../../context/auth-context";
import { useHttpClient } from "../../hooks/http-hook";

 

const MyInternships = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
console.log(auth);
  const [stagiileMele, setStagiileMele] =useState([]);

  useEffect(() => {
    const fetchMyInternships = async () => {
    try {
      const uid = auth.userId;
      const responseData = await sendRequest(
        `http://10.13.16.154:8080/getApplicationList/?id=${uid}`
      );
     
      setStagiileMele(responseData);

      
    } catch (err) {}
  };
  fetchMyInternships();

  },[])

  return <InternshipHistoryList internshipHistoryList={stagiileMele} />;
};

export default MyInternships;
