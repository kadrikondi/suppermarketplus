import React from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import { Card } from "react-bootstrap";

const newLocal = (
  <Tab.Pane eventKey="#link2">
    <div>
      <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          Supermarketplus
        </ListGroup.Item>
      </ListGroup>
    </div>
    <h4>Cosmetics and Personal Care</h4>
    <ul>
      <li>
        <h5>Skincare:</h5> Pamper your skin with our selection of skincare
        products, including cleansers, moisturizers, serums, and masks.
      </li>
      <li>
        <h5>Makeup:</h5> Discover a wide range of makeup products, from
        foundations and concealers to lipsticks and eye shadows, to enhance your
        natural beauty.
      </li>
      <li>
        <h5>Haircare:</h5> Keep your hair looking its best with our shampoos,
        conditioners, hair treatments, and styling products.
      </li>
      <li>
        <h5>Fragrances:</h5> Choose from a variety of perfumes and colognes to
        find your signature scent.
      </li>
      <li>
        <h5>Personal Hygiene:</h5> Stay fresh and clean with our personal
        hygiene products, including deodorants, body washes, and feminine care
        items.
      </li>
    </ul>
    <h4>Phone Products and Accessories</h4>
    <ul>
      <li>
        <h5>Smartphones: </h5> Browse our selection of the latest smartphones
        from top brands, featuring advanced technology and sleek designs.
      </li>
      <li>
        <h5>Phone Cases: </h5> Protect your phone with our variety of durable
        and stylish phone cases, available in different materials and designs.
      </li>
      <li>
        <h5>Screen Protectors:</h5> Keep your phone screen safe from scratches
        and cracks with our range of screen protectors.
      </li>
      <li>
        <h5>Chargers and Cables:</h5> Ensure your devices are always charged
        with our collection of chargers and cables, including fast chargers and
        wireless charging pads.
      </li>
      <li>
        <h5>Headphones and Earbuds:</h5> Enjoy high-quality sound with our
        selection of headphones and earbuds, perfect for music lovers and those
        on the go.
      </li>
      <li>
        <h5>Power Banks: </h5> Stay powered up with our reliable power banks,
        providing extra battery life for your devices when you need it most.
      </li>
      <li>
        <h5>Bluetooth Accessories: </h5> Enhance your phone's capabilities with
        our range of Bluetooth accessories, including speakers and headsets.
      </li>
      <li>
        <h5>Phone Holders and Mounts: </h5> Make hands-free use easy with our
        variety of phone holders and mounts for your car, bike, or desk.
      </li>
    </ul>
  </Tab.Pane>
);

const additionalPane1 = (
  <Tab.Pane eventKey="#link3">
    <div>
      <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          Supermarketplus
        </ListGroup.Item>
      </ListGroup>
    </div>
    <h4>Electronics</h4>
    <ul>
      <li>
        <h5>Televisions:</h5> Experience the best in home entertainment with our
        range of LED, OLED, and Smart TVs.
      </li>
      <li>
        <h5>Computers:</h5> Discover our selection of laptops, desktops, and
        tablets for work, gaming, and everyday use.
      </li>
      <li>
        <h5>Cameras:</h5> Capture every moment with our high-quality cameras and
        accessories, including DSLRs, mirrorless cameras, and action cams.
      </li>
      <li>
        <h5>Audio Equipment:</h5> Enhance your listening experience with our
        speakers, soundbars, and home theater systems.
      </li>
      <li>
        <h5>Wearable Technology:</h5> Stay connected and track your fitness with
        our range of smartwatches and fitness trackers.
      </li>
    </ul>
    <h4>Hair Products</h4>
    <ul>
      <li>
        <h5>Shampoos and Conditioners:</h5> Keep your hair clean and healthy
        with our extensive range of shampoos and conditioners designed for all
        hair types, including dry, oily, and color-treated hair.
      </li>
      <li>
        <h5>Hair Treatments:</h5> Repair and rejuvenate your hair with our
        selection of hair masks, oils, and leave-in treatments that provide deep
        conditioning and nourishment.
      </li>
      <li>
        <h5>Styling Products:</h5> Achieve your desired look with our variety of
        styling products, including gels, mousses, hairsprays, and pomades.
        Whether you need volume, hold, or shine, we have the perfect product for
        you.
      </li>
      <li>
        <h5>Hair Tools:</h5> Explore our range of hair tools, such as brushes,
        combs, hair dryers, straighteners, and curling irons to style your hair
        effortlessly.
      </li>
      <li>
        <h5>Hair Accessories: </h5> Complete your look with our collection of
        hair accessories, including hair ties, clips, headbands, and more.
      </li>
      <li>
        <h5>Hair Growth Products:</h5> Promote healthy hair growth with our
        range of hair growth products.
      </li>
      <li>
        <h5>Hair Loss Treatments:</h5> Our products are designed to help restore
        fullness and thickness to your hair.
      </li>

      <li>
        <h5>Scalp Care:</h5> Take care of your scalp with our range of scalp
        care products, our products will help maintain a healthy scalp and
        promote optimal hair growth.
      </li>
    </ul>
  </Tab.Pane>
);

