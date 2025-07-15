import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";

const FreeReview = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 card-shadow max-w-md mx-auto lg:mx-0">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Free
              <br />
              <span className="text-gray-600">
                Case
                <br />
                Review
              </span>
            </h2>
          </div>

          <div className="relative">
            <div className="circle-badge gradient-purple-blue">
              <div className="text-center leading-tight">
                <div className="text-xs">ONLY</div>
                <div className="text-lg font-bold">6</div>
                <div className="text-xs">SLOTS LEFT</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="feature-item flex items-center gap-2">
            <HiCheckCircle className="text-green-600 text-xl" />
            <span className="text-gray-800 font-medium">100% Confidential</span>
          </div>

          <div className="feature-item flex items-center gap-2">
            <HiCheckCircle className="text-green-600 text-xl" />
            <span className="text-gray-800 font-medium">No Win, No Fee</span>
          </div>

          <div className="feature-item flex items-center gap-2">
            <HiCheckCircle className="text-green-600 text-xl" />
            <span className="text-gray-800 font-medium">
              Free Case Evaluation
            </span>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700 text-center">
            <span className="font-medium">We are here to help!</span>
          </p>
        </div>

        <button className="btn-secondary w-full justify-center flex items-center">
          Contact us
          <BsArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 card-shadow max-w-md mx-auto lg:mx-0">
        <h3 className="text-lg font-bold text-purple-700 mb-4">
          Have you or a loved one been affected by Mesothelioma?
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          As a woman, you've carried the weight of care, love, and resilience.
          Now it's time someone stands with you.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start">
            <span className="text-purple-600 mr-2">•</span>
            Secondary Asbestos exposure is common
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 mr-2">•</span>
            Mesothelioma delays are more frequent in women
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 mr-2">•</span>
            Women have won significant legal settlements
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FreeReview;
