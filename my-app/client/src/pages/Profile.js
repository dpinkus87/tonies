import React from 'react';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';  

// import ToniesList from '../components/ToniesList';
 
import { QUERY_PROFILE } from '../utils/queries.js'

import Auth from '../utils/auth';

const Profile = () => {
    const { profileId} = useParams();

    const { loading, data } = useQuery(
        profileId ? QUERY_PROFILE:
        {
            variables: { profileId },
        }
    );

    const profile = data?.profile || {};

    if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
        return <Navigate to="/me" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

if (!profile?.name) {
    return (
        <h4> 
        You need to log in to see your profile. Use the navigation link to sign up or log in!
        </h4>
    );
}

// TODO: Add current rented Tonies to display within profile
// return (
//     <div>
       
//         </h2>
//     </div>
// )

}

export default Profile;