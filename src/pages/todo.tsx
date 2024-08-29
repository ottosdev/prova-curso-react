import { Container, VStack } from "@chakra-ui/react";
import Header from "../components/todo/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/todo/footer";

export default function Todo() {

   // TODO: Criar uma constante chamada nome e enviar por Propriedade para o componente Header
  return (
    <Container h="100vh" maxW="3xl" bg="gray.100" centerContent>
      <Header />
      <VStack h="90vh" w="100%" mt="5" alignItems="flex-start">
        <Outlet />
      </VStack>
      <Footer />
    </Container>
  );
}
