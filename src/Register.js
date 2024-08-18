import { Button, InputLabel, TextField, Autocomplete} from '@mui/material' 
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useForm, Controller } from "react-hook-form"

export const Register = () => {
    const { register, getValues, control } = useForm() 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formValues = getValues()

        //const formattedValues = { ...formValues, date: formValues.date?.$d?.toISOString()}
        const formattedValues = { ...formValues }
                
        fetch('http://localhost:3000/api/create/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formattedValues)
        })
  }

    return (
        <form onSubmit={handleSubmit}>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <TextField id="my-input" aria-describedby="my-helper-text" {...register("name")}/>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <TextField id="my-input" aria-describedby="my-helper-text" {...register("email")}/>
            <InputLabel htmlFor="my-input">Phone Number</InputLabel>
            <TextField id="my-input" aria-describedby="my-helper-text" {...register("telephone")}/>

            {/* Date Component
            <Controller
                name="date"
                control={control}
                rules={{ required: true }}
                defaultValue={null}
                render={({ field }) =>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DatePicker']}>
                        <DatePicker
                            label="Date"
                            format="DD/MM/YYYY"
                            value={field.value}
                            inputRef={field.ref}
                            onChange={(date) => {
                                field.onChange(date);
                            }}
                        />
                        </DemoContainer>
                    </LocalizationProvider>
                }
            /> */}
            
            <Button type='submit'>Submit</Button>
        </form>
    )
}