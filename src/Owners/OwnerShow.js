import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardActions, Button } from '@mui/material'
import { useNavigate, useParams } from "react-router-dom";


export const OwnerShow = () => {

    let { id } = useParams();
    const [data, setData] = useState()
    useEffect(() => {
        if (data) return
        fetch('http://localhost:3000/api/owner/' + id).then(res => res.json()).then(data => setData(data))
    }, [])

    return <p>{data?.name}</p>
}