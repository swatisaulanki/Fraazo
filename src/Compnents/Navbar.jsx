import React from "react";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Input,
  Stack,
  Image,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  SearchIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import frazSwati from "../Assists/fraz-swati.svg";
import Location from "../Assists/location-pin.png";
import Cart from "../Assists/shopping-cart.png";
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={2} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          ></Text>
          <Box>
            <Image w={"150px"} ml={"20px"} src={frazSwati} />
          </Box>
          <Box>
            {" "}
            <Image
              w={"22px"}
              h={"19px"}
              ml={"25px"}
              mt={"28px"}
              src={Location}
            />
          </Box>

          <Box marginLeft={"5px"} marginTop={"28px"}>
            pawai
          </Box>
           <Box>
          <Input
            w={"750px"}
            ml={"80px"}
            borderRadius={"15px"}
            mt={"20px"}
            h={"49px"}
            br={"30px"}
            placeholder="Find fresh vegetables, Fruits and dairy"
          />
          </Box>
          <Box>
          <IconButton
            mt={"15px"}
            mr={"-100px"}
            ml={"-50px"}
            h={"44px"}
            backgroundColor={"white"}
            borderRadius={"10px"}
            aria-label="Search database"
            icon={<SearchIcon color={"black"} h={"30px"} />}
          />
          </Box>
          {/* <Box>
        <Image w={"22px"} h={"19px"} ml={"242px"} mt={"25px"} src={Cart} />

        </Box> */}
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            {/* <DesktopNav /> */}
          </Flex>
        </Flex>

       
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={4}
        >
          <Button
            as={"a"}
            fontSize={"18px"}
            fontWeight={400}
            variant={"link"}
            href={"/cart"}
            
          >
            Cart
          </Button>
          <Button
            as={"a"}
            fontSize={"18px"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Credit
          </Button>

          <Button
            as={"a"}
            fontSize={"18px"}
            fontWeight={400}
            variant={"link"}
            href={"/loginn"}
          >
            Login
          </Button>
    
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity></Collapse>
    </Box>
  );
};

export default Navbar;
