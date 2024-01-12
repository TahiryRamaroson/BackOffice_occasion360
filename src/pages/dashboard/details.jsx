import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Carousel,
  } from "@material-tailwind/react";

export function Details() {

    return (
        <Card className="mt-6 w-max" style={{margin:'auto'}}>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 w-full h-64">
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