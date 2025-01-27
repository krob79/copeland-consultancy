import { useState } from 'react';
import axios from 'axios';

import './Footer.scss';

const FormContainer = ({signalSuccess})=> {

    const [formEmail, setFormEmail] = useState('');
    const [btnDisplay, setBtnDisplay] = useState('Submit');
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("----handlesubmit!!");
        
        
        // THIS ALL NEEDS TO BE UPDATED!
        const serviceId = 'service_y1kc843';
        const templateId = 'template_ss8ee2f';
        const publicKey = '7ua9E6hU3yYdqCI4x';

        const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
            from_email: formEmail
        }
        };
        if(email){
        try {
            setBtnDisplay('Sending...');
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log(res.data);
            setFormEmail('');
            setBtnDisplay('Message Sent!');
            signalSuccess();
            
        } catch (error) {
            console.error(error);
        }
        }else{
        console.log("----NOT SENDING - NO EMAIL LISTED");
        }
    }

    const validateEmail = (e) => {
        let email = e.target.value;
        let field = e.target;
        let emailRegEx = /^[a-zA-Z0-9.!#$%&’*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
        console.log(e.target.value);
        console.log("EMAIL MATCH: " + formEmail + " " + (email.match(emailRegEx) != null));   
        if(!email.match(emailRegEx)){
            console.log("----NOT GOOD");
            return false;
        }else{
            console.log("----GOOD");
            return true;
        }
      }

    return(
        <div className="form-container">
              <form method="POST" className="st-contact-form" id="contact-form" onSubmit={handleSubmit}>
              <p id="form-text">Sign up to receive updates from the Consultancy!</p>
                <div className="st-form-field">
                  {/* <input type="text" id="email" name="email" placeholder="Your Email" onChange={(e)=> setFormEmail(e.target.value)} value={formEmail || ""} required /> */}
                  <input type="text" id="email" name="email" placeholder="Your Email" onInput={validateEmail} onChange={(e)=> setFormEmail(e.target.value)} value={formEmail || ""} required />
                  <button className='btn' type="submit" id="submit" name="submit">{btnDisplay || ""}</button>
                </div>
                
              </form>
        </div>
    )

}

export default FormContainer;