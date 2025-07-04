import React from "react";

import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <section className="naslovna">
        <Container>
          <Row>
            <h1>ASTA STUDIO</h1>
          </Row>
        </Container>
      </section>

      <section className="intro">
        <Container>
          <Row>
            <Col md={8} className="m-auto">
              <h2>Zašto mi?</h2>
              <p>
                Trebate foto i video uslugu? Trebate fotografa za Vaš dan vjenčanja? Htjeli bi imati vizualno predivan video vašeg vjenčanja, a da pritom ne traje 4 sata?
                Želite da Vaš svadbeni dan bude zabilježen kreativnom i jedinstvenom fotografijom i video snimkama u Hollywoodskom stilu?
                Asta studio će se pobrinuti da taj specijalan dan ostane zabilježen zauvijek!
                Iako smo smješteni u Zagrebu, već smo obišli čitavu Hrvatsku, Sloveniju, Austriju, Švicarsku, Njemačku i mnoge druge predivne zemlje kako bi Vam osigurali
                vrhunsko sjećanje na početak Vašeg zajedničkog života. Iza nas je preko 300 vjenčanja, a dio našeg rada možete pogledati u portfoliju.
                Zabilježit ćemo svaki poseban trenutak, svaki osmijeh i suze radosnice, svaki ples. To je Asta obećanje.
                Fotografiranje kao i snimanje vjenčanja je naša primarna djelatnost. Imamo preko 15 godina iskustva u fotografiranju i snimanju raznih događanja,
                a s ponosom ćemo pokazati naše dosadašnje radove.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="videogalerija">
        <Container fluid>
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <h1>VIDEO GALERIJA</h1>
            </Col>
            <Col md={6}>
              <Link to="/video">
                <Image src="img/first.jpg" fluid />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="fotogalerija">
        <Container fluid>
          <Row>
            <Col md={6} className="order-2 order-md-1">
              <Link to="/foto">
                <Image src="img/second.jpg" fluid />
              </Link>
            </Col>
            <Col md={6} className="order-1 my-3 my-md-0 order-md-2">
              <Link to="/foto">
                <h1>FOTO GALERIJA</h1>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePage;