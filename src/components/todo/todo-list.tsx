import {
    Button,
    Card,
    CardBody,
    CardFooter, 
    Text, 
    VStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useTodo } from "../../hooks/useTodo";

export default function TodoList() {
  // TODO: Obter a lista e exibir em tela e obter a função para deletar;
  const {} = useTodo();
  
  const navigate = useNavigate();

  function irParaAdicionarTodo() {
    navigate("/add");
  }

  return (
    <VStack w="100%" alignItems="start">

      {/* Botao que leva para tela de ADICIONART TODO */}
      <Button w='100%'  backgroundColor="green.100"
              color='white'
              _hover={{ background: "green.200" }}  onClick={irParaAdicionarTodo}>
        Add todo
      </Button>


      {/* Listagem dos items */}
      {Array.from({ length: 3 }).map((_, index) => (
        <Card w="100%">
          <CardBody display='flex' flexDir='column' gap='4'>
            <Text as='strong' fontSize='medium'>Coloque o nome da atividade</Text>
            <Text as='span' fontSize='small'>Coloque a descricao aqui</Text>
          </CardBody>
          <CardFooter display="flex" justifyContent="flex-end" w="100%">
            <Button
              backgroundColor="red.400"
              color='white'
              _hover={{ background: "red.200" }}
              onClick={() => console.log('adicionar a funcao de deletar')}
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </VStack>
  );
}
