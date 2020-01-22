import React, { Component } from "react";

export default class cookiePolicy extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="font-weight-light text-center text-lg-left mt-4 mb-0">
          Cookie Policy
        </h2>
        <hr className="mt-2 mb-4" />
        <div className="col-sm-10 mx-auto py-4">
          <h4 className="">What are cookies?</h4>
          <p className="lead">
            Cookies are little text files which are stored on the browser or
            hard drive of your computer or mobile device when you visit a
            webpage or application. Cookies work to make your experience
            browsing our site as smooth as possible and they remember your
            preferences so you don’t have to insert your details again and
            again. There are different types of cookies. Some cookies come
            directly from our website and others come from third parties which
            place cookies on our site. Cookies can be stored for varying lengths
            of time on your browser or device. Session cookies are deleted from
            your computer or device when you close your web-browser. Persistent
            cookies will remain stored on your computer or device until deleted
            or until they reach their expiry date.
          </p>
        </div>
        <div className="col-sm-10 mx-auto py-4">
          <h4>How do we use cookies?</h4>
          <p className="lead">
            We use cookies to enhance your browsing experience by analysing how
            you use our site which helps us to troubleshoot any problems and to
            monitor our own performance.
          </p>
          <p className="lead">Cookies we use:</p>
          <h5 className="">Essential Website Cookies</h5>
          <p className="lead">
            Google Tag Manager - This cookie is associated with Google Tag
            Manager which we use to load scripts into our website
            pages.[_gat_gtag_UA]
          </p>
          <h5 className="">Performance Cookies</h5>
          <p className="lead">
            Google Analytics - Google Analytics gathers information allowing us
            to understand interactions with our websites and ultimately refine
            that experience to better serve you.[_ga, gid]
          </p>
          <h5 className="">Targeting Cookies</h5>
          <p className="lead">
            Google Adwords - Used by Google AdWords to re-engage visitors based
            on the visitor's online behaviour across websites. DoubleClick - Use
            cookies to set unique identifiers (IDs) so they can identify the
            same individual across multiple touchpoints. When an ad server
            receives an ad display request from a user who does not have an
            existing cookie, the ad server assigns a new unique ID (a random
            alphanumeric string such as 118D132F9423).[DSID, IDE, NID, _fbp]
          </p>
        </div>
        <div className="col-sm-10 mx-auto py-4">
          <h4 className="">How to Refuse Cookies?</h4>
          <p className="lead">
            You can usually find information about how to stop your browser from
            accepting cookies in your specific browser's Help menu. You can also
            often get your browser to notify you when it's receiving a new
            cookie, or disable the use of cookies completely. If you're stuck,
            try consulting www.allaboutcookies.org for more information about
            all things cookie.
          </p>
        </div>
      </div>
    );
  }
}
