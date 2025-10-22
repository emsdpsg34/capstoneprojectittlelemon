import { useEffect } from "react";
import { Container, Top, Form, FormMessageError } from "./styles";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "./utils/temp";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({ availableTimes, dispatch, ...props }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      date: (new Date()).toLocaleDateString("en-CA"),
      time: availableTimes.times[0],
      guests: 1,
      occasion: "birthday",
    },
    onSubmit: (values) => {
      const response = submitAPI(values);
      if (response) {
        localStorage.setItem("Bookings", JSON.stringify(values));
        navigate("/confirmation");
        // console.log(values);
      };
    },
    validationSchema: Yup.object({
      date: Yup.date()
        .required("Date is required")
        .min(new Date(), "Date cannot be in the past")
        .max(new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), "Reservations can only be made up to 90 days in advance"),
      time: Yup.string()
        .oneOf(availableTimes.times, "Please select a valid time")
        .required("Time is required"),
      guests: Yup.number()
        .min(1, "Must be at least 1 guest")
        .max(10, "Maximum 10 guests allowed")
        .integer("Number of guests must be a whole number")
        .required("Number of guests is required"),
      occasion: Yup.string()
        .oneOf(["birthday", "engagement", "anniversary"], "Please select a valid occasion")
        .required("Occasion is required"),
    }),
  });

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
  }, [formik.values.date]);

  return (
    <Container {...props} id="menu">
      <Top>
        <h1>Book Now</h1>
      </Top>
      <Form onSubmit={formik.handleSubmit} noValidate>
        <label htmlFor="res-date">Choose date *</label>
        <input 
          type="date" 
          data-testid="res-date" 
          id="res-date" 
          {...formik.getFieldProps("date")}
          min={new Date().toISOString().split('T')[0]}
          max={new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
          required
        />
        <FormMessageError data-testid="res-date-error">
          {formik.touched.date && formik.errors.date}
        </FormMessageError>
        
        <label htmlFor="res-time">Choose time *</label>
        <select 
          data-testid="res-time" 
          id="res-time" 
          {...formik.getFieldProps("time")}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.times.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        <FormMessageError data-testid="res-time-error">
          {formik.touched.time && formik.errors.time}
        </FormMessageError>
        
        <label htmlFor="guests">Number of guests *</label>
        <input 
          data-testid="guests" 
          type="number" 
          placeholder="1" 
          min="1" 
          max="10" 
          id="guests" 
          {...formik.getFieldProps("guests")}
          required
        />
        <FormMessageError data-testid="guests-error">
          {formik.touched.guests && formik.errors.guests}
        </FormMessageError>
        
        <label htmlFor="occasion">Occasion *</label>
        <select 
          data-testid="occasion" 
          id="occasion" 
          {...formik.getFieldProps("occasion")}
          required
        >
          <option value="">Select an occasion</option>
          <option value="birthday" className="opt">Birthday</option>
          <option value="engagement" className="opt">Engagement</option>
          <option value="anniversary" className="opt">Anniversary</option>
        </select>
        <FormMessageError data-testid="occasion-error">
          {formik.touched.occasion && formik.errors.occasion}
        </FormMessageError>
        
        <input 
          data-testid="submit-btn" 
          type="submit" 
          value="Make Your reservation" 
          disabled={!formik.isValid || formik.isSubmitting}
        />
        
        {formik.isSubmitting && (
          <p style={{ color: '#495E57', textAlign: 'center' }}>
            Processing your reservation...
          </p>
        )}
      </Form>
    </Container>
  );
};

export default BookingForm;