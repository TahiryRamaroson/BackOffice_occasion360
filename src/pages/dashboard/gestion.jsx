import {
  Card,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
 

export function Gestion() {

  return (
    <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 10 }, (_, index) => (
      <Card key={index} color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-none border-white/10 pb-8 text-center"
      >
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-4xl font-normal"
        >
          Marque
        </Typography>
      </CardHeader>
    </Card>
    ))}
    </div>
  );
}

export default Gestion;
