import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Grid,
  Alert,
  CircularProgress,
  MenuItem,
  Typography,
  Paper,
  Divider,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PrintIcon from '@mui/icons-material/Print';

const visitTypes = [
  'Factory Tour',
  'Capabilities Discussion',
  'Sampling',
  'Event Registration',
];

function BookingForm() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    visitType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    eventName: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const eventName = params.get('event');
    if (eventName) {
      setFormData((prev) => ({
        ...prev,
        visitType: 'Event Registration',
        eventName: decodeURIComponent(eventName),
      }));
    }
  }, [location]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\+?[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.visitType) {
      newErrors.visitType = 'Visit type is required';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Preferred date is required';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setLoading(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleNewBooking = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      visitType: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
      eventName: '',
    });
  };

  if (submitted) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          border: '1px solid',
          borderColor: 'divider',
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <CheckCircleOutlineIcon
            sx={{
              fontSize: 64,
              color: 'success.main',
              mb: 2,
            }}
          />
          <Typography variant="h4" sx={{ mb: 2 }}>
            Booking Confirmed!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Thank you for booking with Skylark Textiles. We will contact you shortly to
            confirm your visit.
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Booking Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                Name
              </Typography>
              <Typography variant="body1" fontWeight={500}>
                {formData.name}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                Company
              </Typography>
              <Typography variant="body1" fontWeight={500}>
                {formData.company}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                Email
              </Typography>
              <Typography variant="body1" fontWeight={500}>
                {formData.email}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                Phone
              </Typography>
              <Typography variant="body1" fontWeight={500}>
                {formData.phone}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                Visit Type
              </Typography>
              <Typography variant="body1" fontWeight={500}>
                {formData.visitType}
              </Typography>
            </Grid>
            {formData.eventName && (
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  Event
                </Typography>
                <Typography variant="body1" fontWeight={500}>
                  {formData.eventName}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                Preferred Date
              </Typography>
              <Typography variant="body1" fontWeight={500}>
                {new Date(formData.preferredDate).toLocaleDateString()}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                Preferred Time
              </Typography>
              <Typography variant="body1" fontWeight={500}>
                {formData.preferredTime}
              </Typography>
            </Grid>
            {formData.message && (
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  Message
                </Typography>
                <Typography variant="body1" fontWeight={500}>
                  {formData.message}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 4 }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
          >
            Print
          </Button>
          <Button variant="contained" color="secondary" onClick={handleNewBooking}>
            New Booking
          </Button>
        </Box>
      </Paper>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            error={!!errors.company}
            helperText={errors.company}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            label="Visit Type"
            name="visitType"
            value={formData.visitType}
            onChange={handleChange}
            error={!!errors.visitType}
            helperText={errors.visitType}
            required
          >
            {visitTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        {formData.eventName && (
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Event Name"
              name="eventName"
              value={formData.eventName}
              disabled
            />
          </Grid>
        )}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Preferred Date"
            name="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={handleChange}
            error={!!errors.preferredDate}
            helperText={errors.preferredDate}
            required
            InputLabelProps={{ shrink: true }}
            inputProps={{
              min: new Date().toISOString().split('T')[0],
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Preferred Time"
            name="preferredTime"
            type="time"
            value={formData.preferredTime}
            onChange={handleChange}
            error={!!errors.preferredTime}
            helperText={errors.preferredTime}
            required
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message (Optional)"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            disabled={loading}
            endIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
            sx={{ minWidth: 200 }}
          >
            {loading ? 'Submitting...' : 'Submit Booking'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BookingForm;
