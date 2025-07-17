import React from 'react'

const AboutContent = () => {
  return (
       <div className="container py-12">

        {/* العنوان مع خطوط جانبية */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex-1 h-px bg-gray-400"></div>
          <h3 className="mx-4 text-xl md:text-2xl font-serif italic text-gray-800 text-center">
            120 Years of Brewing Fine Tea
          </h3>
          <div className="flex-1 h-px bg-gray-400"></div>
        </div>

        {/* الفقرات المزدوجة */}
        <div className="row">
          <div className="col-md-6 mb-6 md:mb-0">
            <p className="text-gray-700 text-base leading-7 mb-4">
              I’m a paragraph. Click here to add your own text and edit me. It’s easy.
              Just click “Edit Text” or double click me to add your own content and make
              changes to the font. Feel free to drag and drop me anywhere you like on your
              page. I’m a great place for you to tell a story and let your users know a
              little more about you.
            </p>
            <p className="text-gray-700 text-base leading-7">
              This is a great space to write long text about your company and your services.
              You can use this space to go into a little more detail about your company.
              Talk about your team and what services you provide. Tell your visitors the
              story of how you came up with the idea for your business and what makes you
              different from your competitors. Make your company stand out and show your
              visitors who you are.
            </p>
          </div>

          <div className="col-md-6">
            <p className="text-gray-700 text-base leading-7 mb-4">
              I’m a paragraph. Click here to add your own text and edit me. It’s easy.
              Just click “Edit Text” or double click me to add your own content and make
              changes to the font. Feel free to drag and drop me anywhere you like on your
              page. I’m a great place for you to tell a story and let your users know a
              little more about you.
            </p>
            <p className="text-gray-700 text-base leading-7">
              This is a great space to write long text about your company and your services.
              You can use this space to go into a little more detail about your company.
              Talk about your team and what services you provide. Tell your visitors the
              story of how you came up with the idea for your business and what makes you
              different from your competitors. Make your company stand out and show your
              visitors who you are.
            </p>
          </div>
        </div>
      </div>
  )
}

export default AboutContent