import {memo,FC} from"react";
import {Box,Flex,Heading,Link ,useDisclosure}from"@chakra-ui/react"

import { MenulconButton } from "../../atoms/button/MenulconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";



export const Header :FC=memo(()=> {
    const {isOpen,onOpen,onClose} = useDisclosure();
    return(
        <>
        <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{base:3,md:5}}>
        <Flex align="center" as="a" mr={8} _hover={{cursor:"pointer"}}>
        <Heading as="h1" fontSize={{base:"md",md:"lg"}}>ユーザー管理アプリ</Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{base:"none",md:"flex"}}>
            <Box pr={4}>
            <Link>ユーザー一覧</Link>
            </Box>
            <Link>設定</Link>
        </Flex>
        <MenulconButton onOpen={onOpen} />
        </Flex>
        <MenuDrawer onClose={onClose} isOpen={isOpen}/>
        </>
    )
});
