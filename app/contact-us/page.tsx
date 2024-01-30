import Button from '@/components/ui/button/Button';

const ContactUsPage = () => {
  return (
    <div className='contact-us-page'>
      <section
        className='contact-us-section section section-with-bg-img h-screen'
        style={{
          backgroundImage: `url('/images/hero-bg/contact-us-bg.webp')`,
          backgroundPosition: 'center',
        }}
      >
        <div className='bg-img-overlay' />

        <h2 className='contact-us-title section-title section-title-with-bg-img'>
          Contact Us
        </h2>

        <div className='message-to-inquirer-container text-neutral-400 text-sm relative text-center -mt-6 -mb-6'>
          <p className='message-to-inquirer'>
            Thank you for your interest in Powerhouse Funding!
          </p>

          <p className='message-to-inquirer'>
            Please fill out the form below and a member of our team will be in
            touch with you shortly.
          </p>
        </div>

        <div className='contact-us-content card card-dark text-neutral-50'>
          <form className='contact-us-form flex flex-col gap-3' action=''>
            <div className='flex items-center gap-3 justify-between'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                required
                className='shadow appearance-none border rounded py-2 px-3 text-gray-800 w-72 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>

            <div className='flex items-center gap-3 justify-between'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                className='shadow appearance-none border rounded py-2 px-3 text-gray-800 w-72 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>

            <div className='flex items-center gap-3 justify-between'>
              <label htmlFor='phone'>Phone</label>
              <input
                type='tel'
                id='phone'
                name='phone'
                required
                className='shadow appearance-none border rounded py-2 px-3 text-gray-800 w-72 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>

            <div className='flex items-center gap-3 justify-between'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                className='shadow appearance-none border rounded py-2 px-3 text-gray-800 w-72 leading-tight focus:outline-none focus:shadow-outline h-24'
              ></textarea>
            </div>

            <Button
              className='contact-us-form-btn mx-auto mt-2'
              btnType='primary'
              goTo='/contact-us'
            >
              <input
                className='cursor-pointer'
                type='submit'
                value='Send Message'
              />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