const additionalPane2 = (
  <Tab.Pane eventKey="#link4">
    <div>
      <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          Supermarketplus
        </ListGroup.Item>
      </ListGroup>
    </div>
    <h4>Home Appliances</h4>
    <p>
      Upgrade your home with our wide range of appliances designed to make your
      life easier and more comfortable:
    </p>
    <ul>
      <li>
        <h5>Kitchen Appliances:</h5>
        <p>
          Transform your kitchen into a culinary haven with our range of
          appliances, including:
        </p>
        <ul>
          <li>
            Refrigerators: Keep your food fresh and organized with our
            energy-efficient refrigerators equipped with advanced cooling
            technology.
          </li>
          <li>
            Microwaves: Prepare quick and delicious meals with our microwave
            ovens featuring multiple cooking functions.
          </li>
          <li>
            Ovens: Bake, roast, and broil with precision using our convection
            and conventional ovens.
          </li>
          <li>
            Blenders: Create smoothies, soups, and sauces effortlessly with our
            powerful and versatile blenders.
          </li>
          <li>
            Coffee Makers: Brew your favorite coffee beverages at home with our
            range of espresso machines, drip coffee makers, and French presses.
          </li>
          <li>
            Toaster Ovens: Toast bread, bake pizzas, and roast meats with our
            compact and efficient toaster ovens.
          </li>
        </ul>
      </li>
      <li>
        <h5>Cleaning Appliances:</h5>
        <p>
          Keep your home clean and tidy with our innovative cleaning appliances,
          including:
        </p>
        <ul>
          <li>
            Vacuum Cleaners: Remove dust, dirt, and pet hair from carpets and
            floors with our range of upright, canister, and robotic vacuum
            cleaners.
          </li>
          <li>
            Steam Cleaners: Sanitize and refresh your home without harsh
            chemicals using our steam mops and handheld steam cleaners.
          </li>
          <li>
            Carpet Cleaners: Deep clean carpets and upholstery to remove stains
            and odors with our carpet shampooers and spot cleaners.
          </li>
          <li>
            Pressure Washers: Blast away dirt and grime from outdoor surfaces
            such as decks, driveways, and siding with our high-pressure washers.
          </li>
          <li>
            Robotic Cleaners: Enjoy hands-free cleaning with our robotic vacuum
            cleaners and mops equipped with smart navigation technology.
          </li>
        </ul>
      </li>
      <li>
        <h5>Climate Control:</h5>
        <p>
          Stay comfortable in any season with our selection of climate control
          appliances, including:
        </p>
        <ul>
          <li>
            Air Conditioners: Keep your home cool and comfortable during the hot
            summer months with our energy-efficient window, portable, and split
            air conditioners.
          </li>
          {/* <li>Heaters: Stay warm and cozy in the winter with our range of electric, gas, and oil heaters designed for optimal heating performance.</li>
                <li>Fans: Circulate air and create a refreshing breeze with our variety of ceiling fans, tower fans, and pedestal fans.</li>  */}
        </ul>
      </li>
    </ul>
  </Tab.Pane>
);

