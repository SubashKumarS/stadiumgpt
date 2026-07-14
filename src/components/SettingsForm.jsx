import React, { useState } from 'react';

const SettingsForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    language: 'en',
    theme: false, // false: light, true: dark
    notifications: true,
    stadiumRole: 'fan',
  });
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (name === 'email') setEmailError(validateEmail(value) ? '' : 'Invalid email');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(formData.email)) {
      console.log('Form data:', formData);
      // Handle submission
    } else {
      setEmailError('Invalid email');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      <div>
        <label className="block text-sm font-medium">Full Name</label>
        <input name="fullName" value={formData.fullName} onChange={handleChange} className="w-full border p-2 rounded" />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input name="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" />
        {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Language</label>
        <select name="language" value={formData.language} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <label>Dark Theme</label>
        <input type="checkbox" name="theme" checked={formData.theme} onChange={handleChange} />
      </div>
      <div className="flex items-center justify-between">
        <label>Notifications</label>
        <input type="checkbox" name="notifications" checked={formData.notifications} onChange={handleChange} />
      </div>
      <div>
        <label className="block text-sm font-medium">Stadium Role</label>
        <select name="stadiumRole" value={formData.stadiumRole} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="fan">Fan</option>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded font-bold">Save</button>
    </form>
  );
};

export default SettingsForm;
