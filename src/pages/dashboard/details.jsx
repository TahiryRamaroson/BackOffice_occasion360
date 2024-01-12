import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Carousel,
  } from "@material-tailwind/react";

export function Details() {

    return (
      <Card className="mt-6 w-full" style={{margin:'auto'}}>
          <Typography variant="h2" color="blue-gray" className="mb-2 mt-6 text-center">
            Toyota Land Cruiser
          </Typography>
          <Typography className="text-center">
            demande effectué par Koto le 01/01/2024
          </Typography>
        <CardBody className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-2">
          <Card className="mt-6 w-full" style={{margin:'auto'}} color="gray" variant="gradient">
            <CardBody>
            <Typography className="mt-2">Marque: Toyota </Typography>
            <Typography className="mt-2">Modèle: Land Cruiser </Typography>
            <Typography className="mt-2">Catégorie: 4x4 </Typography>
            <Typography className="mt-2">Année de mise en circulation: 2018 </Typography>
            <Typography className="mt-2">Energie: Essence </Typography>
            <Typography className="mt-2">Boite de vitesse: Automatique </Typography>
            <Typography className="mt-2">Etat: En parfait état </Typography>
            <Typography className="mt-2">Kilometrage: 68000km </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 w-full" style={{margin:'auto'}} color="gray" variant="gradient">
            <CardBody>
              Description: Si vous recherchez une Toyota Land Cruiser qui allie puissance, confort et polyvalence, ne cherchez pas plus loin.
              Cette voiture a été entretenue régulièrement, avec un historique complet disponible sur demande.
              Pneu neuve, Vidange faite...

            </CardBody>
          </Card>
        </CardBody>
        <CardFooter className="pt-0 w-full ">
            <Carousel className="rounded-xl">
            <img
                src="/img/Occasion360_logo.png"
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src="/img/Occasion360_logo.png"
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src="/img/Occasion360_logo.png"
                alt="image 3"
                className="h-full w-full object-cover"
            />
            </Carousel>
        </CardFooter>
      </Card>
    );
  }
  
  export default Details;