function Storedetail({ suppermarket }) {
  const phoneNumber = "2348038863055";
  const whatsappLink = `https://wa.me/${suppermarket.whatsappno}`;

  return (
    <div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          {/* <Col sm={3}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Wears
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Cosmetics
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Electronics
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                Appliances
              </ListGroup.Item>
            </ListGroup>
          </Col> */}
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <div>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li" active>
                      <marquee behavior="" direction="alternative">
                        Supermarketplus
                      </marquee>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
                <div>
                  <h4>{suppermarket.name}</h4>
                  {suppermarket.description}
                  <br />
                  <h4>{suppermarket.name}</h4>
                  <ul>
                    <li>{suppermarket.building}</li>
                    <li>{suppermarket.state}</li>
                    <li>{suppermarket.city}</li>
                    <li>{suppermarket.street}</li>

                    <li>{suppermarket.phone}</li>
                    <li>{suppermarket.email}</li>

                    <Button
                      variant="success"
                      href={whatsappLink}
                      target="_blank"
                    >
                      <FaWhatsapp style={{ marginRight: "8px" }} />
                      Chat with me on WhatsApp
                    </Button>
                  </ul>

                  <Row md={2} className="g-4 mt-4">
                    {suppermarket.images.map(
                      (image, index) =>
                        image && (
                          <Col key={index}>
                            <Card>
                              <Card.Img
                                variant="top"
                                className="d-block w-100"
                                src={image}
                                alt={`Slide ${index + 1}`}
                              />
                            </Card>
                          </Col>
                        )
                    )}
                  </Row>

                  {/* <ul>
                    <li>
                      <h5>Men's Fashion:</h5> From casual wear to formal attire,
                      discover a stylish collection of shirts, trousers, jeans,
                      jackets, and accessories that cater to every man's
                      wardrobe.
                    </li>
                    <li>
                      <h5>Women's Fashion:</h5> Shop the latest trends in
                      women's clothing, including dresses, blouses, skirts,
                      pants, and outerwear. We also offer a variety of lingerie
                      and sleepwear.
                    </li>
                    <li>
                      <h5>Children's Apparel:</h5> Keep your kids looking cute
                      and comfortable with our range of children's clothing,
                      including baby wear, school uniforms, and casual outfits.
                    </li>
                    <li>
                      <h5>Undergarments:</h5> Find the perfect fit with our
                      selection of undergarments for men, women, and children,
                      including bras, panties, briefs, and socks.
                    </li>
                  </ul>
                  <h4>Household Essentials</h4>
                  <ul>
                    <li>
                      <h5>Cleaning Supplies:</h5> Keep your home spotless with
                      our range of cleaning products, including detergents,
                      disinfectants, and all-purpose cleaners.
                    </li>
                    <li>
                      <h5>Paper Products:</h5> Stock up on paper towels,
                      napkins, toilet paper, and tissues for all your household
                      needs.
                    </li>
                  </ul>
                  <h4>Beverages</h4>
                  <ul>
                    <li>
                      <h5>Soft Drinks: </h5> Quench your thirst with our variety
                      of soft drinks, including sodas, sparkling water, and
                      flavored beverages.
                    </li>
                    <li>
                      <h5>Juices and Smoothies:</h5> Refresh yourself with our
                      assortment of fruit juices and smoothies, made from the
                      freshest ingredients.
                    </li>
                    <li>
                      <h5>Tea and Coffee:</h5> Find your favorite blend from our
                      extensive range of teas and coffees, including herbal
                      teas, ground coffee, and instant coffee.
                    </li>
                  </ul> */}
                </div>
              </Tab.Pane>
              {newLocal}
              {additionalPane1}
              {additionalPane2}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default Storedetail;

// Afeez
