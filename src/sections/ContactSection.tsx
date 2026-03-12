import {
  useRef,
  useState,
  type ChangeEvent,
  type SubmitEventHandler,
} from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import ContactFormConfirmation from "../components/ContactFormConfirmation";

const ContactSection = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // handle form submission logic here
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        {
          publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        },
      );
      // show our custom confirmation toast component
      toast(<ContactFormConfirmation name={formData.name} />);
    } catch (error) {
      console.error("EmailJS Error", error);
    } finally {
      setLoading(false);
    }

    console.log("Form Submitted:", formData);
    // Reset Form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get In Touch With Me"
          sub="📞 Contact Information"
        />
        <div className="mt-16 grid-12-cols">
          {/* Contact Form - Left Side */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name ..."
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email Address ..."
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message ..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <button type="submit" disabled={isLoading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {isLoading ? "Sending ..." : "SendMessage"}
                    </p>
                    {!isLoading && (
                      <div className="arrow-wrapper">
                        <img src="/images/arrow-down.svg" alt="arrow-down" />
                      </div>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
          {/* right side */}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
