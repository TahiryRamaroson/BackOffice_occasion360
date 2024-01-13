import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

export function Gestion() {

  const navigate = useNavigate();

  useEffect(() => {
    // Fonction pour vérifier la présence du token dans le localStorage
    const checkToken = () => {
      const token = localStorage.getItem('authToken');

      // Si le token est présent, l'utilisateur est connecté
      if (token) {
        console.log('utilisateur connecté');
      } else {
        navigate('/auth/sign-in');
      }
    };

    // Appel de la fonction de vérification lors du chargement de la page
    checkToken();
    }, []);

  return (
    <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 10 }, (_, index) => (
      <Card key={index} color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
      <CardBody
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
      </CardBody>
    </Card>
    ))}
    </div>
  );
}

export default Gestion;
