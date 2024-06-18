'use client';

import { Button, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import axios, {isCancel, AxiosError} from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const {register, control, handleSubmit} = useForm<IssueForm>();

  return (
    <div className='max-w-xl space-y-3'>
    <form 
      className='max-w-xl space-y-3' 
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/issues', data)
        .then(response => {
          // Handle successful response
        })
        .catch(error => {
          console.error('AxiosError:', error);
          if (error.response) {
            console.error('Response data:', error.response.data);
          }
        });
        router.push('/issues');
      })}>
      <TextField.Root>
        <TextField.Input placeholder='Title' {...register('title')} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMDE placeholder='Description' {...field} />}
       />
      <Button>Submit New Issue</Button>
      </form>
    </div>
  )
}

export default NewIssuePage