import { Button, InputLabel, TextField, Autocomplete} from '@mui/material' 
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useForm, Controller } from "react-hook-form"

export const Register = () => {
    const { register, getValues, control } = useForm() 
    const handleSubmit = (event) => {
        event.preventDefault();
        const formValues = getValues()

        const formattedValues = { ...formValues, date: formValues.date.$d.toISOString()}
        console.log(formattedValues, 'formvalues');
  }

    return (
        <form onSubmit={handleSubmit}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <TextField id="my-input" aria-describedby="my-helper-text" {...register("email")}/>

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
            />
            
            <Button type='submit'>Submit</Button>
        </form>
    )
}