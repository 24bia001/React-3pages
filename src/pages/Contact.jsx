import React from 'react';
export default function Contact() {
  const [sent, setSent] = React.useState(false);
  function submit(e) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }
  return (
    <section className="page contact">
      <div className="inner-title"><p className="eyebrow">CONTACT</p><h1>Let's build something <span>great.</span></h1><p>Have a project, idea or question? Send me a message and let's connect.</p></div>
      <div className="contact-grid">
        <div className="contact-info">
          <div><small>EMAIL</small><p>24bia001@suza.ac.tz</p></div>
          <div><small>ROLE</small><p>Web Developer & Designer</p></div>
          <div><small>AVAILABILITY</small><p>Open to interesting projects</p></div>
          <div className="quote">“Good design is not just what it looks like. It is how it works.”</div>
        </div>
        <form onSubmit={submit}>
          <label>Name<input required placeholder="Your name" /></label>
          <label>Email<input required type="email" placeholder="your@email.com" /></label>
          <label>Message<textarea required rows="6" placeholder="Tell me about your project..."></textarea></label>
          <button className="primary" type="submit">Send Message <b>→</b></button>
          {sent && <p className="success">Message ready to send. Thank you!</p>}
        </form>
      </div>
    </section>
  );
}

