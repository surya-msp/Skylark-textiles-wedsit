import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Grid,
  Alert,
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
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

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
    setStatus({ type: '', message: '' });

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus({
      type: 'success',
      message: 'Thank you for your message! We will get back to you shortly.',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setLoading(false);
  };

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
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            error={!!errors.subject}
            helperText={errors.subject}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={!!errors.message}
            helperText={errors.message}
            required
            multiline
            rows={6}
          />
        </Grid>

        {status.message && (
          <Grid item xs={12}>
            <Alert severity={status.type}>{status.message}</Alert>
          </Grid>
        )}

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
            disabled={loading}
            sx={{ minWidth: 200 }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactForm;
