import React, { useState } from "react";

const ClaimForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailId: "",
    dateOfBirth: "",
    jobTitle: "",
    dateOfDiagnosis: "",
    typeOfDiagnosis: "",
    story: "",
    agreeToPrivacy: false,
    verifyPerson: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-md mx-auto lg:max-w-lg">
      <div className="gradient-blue-purple rounded-2xl p-6 lg:p-8 card-shadow">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
          Claim Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number *"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="emailId"
                placeholder="Email ID *"
                value={formData.emailId}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="date"
                name="dateOfBirth"
                placeholder="Date of Birth *"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="form-input"
                required
              />
              <label className="absolute -top-2 left-4 text-xs text-white text-opacity-70">
                Date of Birth *
              </label>
            </div>
            <div>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title *"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="date"
                name="dateOfDiagnosis"
                placeholder="Date of Diagnosis *"
                value={formData.dateOfDiagnosis}
                onChange={handleInputChange}
                className="form-input"
                required
              />
              <label className="absolute -top-2 left-4 text-xs text-white text-opacity-70">
                Date of Diagnosis *
              </label>
            </div>
            <div>
              <select
                name="typeOfDiagnosis"
                value={formData.typeOfDiagnosis}
                onChange={handleInputChange}
                className="form-input"
                required
              >
                <option value="">Type of Diagnosis *</option>
                <option value="mesothelioma">Mesothelioma</option>
                <option value="lung-cancer">Lung Cancer</option>
                <option value="asbestosis">Asbestosis</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <textarea
              name="story"
              placeholder="Tell us your story (optional)"
              value={formData.story}
              onChange={handleInputChange}
              className="form-input min-h-[80px] resize-none"
              rows="3"
            />
          </div>

          <div className="space-y-3">
            <label className="flex items-start space-x-3 text-xs text-white">
              <input
                type="checkbox"
                name="agreeToPrivacy"
                checked={formData.agreeToPrivacy}
                onChange={handleInputChange}
                className="mt-1 rounded border-white border-opacity-30"
                required
              />
              <span>
                I agree to the{" "}
                <a href="#" className="underline hover:text-blue-200">
                  privacy policy
                </a>{" "}
                and{" "}
                <a href="#" className="underline hover:text-blue-200">
                  disclaimer
                </a>{" "}
                and give my express written consent to be contacted regarding my
                case options. I understand that I may be contacted using
                automatic dialing equipment. Message and data rates may apply.
                My consent does not require purchase. This is not legal
                advertising.
              </span>
            </label>

            <label className="flex items-start space-x-3 text-xs text-white">
              <input
                type="checkbox"
                name="verifyPerson"
                checked={formData.verifyPerson}
                onChange={handleInputChange}
                className="mt-1 rounded border-white border-opacity-30"
                required
              />
              <span>Please check this box to verify you're a person.</span>
            </label>
          </div>

          <button
            type="submit"
            className="btn-primary mt-6"
            disabled={!formData.agreeToPrivacy || !formData.verifyPerson}
          >
            Start your claim now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClaimForm;
