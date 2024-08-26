import React, { useState, useEffect } from 'react';

export const DogsList = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        if (data) return
        fetch('http://localhost:3000/api/dogs').then(res => res.json()).then(data => setData(data))
    }, [])

    return (
        data?.map((dog) => {
            return (
                <>
                    <p>Name: {dog.name}</p>
                    <p>Owner: {dog.owner}</p>
                    <p>Breed: {dog.breed}</p>
                </>
            )
        })
    )

}