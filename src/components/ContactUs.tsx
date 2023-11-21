import Link from "next/link";
import React, { ReactElement, ChangeEvent, useState } from "react";

interface ContactUSProps { }

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const ContactUs: React.FC<ContactUSProps> = (): ReactElement => {
    const [formData, setFormData] = useState<Inputs>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };



    //Send message via whatsapp
    let mobileNumber = process.env.mobileNumber;
    let text = `Hi, My name is ${formData.name}, my email is ${formData.email} \n${formData.subject} \n${formData.message}`;
    let encodedText = encodeURIComponent(text);
    let link = `https://wa.me/${mobileNumber}?text=${encodedText}`;




    return (
        <>
            <div
                id="pricing-area"
                className="pricing-area overlay overlay-black overlay-40 pt-90 pb-60"
            >
                <div className="container">
                    {/* Section Title */}
                    <div className="row">
                        <div className="section-title title-white text-center col-12 mb-45">
                            <h3 className="heading">Contact Us</h3>
                            <div className="excerpt">
                                <p>Reach out to our ever responsive customer support</p>
                            </div>
                            <i className="icofont icofont-traffic-light" />
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="contact-form form text-center col-lg-8 col-sm-7 col-12">
                            <form id="contact-form">
                                <div className="input-2">
                                    <div className="input">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="input">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="E-mail"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="input">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="input textarea">
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        defaultValue={""}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="input input-submit">
                                    <Link href={link} target="_blank" rel="noreferrer noorigin" className="btn transparent">
                                        Send Now
                                    </Link>

                                </div>
                            </form>
                            <p className="form-messege" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
