import React from 'react';

import { Layout } from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <article className="contact">
      <div className="container">
        <div className="contact__col">
          <p>MAP GOES HERE</p>
        </div>
        <div className="contact__col">
          <h1>Contact</h1>
          <div className="contact__block">
            <h2>Enquiries</h2>
            <a href="tel:13108285555">310-828-5555</a>
          </div>

          <div className="contact__block">
            <p>
              <strong>Lauren Bleiweiss</strong>
              <br />
              Executive Producer / Managing Director
              <br />
              <a href="mailto:lauren@cartel.tv">lauren@cartel.tv</a>
              <br />
              <a href="tel:19173748436">917-374-8436</a> (Mobile)
            </p>
          </div>
          <div className="contact__block">
            <p>
              <strong>Alaina Zanotti</strong>
              <br />
              Executive Producer / Head of Sales
              <br />
              <a href="mailto:alaina@cartel.tv">alaina@cartel.tv</a>
              <br />
              <a href="tel:13105700918">310-570-0918</a> (Mobile)
            </p>
          </div>

          <h2>Representation</h2>
          <h3>East Coast Sales</h3>
          <div className="contact__block">
            <p>
              Tara Averill
              <br />
              <a href="mailto:tara@representationco.com">
                tara@representationco.com
              </a>
              <br />
              <a href="tel:12123438085">212-343-8085</a>
            </p>

            <p>
              John Robertson
              <br />
              <a href="mailto:john@representationco.com">
                john@representationco.com
              </a>
              <br />
              <a href="tel:12123438085">212-343-8085</a>
            </p>
          </div>

          <h3>West Coast Sales</h3>
          <div className="contact__block">
            <p>
              Millie Munro
              <br />
              <a href="mailto:bueno@wearebueno.com">bueno@wearebueno.com </a>
              <br />
              <a href="tel:13107955035">310-795-5035</a>
            </p>

            <p>
              Bryan Shrednick
              <br />
              <a href="mailto:bueno@wearebueno.com">bueno@wearebueno.com </a>
              <br />
              <a href="tel:13109804900">310-980-4900</a>
            </p>
          </div>

          <h3>Midwest Sales</h3>
          <div className="contact__block">
            <p>
              Jimmy Waldron
              <br />
              <a href="mailto:jimmy@themreps.com">jimmy@themreps.com </a>
              <br />
              <a href="tel:18477275154">847-727-5154</a> (Mobile)
            </p>
          </div>
        </div>
      </div>
    </article>
  </Layout>
);

export default ContactPage;
