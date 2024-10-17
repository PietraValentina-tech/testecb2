import React from 'react';
import { Typography, Container, TextField, Button } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { control, handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Here you would typically send the form data to a server
    alert(t('messageSent'));
    reset();
  };

  return (
    <Container className="py-8">
      <Typography variant="h2" component="h1" gutterBottom>
        {t('contactTitle')}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: t('nameRequired') }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label={t('name')}
              fullWidth
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: t('emailRequired'),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t('invalidEmail'),
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label={t('email')}
              fullWidth
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{ required: t('messageRequired') }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label={t('message')}
              multiline
              rows={4}
              fullWidth
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          {t('send')}
        </Button>
      </form>
    </Container>
  );
};

export default Contact;