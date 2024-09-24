import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardActions, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";

  
export const OwnersList = () => {

    const [data, setData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (data) return
        fetch('http://localhost:3000/api/owners').then(res => res.json()).then(data => setData(data))
    }, [])

    return (
        data?.map((owner) => {
            return (
                <Card variant="outlined" sx={{ m: 1 }}>
                    <CardContent>
                        <p>Name: {owner.name}</p>
                        <p>Address: {owner.address}</p>
                        <p>Telephone: {owner.telephone}</p>
                        <p>Dogs: {owner.dogs.map((dog) => dog.name + ', ')}</p>
                    </CardContent>
                    <Button size="small" sx={{ m: 1 }} onClick={() => navigate('/owners/' + owner.ownerId)}>Learn More</Button>
                </Card>
            )
        })
    )

}