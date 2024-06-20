import { Menu, MenuButton, MenuList, MenuItem, MenuDivider,Button } from "@chakra-ui/react";
import { RiArrowDropDownLine } from "@remixicon/react";
import { useState } from "react";

const options = [
  "remove",
  ...Array.from({ length: 19 }, (_, i) => i + 1),
  "MAX 20",
];

const SelectDropdown = ({ quantity }) => {
  const [qty, setQty] = useState("");

  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="gray"
        variant="outline"
        w={"auto"}
        mr={"40px"}
        rightIcon={<RiArrowDropDownLine />}
      >
        QTY {quantity}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={""} value={""}>
          Remove
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={(e) => setQty(e.target.value)} value={"1"}>
          1
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={(e) => setQty(e.target.value)} value={"2"}>
          2
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={(e) => setQty(e.target.value)} value={"3"}>
          3
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={(e) => setQty(e.target.value)} value={"4"}>
          4
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={(e) => setQty(e.target.value)} value={"5"}>
          5
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={(e) => setQty(e.target.value)} value={"6"}>
          6
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={(e) => setQty(e.target.value)} value={"7"}>
          7
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={(e) => setQty(e.target.value)} value={"8"}>
          8
        </MenuItem>{" "}
        <MenuDivider />
        <MenuItem onClick={(e) => setQty(e.target.value)} value={"9"}>
          9
        </MenuItem>{" "}
        <MenuDivider />
        <MenuItem onClick={(e) => setQty(e.target.value)} value={"10"}>
          10
        </MenuItem>{" "}
        <MenuDivider />
        <MenuItem onClick={(e) => setQty(e.target.value)} value={"11"}>
          11
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={(e) => setQty(e.target.value)} value={"MAX 20"}>
          Max 20
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SelectDropdown;
