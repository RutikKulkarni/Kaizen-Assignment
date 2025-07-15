import React from "react";
import Layout from "./components/Layout";
import FreeReview from "./components/FreeReview";
import ClaimForm from "./components/ClaimForm";

function App() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <FreeReview />
          </div>

          <div className="order-1 lg:order-2">
            <ClaimForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
