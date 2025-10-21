// Temporary utility functions for the Little Lemon app
// In a real application, these would connect to actual APIs

export const submitAPI = (formData) => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate successful submission
      console.log('Form submitted:', formData);
      resolve(true);
    }, 1000);
  });
};

export const fetchAPI = (date) => {
  // Simulate fetching available times for a given date
  return new Promise((resolve) => {
    setTimeout(() => {
      const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      resolve(times);
    }, 500);
  });
};
