import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const personal = t('personal', { returnObjects: true });
  const social = t('social', { returnObjects: true });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: t('contact_section.email'),
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Phone,
      title: t('contact_section.phone'),
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: MapPin,
      title: t('contact_section.location'),
      value: personal.location,
      href: `https://maps.google.com?q=${encodeURIComponent(personal.location)}`,
      color: "text-red-600 dark:text-red-400"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: social.github,
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: social.linkedin,
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: social.x,
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('contact_section.title')} <span className="gradient-text">{t('contact_section.highlight')}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('contact_section.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <Card>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('contact_section.form_title')}
                </h3>

                {submitStatus && (
                  <motion.div
                    className={`mb-6 p-4 rounded-lg flex items-center ${
                      submitStatus === 'success'
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <CheckCircle size={20} className="mr-2" />
                        {t('contact_section.form_success')}
                      </>
                    ) : (
                      <>
                        <AlertCircle size={20} className="mr-2" />
                        {t('contact_section.form_error')}
                      </>
                    )}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        {t('contact_section.form_firstname')} *
                      </label>
                      <input
                        {...register('firstName', { required: t('contact_section.form_firstname_error') })}
                        className={`w-full px-4 py-3 rounded-lg border cursor-target ${
                          errors.firstName
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-gray-300 dark:border-gray-600 focus:border-primary-500'
                        } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/20`}
                        placeholder={t('contact_section.form_firstname_placeholder')}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        {t('contact_section.form_lastname')} *
                      </label>
                      <input
                        {...register('lastName', { required: t('contact_section.form_lastname_error') })}
                        className={`w-full px-4 py-3 rounded-lg border cursor-target ${
                          errors.lastName
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-gray-300 dark:border-gray-600 focus:border-primary-500'
                        } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/20`}
                        placeholder={t('contact_section.form_lastname_placeholder')}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {t('contact_section.form_email')} *
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: t('contact_section.form_email_error'),
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: t('contact_section.form_email_invalid')
                        }
                      })}
                      className={`w-full px-4 py-3 rounded-lg border cursor-target ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-300 dark:border-gray-600 focus:border-primary-500'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/20`}
                      placeholder="john.doe@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {t('contact_section.form_subject')} *
                    </label>
                    <input
                      {...register('subject', { required: t('contact_section.form_subject_error') })}
                      className={`w-full px-4 py-3 rounded-lg border cursor-target ${
                        errors.subject
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-300 dark:border-gray-600 focus:border-primary-500'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/20`}
                      placeholder={t('contact_section.form_subject_placeholder')}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {t('contact_section.form_message')} *
                    </label>
                    <textarea
                      rows="5"
                      {...register('message', {
                        required: t('contact_section.form_message_error'),
                        minLength: {
                          value: 10,
                          message: t('contact_section.form_message_minlength')
                        }
                      })}
                      className={`w-full px-4 py-3 rounded-lg border cursor-target ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-300 dark:border-gray-600 focus:border-primary-500'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 resize-none`}
                      placeholder={t('contact_section.form_message_placeholder')}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        {t('contact_section.form_sending')}
                      </div>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        {t('contact_section.form_send_message')}
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div className="space-y-8" variants={itemVariants}>
              <Card>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('contact_section.contact_info')}
                </h3>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <motion.a
                        key={index}
                        href={method.href}
                        target={method.title === 'Location' ? '_blank' : undefined}
                        rel={method.title === 'Location' ? 'noopener noreferrer' : undefined}
                        className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`p-3 rounded-full bg-white dark:bg-gray-900 mr-4 ${method.color} group-hover:scale-110 transition-transform duration-200`}>
                          <IconComponent size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {method.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {method.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </Card>

              <Card>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('contact_section.follow_me')}
                </h3>
                
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent size={24} />
                      </motion.a>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300 text-sm text-center">
                    {t('contact_section.response_time')}
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;