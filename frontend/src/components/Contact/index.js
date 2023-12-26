import { Box, Grid, Typography } from "@mui/material";
import { Formik } from 'formik';


function Contact() {
  return (
    <Box id='contact' sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', gap: '2rem', padding: '1rem 0 2rem 0', borderTop: '2px solid #777'}}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
        <Typography
          variant="h1"
          sx={{
            marginBottom: "0.5rem",
            fontSize: {xs: "3rem", lg: "5rem"},
            fontFamily: "UfcFont, sans-serif",
            textAlign: "center",
            color: 'white'
          }}
        >
          Contact
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', padding: '0 2rem' }}>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
            }
            if (!values.email) {
              errors.email = 'Required';
            }
            if (!values.message) {
              errors.message = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Name"
                style={{width: '50%', height: '50px', marginBottom: '1rem', padding: '1rem'}}
              />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
                style={{width: '50%', height: '50px', marginBottom: '1rem', padding: '1rem'}}
              />
              <textarea
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                placeholder="Message"
                style={{width: '50%', height: '150px', marginBottom: '1rem', padding: '1rem'}}
              />
              <button type="submit" disabled={isSubmitting} style={{width: '20%', height: '50px', marginBottom: '1rem', padding: '0 1rem'}}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  )
};

export default Contact;