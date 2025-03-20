import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClaims } from '../../redux/slices/claimSlice';
import LoadingSpinner from '../../components/LoadingSpinner';
import ClaimItem from './ClaimItem';

const ClaimList = () => {
    const dispatch = useDispatch();
    const { claims, loading, error } = useSelector((state) => state.claims);

    useEffect(() => {
        dispatch(fetchClaims());
    }, [dispatch]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Claim List</h1>
            <ul>
                {claims.map((claim) => (
                    <ClaimItem key={claim.id} claim={claim} />
                ))}
            </ul>
        </div>
    );
};

export default ClaimList;