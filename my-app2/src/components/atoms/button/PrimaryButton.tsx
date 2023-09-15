
import { Button } from "@chakra-ui/react";
import {memo,FC, ReactNode} from"react";

type Props={
    children: ReactNode;
    disabled?:boolean;
    loading?:boolean;
    onClick: () => void;
} 

export const PrimaryButton :FC<Props>=memo((props)=> {
    const {children, disabled = false, loading = false, onClick} =props;
    return(
        <Button bg="teal.500" color="white" _hover={{ opacity: 0.8 } } disabled={disabled} isLoading={loading} onClick={onClick}
        >
      {children}
    </Button>
    )
})