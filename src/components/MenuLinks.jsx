import React from "react";
import '../assets/fonts.css';
import { Link, Text, Stack, Box } from "@chakra-ui/react";



const MenuItem = ({children, isLast, to="/", ...rest}) => {
   return (
    <Link href={to}>
      <Text
       fontFamily={["Arima Madurai"]}
       display="block"
       textColor={'black'}
       fontWeight={'bold'} 
       fontSize={'2xl'}
       {...rest}>
        {children}
      </Text>
    </Link>

   )
}

const MenuLinks = ({isOpen}) => {
  return (
    <Box
      mr={10}
      display = {{base: isOpen ? "block":"none", md:"block"}}
      flexBasis={{base:"100%", md:"auto"}}>
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/about">About</MenuItem>

        </Stack>

    </Box>
  )
}

export default MenuLinks;