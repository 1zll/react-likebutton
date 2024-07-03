import React, { useState } from 'react';
import { HStack, IconButton, Text, Center } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';

const Heart = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <Center>
            <HStack spacing='24px'>
                <Text fontSize="2xl">Like</Text>
                <IconButton
                    icon={<FaHeart />}
                    color='#ff0000'
                    isRound={true}
                    variant='unstyled'
                    aria-label='Like'
                    size='xl'
                    onClick={incrementCount}
                />
                <Text fontSize="2xl">{count}</Text>
                <IconButton
                    icon={<GrPowerReset />}
                    color='#a0aec0'
                    isRound={true}
                    variant='unstyled'
                    aria-label='Reset'
                    size="xl"
                    onClick={() => setCount(0)}
                />
            </HStack>
        </Center>
    );
};

export default Heart;
