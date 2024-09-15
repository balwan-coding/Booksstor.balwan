import React from 'react'

export default function ContactPage() {
  return (
    
    <main>
        <section className="contact-info">
            <h2>General Inquiries</h2>
            <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
            <p>Phone: +1 (123) 456-7890</p>
        </section>
        
        <section className="contact-info">
            <h2>Customer Support</h2>
            <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
            <p>Phone: +1 (123) 456-7891</p>
            <p>Hours: Monday - Friday, 9 AM - 6 PM (EST)</p>
        </section>
        
        <section className="contact-info">
            <h2>Business Inquiries</h2>
            <p>Email: <a href="mailto:business@example.com">business@example.com</a></p>
            <p>Phone: +1 (123) 456-7892</p>
        </section>
        
        <section className="contact-info">
            <h2>Visit Us</h2>
            <p>Address:</p>
            <p>123 Business Rd, Suite 400</p>
            <p>City, State, ZIP Code</p>
            <p>Office Hours: Monday - Friday, 9 AM - 5 PM (EST)</p>
        </section>

        <section className="social-media">
            <h2>Follow Us</h2>
            <p><a href="https://facebook.com/example" target="_blank">Facebook</a></p>
            <p><a href="https://twitter.com/example" target="_blank">Twitter</a></p>
            <p><a href="https://instagram.com/example" target="_blank">Instagram</a></p>
            <p><a href="https://linkedin.com/company/example" target="_blank">LinkedIn</a></p>
        </section>
        
        <section className="contact-form">
            <h2>Send Us a Message</h2>
            <form action="submit_form.php" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
                
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
                
                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>
  )
}
