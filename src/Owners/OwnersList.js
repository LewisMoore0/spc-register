import React, { useState, useEffect } from 'react';

export const OwnersList = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        if (data) return
        fetch('http://localhost:3000/api/owners').then(res => res.json()).then(data => setData(data))
    }, [])

    return (
        data?.map((owner) => {
            return (
                <>
                    <p>Name: {owner.name}</p>
                    <p>Address: {owner.address}</p>
                    <p>Telephone: {owner.telephone}</p>
                    <p>Dogs: dogs...</p>
                </>
            )
        })
    )

}