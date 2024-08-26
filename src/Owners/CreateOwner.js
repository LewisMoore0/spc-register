import { Button, InputLabel, TextField, Box} from '@mui/material' 
import { useForm } from "react-hook-form"
import React, { useState, useEffect } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const CreateOwner = () => {
    const { register, getValues, control } = useForm() 
    const [dogs, setDogs] = useState(null)
    const [selectedDogs, setSelectedDogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/dogs').then(res => res.json()).then(data => setDogs(data))
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formValues = getValues()

        console.log(formValues)

        fetch('http://localhost:3000/api/create/owner', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formValues)
        })
    }

    const handleChange = (event) => {
        const {
          target: { value },
        } = event;

        setSelectedDogs(value)
      };




    return (
        <form onSubmit={handleSubmit}>
            <InputLabel sx={{ m: 1}}>Name:</InputLabel>
            <TextField sx={{ m: 1, width: 300 }}{...register("name")}/>
            <InputLabel sx={{ m: 1, width: 300 }}>Address:</InputLabel>
            <TextField sx={{ m: 1, width: 300 }} {...register("address")}/>
            <InputLabel sx={{ m: 1, width: 300 }}>Telephone:</InputLabel>
            <TextField sx={{ m: 1, width: 300 }}{...register("telephone")}/>
            <InputLabel sx={{ m: 1, width: 300 }}>Dogs:</InputLabel>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel>Select...</InputLabel>
                <Select {...register("Dogs")}
                multiple
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                value={selectedDogs}
                >
                {dogs?.map((dog) => (
                    <MenuItem
                    key={dog.name}
                    value={dog}
                    >
                    {dog.name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            <Box>
                <Button sx={{ m: 1, width: 100 }} variant="contained" type='submit'>Submit</Button>
            </Box>
        </form>
    )
}