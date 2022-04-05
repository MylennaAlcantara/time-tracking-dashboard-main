import React from 'react';
import Container from './wrapper';
import { Profile } from '../perfil';
import { Work } from '../work';
import { Play } from '../play';
import { Study } from '../study';
import { Exercise } from '../exercise';
import { Social } from '../social';
import { SelfCare } from '../self-care';

export const Wrapper = () => {
    return(
        <Container>
            <Profile/>
            <Work/>
            <Play/>
            <Study/>
            <Exercise/>
            <Social/>
            <SelfCare/>
        </Container>
    );
}