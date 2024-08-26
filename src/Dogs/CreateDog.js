import { Button, InputLabel, TextField, Box} from '@mui/material' 
import { useForm } from "react-hook-form"

export const CreateDog = () => {
    const { register, getValues, control } = useForm() 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formValues = getValues()
                
        fetch('http://localhost:3000/api/create/dog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formValues)
        })
  }

    return (
        <form onSubmit={handleSubmit}>
            <InputLabel sx={{ m: 1 }}>Name:</InputLabel>
            <TextField sx={{ m: 1, width: 300 }} {...register("name")}/>
            <InputLabel sx={{ m: 1 }}>Owner:</InputLabel>
            <TextField sx={{ m: 1, width: 300 }}{...register("owner")}/>
            <InputLabel sx={{ m: 1 }}>Breed:</InputLabel>
            <TextField sx={{ m: 1, width: 300 }}{...register("breed")}/>
            <Box>
                <Button sx={{ m: 1, width: 100 }} variant="contained" type='submit'>Submit</Button>
            </Box>
        </form>
    )
}