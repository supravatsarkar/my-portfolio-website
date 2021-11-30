import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w6jg65l', 'template_7wv03ln', form.current, 'user_yOsJMMteMH0bkKBidI9uW')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Done! Thank you');
            }, (error) => {
                console.log(error.text);
            });


    };

    return (
        <div className="container">
            <div className="row m-0">
                <div className="col d-none d-md-block col-md-2 "></div>
                <div className="mx-2 m-md-0 d-flex align-items-center col col-md-8 ">
                    <div className="w-100">
                        <h2 className="text-light">Contact Me</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label text-light">Name*</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"
                                    name="name"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label text-light">Email*</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                    name="email"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label text-light">Phone Number*</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="xxxxxxxxx"
                                    name="phone"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label text-light">Subject*</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Subject"
                                    name="subject"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label text-light">Message*</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                                    name="message"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" class="btn btn-warning mt-3">Send Me</button>
                        </form>
                    </div>
                </div>
                <div className="m-0 col d-none d-md-block col-md-2">

                </div>
            </div>

        </div>
    );
};

export default Contact;