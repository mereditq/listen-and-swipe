import React from "react"
import { Box } from "@chakra-ui/react"
import { MinusIcon, AddIcon} from "@chakra-ui/icons";

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <MinusIcon /> : <AddIcon />}
    </Box>
  )
}

export default MenuToggle;