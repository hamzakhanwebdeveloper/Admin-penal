import React, { useState } from 'react';

const Setting = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [email, setEmail] = useState('user@example.com');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [dataExport, setDataExport] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [password, setPassword] = useState('');
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [timeZone, setTimeZone] = useState('UTC');
  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    twitter: '',
    linkedin: ''
  });

  // Handle theme toggle
  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  // Handle file upload for profile picture
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  // Handle password change
  const handlePasswordChange = () => {
    // Add logic to update password
    alert('Password Changed');
  };

  // Handle social media link update
  const handleSocialLinkChange = (platform, value) => {
    setSocialLinks({ ...socialLinks, [platform]: value });
  };

  // Handle 2FA toggle
  const toggle2FA = () => {
    setIs2FAEnabled(!is2FAEnabled);
  };

  return (
    <div className={`min-h-screen p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Personal Info Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
          <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
          <div className="space-y-4">
            {/* Profile Picture */}
            <div>
              <h3 className="font-semibold">Profile Picture</h3>
              <input
                type="file"
                onChange={handleProfilePictureChange}
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {profilePicture && (
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="mt-2 w-24 h-24 object-cover rounded-full"
                />
              )}
            </div>

            {/* Email */}
            <div>
              <h3 className="font-semibold">Email</h3>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Security & Preferences Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
          <h2 className="text-xl font-semibold mb-4">Security & Preferences</h2>
          <div className="space-y-4">
            {/* Theme */}
            <div>
              <h3 className="font-semibold">Theme Settings</h3>
              <button
                onClick={handleThemeChange}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              >
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </button>
            </div>

            {/* Password Change */}
            <div>
              <h3 className="font-semibold">Change Password</h3>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New password"
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <button
                onClick={handlePasswordChange}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
              >
                Change Password
              </button>
            </div>

            {/* Two-Factor Authentication */}
            <div>
              <h3 className="font-semibold">Two-Factor Authentication (2FA)</h3>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={is2FAEnabled}
                  onChange={toggle2FA}
                  className="mr-2"
                />
                <span>Enable 2FA</span>
              </div>
            </div>

            {/* Time Zone */}
            <div>
              <h3 className="font-semibold">Time Zone</h3>
              <select
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="UTC">UTC</option>
                <option value="GMT">GMT</option>
                <option value="EST">EST</option>
                <option value="PST">PST</option>
              </select>
            </div>
          </div>
        </div>

        {/* Social & Notifications Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
          <h2 className="text-xl font-semibold mb-4">Social & Notifications</h2>
          <div className="space-y-4">
            {/* Social Media Links */}
            <div>
              <h3 className="font-semibold">Social Media Links</h3>
              <div className="flex flex-col">
                <input
                  type="url"
                  value={socialLinks.facebook}
                  onChange={(e) => handleSocialLinkChange('facebook', e.target.value)}
                  placeholder="Facebook URL"
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-2"
                />
                <input
                  type="url"
                  value={socialLinks.twitter}
                  onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
                  placeholder="Twitter URL"
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-2"
                />
                <input
                  type="url"
                  value={socialLinks.linkedin}
                  onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                  placeholder="LinkedIn URL"
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>

            {/* Notifications */}
            <div>
              <h3 className="font-semibold">Notifications</h3>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={notificationsEnabled}
                  onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                  className="mr-2"
                />
                <span>Enable Notifications</span>
              </div>
            </div>

            {/* Save Changes */}
            <div>
              <button
                onClick={() => alert('Settings Saved')}
                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
