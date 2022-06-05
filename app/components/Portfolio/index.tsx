
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Image,
    Container,
    SimpleGrid,
    StackDivider,
    Grid,
    GridItem,
    Icon,
    Flex,
    Button
} from '@chakra-ui/react';
import { IoArrowForward, IoLocation, IoTime } from 'react-icons/io5';
import Confetti from '../../../public/images/confetti-blue.svg';

const data = [
    {
        image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        client: 'Watermelon',
        title: 'Optimizing the website for your main keywords',
        location: 'Jakarta',
        duration: '60 Days'
    },
    {
        image: 'https://images.unsplash.com/photo-1627634777217-c864268db30c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        client: 'PASN',
        title: 'Making Lifestyle Superapp',
        location: 'Jakarta',
        duration: '180 Days'
    }
];

interface CardInterface {
    title: string
    image: string,
    client: string,
    location: string,
    duration: string
}

function Card({ title, image, client, location, duration }: CardInterface) {
    return (
        <Center py={6}>
            <Box
                maxW={'345px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
            >
                <Flex
                    h={'180px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={10}
                    alignItems="center"
                >
                    <Image
                        src={
                            image ??
                            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                    />
                </Flex>
                <Flex direction={"column"} gap={6}>
                    <Stack>
                        <Text
                            color={'brand.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}>
                            {client ?? 'Corporate'}
                        </Text>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}>
                            {title ?? 'Boost your conversion rate'}
                        </Heading>
                    </Stack>
                    <Stack fontSize={'sm'} direction={'row'} spacing={4} align={'center'}>
                        <Flex alignItems={"center"}>
                            <Icon as={IoLocation} color={"gray.500"} w={5} h={5} /><Text fontWeight={600}>{location ?? 'Achim Rolle'}</Text>
                        </Flex>
                        <Flex alignItems={"center"}>
                            <Icon as={IoTime} color={"gray.500"} w={5} h={5} /><Text color={'gray.500'}>{duration ?? '30 Days'}</Text>
                        </Flex>
                    </Stack>
                    <Stack>
                        <Button colorScheme={"brand"}>Read More</Button>
                    </Stack>
                </Flex>
            </Box>
        </Center>
    )
}

export default function Portfolio() {
    return (
        <Box id='portfolio' bg={useColorModeValue('gray.100', 'gray.900')}>
            <Container maxW={"6xl"}
                css={{
                    backgroundImage: `url("${Confetti}")`,
                    backgroundColor: "gray.500"
                }}
            >
                <Flex
                    alignItems={"center"}
                    direction={{ base: 'column', xl: 'row' }}
                    gap={4}
                    py={{ base: 20, md: 28 }}
                >
                    <Flex flex={1}>
                        <Flex direction={'column'} gap={4} alignItems={'start'}>
                            <Heading>Our Portfolio</Heading>
                            <Text fontWeight={700} color={useColorModeValue("brand.800", "brand.200")}>
                                We've done some amazing projects.
                            </Text>
                            <Text color={useColorModeValue("gray.600", "gray.500")}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus. Velit sed ullamcorper morbi tincidunt ornare.
                            </Text>
                            <Button colorScheme={"brand"} variant="link" size="md" justifyContent={"center"}>
                                View All Projects <Icon as={IoArrowForward} w={12} h={5} />
                            </Button>
                        </Flex>
                    </Flex>
                    <Flex flex={2}>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                            {
                                data.map((item) => (
                                    <Card key={item.title} {...item} />
                                ))
                            }
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}