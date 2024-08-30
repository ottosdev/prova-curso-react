import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Input,
  Text,
  VStack
} from "@chakra-ui/react";
import { useTodo } from "../../hooks/useTodo";
import { FormEvent } from "react";

export default function AddTodo() {
  const {} = useTodo();

  //TODO: Adicione a logica voltar para tela anterior: Listagem
  function irParaTelaListagem() {}

  //TODO: Adicione a logica cadatrar um TODO;
  function handleAdicionarTodo(event: FormEvent) {

  }

  return (
    <Flex w="100%" h="60%" justifyContent="center" alignItems="center">
      <Card w="100%">
        <CardHeader textAlign="center">
          <Text as="strong">Registrar uma Atividade</Text>
        </CardHeader>
        <form onSubmit={handleAdicionarTodo}>
          <CardBody>
            <VStack>
              <Input placeholder="Titulo" />
              <Input placeholder="Descrição" />
            </VStack>
          </CardBody>
          <CardFooter>
            <HStack justifyContent="space-between" w="100%">
              <Button type='button' onClick={irParaTelaListagem}>Voltar</Button>
              <Button
                type="reset"
                background="green.400"
                color="white"
                _hover={{ background: "green.300" }}
              >
                Registrar
              </Button>
            </HStack>
          </CardFooter>
        </form>
      </Card>
    </Flex>
  );
}
