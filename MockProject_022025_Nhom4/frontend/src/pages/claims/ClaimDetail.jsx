import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getClaimDetails } from '../../services/claimService';
import LoadingSpinner from '../../components/LoadingSpinner';

const ClaimDetail = () => {
    const { claimId } = useParams();
    const [claim, setClaim] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClaimDetails = async () => {
            try {
                const data = await getClaimDetails(claimId);
                setClaim(data);
            } catch (err) {
                setError('Failed to fetch claim details');
            } finally {
                setLoading(false);
            }
        };

        fetchClaimDetails();
    }, [claimId]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Claim Details</h1>
            {claim ? (
                <div>
                    <h2>{claim.title}</h2>
                    <p>{claim.description}</p>
                    <p>Status: {claim.status}</p>
                    <p>Submitted on: {new Date(claim.createdAt).toLocaleDateString()}</p>
                </div>
            ) : (
                <p>No claim found.</p>
            )}
        </div>
    );
};

export default ClaimDetail;