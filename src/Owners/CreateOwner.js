import { Button, InputLabel, TextField, Autocomplete} from '@mui/material' 
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useForm, Controller } from "react-hook-form"
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
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
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <TextField id="my-input" aria-describedby="my-helper-text" {...register("name")}/>
            <InputLabel htmlFor="my-input">Address</InputLabel>
            <TextField id="my-input" aria-describedby="my-helper-text" {...register("address")}/>
            <InputLabel htmlFor="my-input">Telephone</InputLabel>
            <TextField id="my-input" aria-describedby="my-helper-text" {...register("telephone")}/>
            <InputLabel htmlFor="my-input">Dogs</InputLabel>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Dogs</InputLabel>
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
            <Button type='submit'>Submit</Button>
        </form>
    )
}