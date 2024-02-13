// CertificateSection.jsx
import React from "react";
import CertificateCard from "./CertificateCard";

const certificatesData = [
  {
    id: 1,
    title: "Certificate Title 1",
    image: "/images/certificates/1.png",
    verifyUrl: "https://example.com/verify/1",
  },
  {
    id: 2,
    title: "Certificate Title 2",
    image: "/images/certificates/2.png",
    verifyUrl: "https://example.com/verify/2",
  },
  // Add more certificate data as needed
];

const CertificateSection = () => {
  return (
    <section id="certificates">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Certificates
      </h2>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {certificatesData.map((certificate) => (
          <li key={certificate.id}>
            <CertificateCard
              imgUrl={certificate.image}
              verifyUrl={certificate.verifyUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CertificateSection;
