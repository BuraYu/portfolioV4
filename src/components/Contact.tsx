import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact: React.FunctionComponent<{}> = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const alreadySent = localStorage.getItem("emailSent");
    if (alreadySent === "true") {
      setIsSubmitted(true);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      localStorage.setItem("emailSent", "true");
      console.log("Email sent successfully:", result);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      alert("Something went wrong. Please try again later.");
    }

    setIsLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "burak.yueksel@hotmail.com",
      href: "mailto:burak.yueksel@hotmail.com",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+49 (163) 88 71 88 1",
      href: "tel:+491638871881",
    },
    {
      icon: MapPin,
      label: "127.0.0.1",
      value: "Berlin",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-teal-900/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {t("contact.title")}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("contact.mainParagraph")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8" data-aos="fade-right">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  {t("contact.subTitle")}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  {t("contact.subParagraph")}
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {item.label}
                      </p>
                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {t("contact.response")}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("contact.responseParagraph")}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
              data-aos="fade-left"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {t("contact.form.messageSuccess")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("contact.form.messageSuccessText")}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      localStorage.removeItem("emailSent");
                    }}
                    className="mt-4 text-sm text-blue-600 hover:underline"
                  >
                    {t("contact.form.sendAnotherMessage")}
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {t("contact.form.titleMessage")}
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          {t("contact.form.name")}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
                          placeholder={t("contact.form.yourName")}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          {t("contact.form.email")}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
                          placeholder={t("contact.form.yourEmail")}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        {t("contact.form.subject")}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
                        placeholder={t("contact.form.subjectMessage")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        {t("contact.form.message")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200 resize-none"
                        placeholder={t("contact.form.project")}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          {t("contact.form.sendMessage")}
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
