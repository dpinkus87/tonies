import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILE } from "../utils/queries";

const Home = () => {
    const { loading, data } = useQuery(QUERY_PROFILE);
    const profiles = data?.profiles || [];

    return (
       <main>
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TonieList
              profiles={profiles}
              title="Current Tonies..."
            />
          )}
        </div>
    </main>
    )
};

export default Home;