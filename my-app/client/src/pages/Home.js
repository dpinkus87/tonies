import React from "react";
import { useQuery } from "@apollo/client";

const Home = () => {
    // TODO: update queries - add to useQuery function below
    const { loading, data } = useQuery();
    const profiles = data?.profiles || [];

    
};

export default Home;