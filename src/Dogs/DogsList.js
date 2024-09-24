import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardActions, Button } from '@mui/material'

export const DogsList = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        if (data) return
        fetch('http://localhost:3000/api/dogs').then(res => res.json()).then(data => setData(data))
    }, [])

    return (
        data?.map((dog) => {
            return (
                <Card variant="outlined" sx={{ m: 1 }}>
                    <CardContent>
                        <p>Name: {dog.name}</p>
                        <p>Breed: {dog.breed}</p>
                        <p>Owner: {dog.owner}</p>
                    </CardContent>
                    {/* <Button size="small" sx={{ m: 1 }} onClick={() => navigate('/owners/someId')}>Learn More</Button> */}
                </Card>
            )
        })
    )

}