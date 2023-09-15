
import { Button } from "@chakra-ui/react";
import {memo,FC, ReactNode} from"react";

type Props={
    children: ReactNode;
}

export const PrimaryButton :FC<Props>=memo((props)=> {
    const {children} =props;
    return(
        <Button bg="teal.500" color="white" _hover={{ opacity: 0.8 }}>
      {children}
    </Button>
    )
})