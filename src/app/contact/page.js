"use client";
import Contact from "@/components/home/Contact";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addEnquiryServ } from "../services/enquiry.services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(true);
  const ContactSchema = Yup.object().shape({
    fullName: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    contactNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    message: Yup.string().required("Please enter your message"),
  });
  return (
    <div className="fw-bold">
      <Contact/>


      <div
        className="fixed-bottom p-4 d-flex flex-column align-items-end"
        style={{ zIndex: 1050 }}
      >
        {isOpen && (
          <div className="d-flex flex-column gap-2 mb-3 animate__animated animate__fadeInUp">
            <a
              href="tel:+9188776 39698"
              className="btn btn-info shadow-sm rounded-pill d-flex align-items-center gap-2 border"
            >
              <i className="bi bi-telephone-fill text-success"></i> Call Us
            </a>
            <a
              href="https://wa.me/918877639698"
              target="_blank"
              rel="noopener noreferrer"
              className="btn  shadow-sm rounded-pill d-flex align-items-center gap-2 border text-light"
              style={{ background: "#1DAA61" }}
            >
              <i className="bi bi-whatsapp text-success"></i> WhatsApp
            </a>
            <button
              onClick={() => setShowEnquiryModal(true)}
              className="btn btn-warning shadow-sm rounded-pill d-flex align-items-center gap-2 border"
            >
              <i className="bi bi-pencil-square text-primary"></i> Enquiry Now
            </button>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`btn btn-light border shadow-lg rounded-circle d-flex align-items-center justify-content-center`}
          style={{ width: "60px", height: "60px", transition: "0.3s" }}
        >
          {isOpen ? (
            <img
              src="https://cdn-icons-png.flaticon.com/128/9068/9068699.png"
              style={{ height: "40px" }}
            />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/128/9364/9364065.png"
              style={{ height: "40px" }}
            />
          )}
        </button>
        {showEnquiryModal && (
          <div
            className="modal fade show d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1100,
            }}
            tabIndex="-1"
          >
            <div className="modal-dialog modal-lg">
              <div
                className="modal-content"
                style={{ borderRadius: "12px", border: "none shadow" }}
              >
                <div className="modal-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold mb-0">Quick Enquiry</h4>
                    <img
                      onClick={() => {
                        setShowEnquiryModal(false);
                      }}
                      src="https://cdn-icons-png.flaticon.com/128/2734/2734822.png"
                      style={{ height: "20px", cursor: "pointer" }}
                    />
                  </div>

                  <Formik
                    initialValues={{
                      fullName: "",
                      contactNumber: "",
                      email: "",
                      message: "",
                    }}
                    validationSchema={ContactSchema} // Aapka validation schema
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      try {
                        let response = await addEnquiryServ(values);
                        if (response?.data?.statusCode == "200") {
                          resetForm();
                          setShowEnquiryModal(false);
                          setIsOpen(false)
                          toast.success(response?.data?.message)
                        }
                      } catch (error) {
                        toast.error(error?.response?.data?.message)
                      } finally {
                        setSubmitting(false);
                      }
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <div className="row g-3">
                          {/* First Name */}
                          <div className="col-md-12">
                            <label className="form-label">Full Name</label>
                            <Field
                              name="fullName"
                              className="form-control"
                              placeholder="John Doe"
                            />
                            <ErrorMessage
                              name="fullName"
                              component="div"
                              className="text-danger small"
                            />
                          </div>

                          {/* Email */}
                          <div className="col-md-12">
                            <label className="form-label">Email Address</label>
                            <Field
                              name="email"
                              type="email"
                              className="form-control"
                              placeholder="john@example.com"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-danger small"
                            />
                          </div>

                          {/* Phone */}
                          <div className="col-md-12">
                            <label className="form-label">Phone Number</label>
                            <Field
                              name="contactNumber"
                              className="form-control"
                              placeholder="+91 00000 00000"
                            />
                            <ErrorMessage
                              name="contactNumber"
                              component="div"
                              className="text-danger small"
                            />
                          </div>

                          {/* Message */}
                          <div className="col-12">
                            <label className="form-label">
                              How can we help you?
                            </label>
                            <Field
                              as="textarea"
                              name="message"
                              rows={4}
                              className="form-control"
                              placeholder="Type your message here..."
                            />
                            <ErrorMessage
                              name="message"
                              component="div"
                              className="text-danger small"
                            />
                          </div>
                        </div>

                        <button
                          className="btn btn-primary w-100 mt-4 py-2 fw-bold"
                          type="submit"
                          disabled={isSubmitting}
                          style={{
                            backgroundColor: "#F27324",
                            borderColor: "#F27324",
                          }} 
                        >
                          {isSubmitting ? "Sending..." : "Submit Enquiry"}
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        )}

        {showEnquiryModal && <div className="modal-backdrop fade show"></div>}
      </div>
      
      
    </div>
  );
}
