import { Typography, Box, Button, FormControl, Input, InputLabel, TextField } from '@mui/material' 
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useForm, FormProvider, useFormContext, Controller } from "react-hook-form"

            {/* <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker label="Basic date picker" />
                        </DemoContainer>
                    </LocalizationProvider>
                    <button type="submit">Submit</button>
                </form>
            </FormProvider> */}


export const Register = () => {
    const { register, getValues, control } = useForm() 

    const handleSubmit = (event) => {
        event.preventDefault();
        const formValues = getValues()

        const formattedValues = { ...formValues, date: formValues.date.$d}
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