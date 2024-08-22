import { Button, InputLabel, TextField, Autocomplete} from '@mui/material' 
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useForm, Controller } from "react-hook-form"

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
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <TextField id="my-input" aria-describedby="my-helper-text" {...register("name")}/>
            <InputLabel htmlFor="my-input">Owner</InputLabel>
            <TextField id="my-input" aria-describedby="my-helper-text" {...register("owner")}/>
            <InputLabel htmlFor="my-input">Breed</InputLabel>
            <TextField id="my-input" aria-describedby="my-helper-text" {...register("breed")}/>
            <Button type='submit'>Submit</Button>
        </form>
    )
}