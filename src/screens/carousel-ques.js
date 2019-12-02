import React from 'react';
import {LeftBox, RightBox} from '../components/content-box';
import {CenteredButton} from '../components/lib';
import Carousel from '../components/carousel';
import {Link} from '@reach/router';

const carouselSlidesData = [
  {
    question:
      'Lorem ipsum dolor sit amet, ex eam putent commodo, sit eu erroribus ullamcorper consequuntur, mei ex nulla iisque?',
    options: [
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
    ],
  },
  {
    question:
      'Percipit similique ad vim, omnium deleniti eu vis. Mei hendrerit definiebas ne?',
    options: [
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
    ],
  },
  {
    question:
      'Lorem ipsum dolor sit amet, ex eam putent commodo, sit eu erroribus ullamcorper consequuntur, mei ex nulla iisque?',
    options: [
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
    ],
  },
];

function CarouselQuestion() {
  return (
    <>
      <LeftBox>
        <h3 className="text-center my-3">
          PRE- EMPLOYMENT HEALTH QUESTIONNAIRES
        </h3>
        <p>
          Beans that con panna extraction doppio cappuccino cultivar
          decaffeinated. Cappuccino frappuccino, breve galão, bar steamed saucer
          cultivar trifecta. Irish, breve kopi-luwak black arabica instant
          kopi-luwak. Plunger pot grounds, arabica, cream sugar, medium instant
          in mug skinny. Grounds caffeine java kopi-luwak mazagran beans that.
          Café au lait redeye dark rich, at organic in milk chicory irish. Extra
          froth coffee mocha grounds macchiato single origin dripper. Americano
          single shot aftertaste percolator java sugar organic fair trade.
          Siphon, in et viennese kopi-luwak variety organic. Breve medium,
          doppio aged java half and half coffee et seasonal.{' '}
        </p>
        <p>
          Strong half and half id white cortado rich plunger pot. Brewed ut
          barista cappuccino milk mazagran trifecta cup ristretto. Aromatic id
          aromatic sweet roast extraction to go. Coffee extraction et beans
          seasonal qui sit rich grounds aroma. Cup, roast aroma iced bar fair
          trade medium, redeye roast latte et coffee. Caramelization, acerbic,
          froth half and half java et coffee. Affogato blue mountain to go
          robust frappuccino plunger pot in affogato.
        </p>
        <p>
          So id, a viennese caramelization cup coffee arabica. Grinder, shop
          java variety spoon extra, french press cappuccino single origin
          aromatic skinny. Instant cappuccino blue mountain ut half and half
          fair trade turkish, iced filter arabica as spoon. Beans that con panna
          extraction doppio cappuccino cultivar decaffeinated. Cappuccino
          frappuccino, breve galão, bar steamed saucer cultivar trifecta. Irish,
          breve kopi-luwak black arabica instant kopi-luwak. Plunger pot
          grounds, arabica, cream sugar, medium instant in mug skinny. Grounds
          caffeine java kopi-luwak mazagran beans that.
        </p>
        <p>
          Café au lait redeye dark rich, at organic in milk chicory irish. Extra
          froth coffee mocha grounds macchiato single origin dripper. Americano
          single shot aftertaste percolator java sugar organic fair trade.
          Siphon, in et viennese kopi-luwak variety organic. Breve medium,
          doppio aged java half and half coffee et seasonal. Strong half and
          half id white cortado rich plunger pot. Brewed ut barista cappuccino
          milk mazagran trifecta cup ristretto. Aromatic id aromatic sweet roast
          extraction to go. Coffee extraction et beans seasonal qui sit rich
          grounds aroma. Cup, roast aroma iced bar fair trade medium, redeye
          roast latte et coffee. Caramelization, acerbic, froth half and half
          java et coffee. Affogato blue mountain to go robust frappuccino
          plunger pot in affogato.{' '}
        </p>
        <p>
          So id, a viennese caramelization cup coffee arabica. Grinder, shop
          java variety spoon extra, french press cappuccino single origin
          aromatic skinny. Instant cappuccino blue mountain ut half and half
          fair trade turkish, iced filter arabica as spoon.
        </p>
        <p>
          Café au lait redeye dark rich, at organic in milk chicory irish. Extra
          froth coffee mocha grounds macchiato single origin dripper. Americano
          single shot aftertaste percolator java sugar organic fair trade.
          Siphon, in et viennese kopi-luwak variety organic. Breve medium,
          doppio aged java half and half coffee et seasonal. Strong half and
          half id white cortado rich plunger pot. Brewed ut barista cappuccino
          milk mazagran trifecta cup ristretto. Aromatic id aromatic sweet roast
          extraction to go. Coffee extraction et beans seasonal qui sit rich
          grounds aroma. Cup, roast aroma iced bar fair trade medium, redeye
          roast latte et coffee. Caramelization, acerbic, froth half and half
          java et coffee. Affogato blue mountain to go robust frappuccino
          plunger pot in affogato.{' '}
        </p>
        <p>
          Café au lait redeye dark rich, at organic in milk chicory irish. Extra
          froth coffee mocha grounds macchiato single origin dripper. Americano
          single shot aftertaste percolator java sugar organic fair trade.
          Siphon, in et viennese kopi-luwak variety organic. Breve medium,
          doppio aged java half and half coffee et seasonal. Strong half and
          half id white cortado rich plunger pot. Brewed ut barista cappuccino
          milk mazagran trifecta cup ristretto. Aromatic id aromatic sweet roast
          extraction to go. Coffee extraction et beans seasonal qui sit rich
          grounds aroma. Cup, roast aroma iced bar fair trade medium, redeye
          roast latte et coffee. Caramelization, acerbic, froth half and half
          java et coffee. Affogato blue mountain to go robust frappuccino
          plunger pot in affogato.
        </p>
      </LeftBox>
      <RightBox>
        <div>
          <Carousel slides={carouselSlidesData} />
          <br />
          <Link to="/visual">
            <CenteredButton type="submit" value="Submit" />
          </Link>
        </div>
      </RightBox>
    </>
  );
}
export default CarouselQuestion;
