import React, { useState, useEffect } from 'react';
import initialData from './mockSettingsData.json';

export default function SettingsForm() {
  // Form State
  const [settings, setSettings] = useState(initialData);
  const [originalSettings, setOriginalSettings] = useState(initialData);
  
  // UI States
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null); // 'success' | 'error' | null
  const [errors, setErrors] = useState({});
  const [isDirty, setIsDirty] = useState(false);

  // Check if form has unsaved changes (dirty check)
  useEffect(() => {
    const hasChanges = JSON.stringify(settings) !== JSON.stringify(originalSettings);
    setIsDirty(hasChanges);
  }, [settings, originalSettings]);

  // Validation Logic
  const validateField = (name, value) => {
    let error = '';
    if (name === 'fullName') {
      if (!value.trim()) error = 'Full name is required.';
      else if (value.trim().length < 2) error = 'Name must be at least 2 characters.';
    }
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) error = 'Email is required.';
      else if (!emailRegex.test(value)) error = 'Please enter a valid email address.';
    }
    return error;
  };

  // Change Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleNestedChange = (parent, field, value) => {
    setSettings((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value,
      },
    }));
  };

  const handleNotificationToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key],
      },
    }));
  };

  // Reset Handler
  const handleReset = () => {
    setSettings(JSON.parse(JSON.stringify(originalSettings)));
    setErrors({});
    setSaveStatus(null);
  };

  // Save Handler
  const handleSave = (e) => {
    e.preventDefault();

    // Run final validation on main fields
    const nameError = validateField('fullName', settings.fullName);
    const emailError = validateField('email', settings.email);

    if (nameError || emailError) {
      setErrors({
        fullName: nameError,
        email: emailError,
      });
      setSaveStatus('error');
      return;
    }

    setIsSaving(true);
    setSaveStatus(null);

    // Simulate API call to save settings
    setTimeout(() => {
      setIsSaving(false);
      setOriginalSettings(JSON.parse(JSON.stringify(settings)));
      setSaveStatus('success');
      // Clear success alert after 4 seconds
      setTimeout(() => setSaveStatus(null), 4000);
    }, 1500);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 p-4 md:p-8 ${
      settings.theme === 'dark' ? 'bg-[#0b1329] text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-700/30 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                StadiumGPT
              </h1>
            </div>
            <p className="text-sm opacity-70">Customize your personalized matchday & venue assistant settings.</p>
          </div>

          {/* Saved / Unsaved status pill */}
          <div className="flex items-center gap-3">
            {isDirty && !isSaving && (
              <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Unsaved Draft
              </span>
            )}
            {!isDirty && !saveStatus && (
              <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-slate-500/10 text-slate-400 border border-slate-500/20">
                Synced with Cloud
              </span>
            )}
          </div>
        </header>

        {/* Global Notifications Alert */}
        {saveStatus === 'success' && (
          <div className="mb-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 flex items-center gap-3 animate-fadeIn">
            <svg className="w-5 h-5 flex-shrink-0 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-semibold text-sm">Settings updated successfully!</p>
              <p className="text-xs opacity-80">Your profile, stadium information, and notification preferences are now active.</p>
            </div>
          </div>
        )}

        {saveStatus === 'error' && (
          <div className="mb-6 p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-400 flex items-center gap-3 animate-fadeIn">
            <svg className="w-5 h-5 flex-shrink-0 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="font-semibold text-sm">Failed to save settings</p>
              <p className="text-xs opacity-80">Please check the validation errors and try again.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          
          {/* Main Grid: Split into Profile & Stadium / Notifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Section 1: User Profile & Preferences */}
            <section className={`p-6 rounded-2xl border transition-all duration-200 ${
              settings.theme === 'dark' 
                ? 'bg-[#121c38] border-slate-700/50 hover:border-slate-600/50' 
                : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold">Profile & Appearance</h2>
              </div>

              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-85">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={settings.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
                      settings.theme === 'dark'
                        ? 'bg-[#0f172a] border-slate-700 focus:ring-teal-500/40 text-slate-100'
                        : 'bg-slate-50 border-slate-300 focus:ring-teal-500/20 text-slate-800'
                    } ${errors.fullName ? 'border-rose-500 focus:ring-rose-500/20' : ''}`}
                    placeholder="E.g. Subash Kumar S"
                  />
                  {errors.fullName && <p className="text-xs text-rose-500 mt-1.5">{errors.fullName}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-85">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={settings.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
                      settings.theme === 'dark'
                        ? 'bg-[#0f172a] border-slate-700 focus:ring-teal-500/40 text-slate-100'
                        : 'bg-slate-50 border-slate-300 focus:ring-teal-500/20 text-slate-800'
                    } ${errors.email ? 'border-rose-500 focus:ring-rose-500/20' : ''}`}
                    placeholder="email@example.com"
                  />
                  {errors.email && <p className="text-xs text-rose-500 mt-1.5">{errors.email}</p>}
                </div>

                {/* Language Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-85">Language</label>
                  <div className="relative">
                    <select
                      name="language"
                      value={settings.language}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm appearance-none transition-all focus:outline-none focus:ring-2 ${
                        settings.theme === 'dark'
                          ? 'bg-[#0f172a] border-slate-700 focus:ring-teal-500/40 text-slate-100'
                          : 'bg-slate-50 border-slate-300 focus:ring-teal-500/20 text-slate-800'
                      }`}
                    >
                      <option value="en">English (US)</option>
                      <option value="es">Español (ES)</option>
                      <option value="fr">Français (FR)</option>
                      <option value="de">Deutsch (DE)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 opacity-50">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Theme Selector (Custom Toggle Buttons) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-85">App Theme</label>
                  <div className={`grid grid-cols-2 gap-2 p-1 rounded-xl ${
                    settings.theme === 'dark' ? 'bg-[#0f172a]' : 'bg-slate-100'
                  }`}>
                    <button
                      type="button"
                      onClick={() => setSettings((prev) => ({ ...prev, theme: 'light' }))}
                      className={`py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                        settings.theme === 'light'
                          ? 'bg-white shadow text-teal-600'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                      </svg>
                      Light
                    </button>
                    <button
                      type="button"
                      onClick={() => setSettings((prev) => ({ ...prev, theme: 'dark' }))}
                      className={`py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                        settings.theme === 'dark'
                          ? 'bg-slate-800 shadow text-emerald-400 border border-slate-700/50'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                      Dark
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Right Column Container */}
            <div className="space-y-6">

              {/* Section 2: Stadium-Specific Settings */}
              <section className={`p-6 rounded-2xl border transition-all duration-200 ${
                settings.theme === 'dark' 
                  ? 'bg-[#121c38] border-slate-700/50 hover:border-slate-600/50' 
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold">Stadium & Matchday</h2>
                </div>

                <div className="space-y-5">
                  {/* Matchday Role */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-85">Matchday Role</label>
                    <div className="relative">
                      <select
                        name="role"
                        value={settings.role}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm appearance-none transition-all focus:outline-none focus:ring-2 ${
                          settings.theme === 'dark'
                            ? 'bg-[#0f172a] border-slate-700 focus:ring-emerald-500/40 text-slate-100'
                            : 'bg-slate-50 border-slate-300 focus:ring-emerald-500/20 text-slate-800'
                        }`}
                      >
                        <option value="Fan">Fan (Spectator)</option>
                        <option value="Volunteer">Volunteer Helper</option>
                        <option value="Organiser">Event Organiser</option>
                        <option value="Venue Staff">Venue Staff / Security</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 opacity-50">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Fields Conditional on Role */}
                  {settings.role === 'Fan' ? (
                    <div className="p-4 rounded-xl border border-dashed border-teal-500/20 bg-teal-500/5 space-y-4 animate-fadeIn">
                      <h3 className="text-xs font-bold text-teal-400 uppercase tracking-wide">Ticket Seat Assignment</h3>
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold uppercase mb-1 opacity-75">Section</label>
                          <input
                            type="text"
                            value={settings.seatDetails.section}
                            onChange={(e) => handleNestedChange('seatDetails', 'section', e.target.value)}
                            className={`w-full px-3 py-1.5 rounded text-xs uppercase text-center font-bold border ${
                              settings.theme === 'dark'
                                ? 'bg-[#0c111d] border-slate-700 text-slate-200'
                                : 'bg-white border-slate-300 text-slate-800'
                            }`}
                            placeholder="E.g. 114"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase mb-1 opacity-75">Row</label>
                          <input
                            type="text"
                            value={settings.seatDetails.row}
                            onChange={(e) => handleNestedChange('seatDetails', 'row', e.target.value)}
                            className={`w-full px-3 py-1.5 rounded text-xs uppercase text-center font-bold border ${
                              settings.theme === 'dark'
                                ? 'bg-[#0c111d] border-slate-700 text-slate-200'
                                : 'bg-white border-slate-300 text-slate-800'
                            }`}
                            placeholder="E.g. M"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase mb-1 opacity-75">Seat</label>
                          <input
                            type="text"
                            value={settings.seatDetails.seat}
                            onChange={(e) => handleNestedChange('seatDetails', 'seat', e.target.value)}
                            className={`w-full px-3 py-1.5 rounded text-xs uppercase text-center font-bold border ${
                              settings.theme === 'dark'
                                ? 'bg-[#0c111d] border-slate-700 text-slate-200'
                                : 'bg-white border-slate-300 text-slate-800'
                            }`}
                            placeholder="E.g. 15"
                          />
                        </div>
                      </div>
                      <p className="text-[10px] opacity-70 leading-relaxed text-teal-300/90">
                        * Used to construct optimal route maps directly to your stadium seat, nearest food stalls, and restrooms.
                      </p>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl border border-dashed border-emerald-500/20 bg-emerald-500/5 space-y-4 animate-fadeIn">
                      <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wide">Staff Work Details</h3>
                      
                      {/* Assigned Zone */}
                      <div>
                        <label className="block text-[10px] font-bold uppercase mb-1 opacity-75">Assigned Duty Zone</label>
                        <input
                          type="text"
                          value={settings.staffDetails.assignedZone}
                          onChange={(e) => handleNestedChange('staffDetails', 'assignedZone', e.target.value)}
                          className={`w-full px-3 py-2 rounded text-xs font-medium border ${
                            settings.theme === 'dark'
                              ? 'bg-[#0c111d] border-slate-700 text-slate-200'
                              : 'bg-white border-slate-300 text-slate-800'
                          }`}
                          placeholder="Zone or gate location"
                        />
                      </div>

                      {/* Shift Time */}
                      <div>
                        <label className="block text-[10px] font-bold uppercase mb-1 opacity-75">Scheduled Shift</label>
                        <input
                          type="text"
                          value={settings.staffDetails.shiftTime}
                          onChange={(e) => handleNestedChange('staffDetails', 'shiftTime', e.target.value)}
                          className={`w-full px-3 py-2 rounded text-xs font-medium border ${
                            settings.theme === 'dark'
                              ? 'bg-[#0c111d] border-slate-700 text-slate-200'
                              : 'bg-white border-slate-300 text-slate-800'
                          }`}
                          placeholder="00:00 - 00:00"
                        />
                      </div>
                      <p className="text-[10px] opacity-70 leading-relaxed text-emerald-300/90">
                        * Configures emergency alerts, crowd reports, and organizer dashboard permissions.
                      </p>
                    </div>
                  )}
                </div>
              </section>

              {/* Section 3: Notification Management */}
              <section className={`p-6 rounded-2xl border transition-all duration-200 ${
                settings.theme === 'dark' 
                  ? 'bg-[#121c38] border-slate-700/50 hover:border-slate-600/50' 
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold">Alert Notification Hub</h2>
                </div>

                <div className="space-y-4">
                  {/* Push Notifications Toggle */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700/10 last:border-none last:pb-0">
                    <div>
                      <p className="text-sm font-semibold">Real-Time Push Alerts</p>
                      <p className="text-[11px] opacity-70">Interactive seat routing & live event score updates.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleNotificationToggle('push')}
                      className={`w-11 h-6 flex items-center rounded-full p-0.5 transition-all duration-300 focus:outline-none ${
                        settings.notifications.push ? 'bg-emerald-500' : 'bg-slate-400/30'
                      }`}
                    >
                      <div className={`bg-white w-5 h-5 rounded-full shadow transform duration-300 ${
                        settings.notifications.push ? 'translate-x-5' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>

                  {/* Email Digests Toggle */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700/10 last:border-none last:pb-0">
                    <div>
                      <p className="text-sm font-semibold">Weekly Email Newsletter</p>
                      <p className="text-[11px] opacity-70">Upcoming events, volunteer schedules, and matchday recaps.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleNotificationToggle('email')}
                      className={`w-11 h-6 flex items-center rounded-full p-0.5 transition-all duration-300 focus:outline-none ${
                        settings.notifications.email ? 'bg-emerald-500' : 'bg-slate-400/30'
                      }`}
                    >
                      <div className={`bg-white w-5 h-5 rounded-full shadow transform duration-300 ${
                        settings.notifications.email ? 'translate-x-5' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>

                  {/* SMS Warnings Toggle */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700/10 last:border-none last:pb-0">
                    <div>
                      <p className="text-sm font-semibold">Emergency SMS Broadcasts</p>
                      <p className="text-[11px] opacity-70">Weather alerts, gate disruptions, and crowd evacuations.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleNotificationToggle('sms')}
                      className={`w-11 h-6 flex items-center rounded-full p-0.5 transition-all duration-300 focus:outline-none ${
                        settings.notifications.sms ? 'bg-emerald-500' : 'bg-slate-400/30'
                      }`}
                    >
                      <div className={`bg-white w-5 h-5 rounded-full shadow transform duration-300 ${
                        settings.notifications.sms ? 'translate-x-5' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Action Footer */}
          <footer className="mt-8 flex flex-col sm:flex-row justify-end items-center gap-3">
            <button
              type="button"
              disabled={!isDirty || isSaving}
              onClick={handleReset}
              className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                settings.theme === 'dark'
                  ? 'border-slate-700 hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent'
                  : 'border-slate-300 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent'
              }`}
            >
              Reset to Defaults
            </button>
            <button
              type="submit"
              disabled={!isDirty || isSaving}
              className="w-full sm:w-auto px-8 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-[#0b1329] shadow-lg disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all"
            >
              {isSaving ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#0b1329]" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving to Cloud...
                </>
              ) : (
                'Save Settings'
              )}
            </button>
          </footer>

        </form>
      </div>
    </div>
  );
}
