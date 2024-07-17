import Container from "@/components/Container";
import React from "react";
import "./index.css";
import Navbar from "../navbar";
export default function page() {
  return (
    <Container isFirstSection>
      <h3 className="title">Terms of Use</h3>
      <h2 className="sub-title mt-12">Introduction</h2>
      <p className="text">
        Welcome to Growv. These Terms of use govern your access to and use of
        our website, , including any content, functionality, and services
        offered on or through the Website. By accessing or using the Website,
        you agree to comply with and be bound by these Terms. If you do not
        agree with these Terms, you must not access or use the Website.
      </p>
      <h2 className="sub-title">Changes to the Terms</h2>
      <p className="text">
        We reserve the right to modify or update these Terms at any time, at our
        sole discretion. Any changes will be effective immediately upon posting
        the revised Terms on the Website. Your continued use of the Website
        after the posting of changes constitutes your acceptance of such
        changes. Please check this page periodically for updates.
      </p>
      <h2 className="sub-title">Use of the Website</h2>
      <h3 className="underline text">Eligibility</h3>
      <p className="text">
        You must be at least 18 years old to use the Website. By using the
        Website, you represent and warrant that you are of legal age to form a
        binding contract with us and meet all of the foregoing eligibility
        requirements. If you do not meet these requirements, you must not access
        or use the Website.
      </p>
      <h3 className="underline">Prohibited Conduct</h3>
      <p className="text">
        You agree not to use the Website for any unlawful purpose or in any way
        that violates these Terms. Specifically, you agree not to:
      </p>
      <ul className="list-disc text">
        <li>
          Engage in any activity that interferes with or disrupts the Website or
          the servers and networks that host the Website.
        </li>
        <li>
          Use any automated system, including but not limited to robots,
          spiders, or offline readers, to access the Website in a manner that
          sends more request messages to our servers than a human can reasonably
          produce in the same period of time by using a conventional web
          browser.
        </li>
        <li>
          Attempt to gain unauthorized access to any portion or feature of the
          Website, or any other systems or networks connected to the Website, or
          to any of our servers, by hacking, password {`"mining,"`} or any other
          illegitimate means.
        </li>
        <li>
          Use the Website to send unsolicited commercial communications,
          including but not limited to spam or phishing messages.
        </li>
        <li>
          Use the Website to upload, transmit, or distribute any viruses, worms,
          or other malicious software.
        </li>
      </ul>
      <h2 className="sub-title">User Content</h2>
      <p className="text">
        You may have the opportunity to post, submit, or otherwise make
        available content on or through the Website {`("User Content")`}. You
        retain all rights in your User Content, but you grant us a
        non-exclusive, worldwide, royalty-free, perpetual, irrevocable, and
        fully sublicensable right to use, reproduce, modify, adapt, publish,
        translate, create derivative works from, distribute, and display such
        User Content in any media. You represent and warrant that you own or
        control all rights in and to your User Content and have the right to
        grant the license granted above. You further represent and warrant that
        your User Content does not violate these Terms and will not cause injury
        to any person or entity.
      </p>
      <h2 className="sub-title">Intellectual Property</h2>
      <p className="text">
        The Website and its entire contents, features, and functionality,
        including but not limited to all information, software, text, displays,
        images, video, and audio, and the design, selection, and arrangement
        thereof, are owned by us, our licensors, or other providers of such
        material and are protected by international copyright, trademark,
        patent, trade secret, and other intellectual property or proprietary
        rights laws.
      </p>
      <h2 className="sub-title">Disclaimer of Warranties</h2>
      <p className="text">
        {" "}
        The Website is provided on {`an "as is" and "as available"`} basis. We
        make no representations or warranties of any kind, express or implied,
        as to the operation of the Website or the information, content,
        materials, or products included on the Website. You expressly agree that
        your use of the Website is at your sole risk.
      </p>
    </Container>
  );
}
