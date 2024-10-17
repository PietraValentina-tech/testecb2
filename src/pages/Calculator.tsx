import React, { useState } from 'react';
import { Typography, Container, TextField, Button, CircularProgress, Paper } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { jsPDF } from 'jspdf';

interface CalculatorFormData {
  co2Emissions: number;
  energyUsage: number;
  renewableEnergy: number;
  vehicleType: string;
  fuelConsumption: number;
}

const Calculator: React.FC = () => {
  const { t } = useTranslation();
  const { control, handleSubmit } = useForm<CalculatorFormData>();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const onSubmit = async (data: CalculatorFormData) => {
    setLoading(true);
    // Simulate AI calculation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const calculatedResult = Math.random() * 1000;
    setResult(calculatedResult);
    setLoading(false);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Carbon Credit Calculator Report', 20, 20);
    doc.text(`Result: ${result?.toFixed(2)} carbon credits`, 20, 30);
    doc.save('carbon-credit-report.pdf');
  };

  return (
    <Container className="py-8">
      <Typography variant="h2" component="h1" gutterBottom>
        {t('calculatorTitle')}
      </Typography>
      <Paper className="p-4 mb-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Controller
            name="co2Emissions"
            control={control}
            defaultValue={0}
            rules={{ required: t('fieldRequired'), min: 0 }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t('co2Emissions')}
                type="number"
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="energyUsage"
            control={control}
            defaultValue={0}
            rules={{ required: t('fieldRequired'), min: 0 }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t('energyUsage')}
                type="number"
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="renewableEnergy"
            control={control}
            defaultValue={0}
            rules={{ required: t('fieldRequired'), min: 0, max: 100 }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t('renewableEnergy')}
                type="number"
                fullWidth
                error={!!error}
                helperText={error?.message || t('percentageHint')}
              />
            )}
          />
          <Controller
            name="vehicleType"
            control={control}
            defaultValue=""
            rules={{ required: t('fieldRequired') }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t('vehicleType')}
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="fuelConsumption"
            control={control}
            defaultValue={0}
            rules={{ required: t('fieldRequired'), min: 0 }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t('fuelConsumption')}
                type="number"
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
          <Button type="submit" variant="contained" color="primary" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : t('calculate')}
          </Button>
        </form>
      </Paper>
      {result !== null && (
        <Paper className="p-4">
          <Typography variant="h5" gutterBottom>
            {t('result')}
          </Typography>
          <Typography variant="body1">
            {t('carbonCredits', { credits: result.toFixed(2) })}
          </Typography>
          <Button onClick={generatePDF} variant="contained" color="secondary" className="mt-4">
            {t('downloadPDF')}
          </Button>
        </Paper>
      )}
    </Container>
  );
};

export default Calculator;