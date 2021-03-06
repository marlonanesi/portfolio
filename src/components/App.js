﻿import React, { Component } from 'react';

import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';

import profile from '../assets/profile.png'

class App extends Component {
    state = { counter: 0, displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }
   
    render() {
        return (
             <div>
                 <img src={profile} alt='Profile image' className='profile' />
                <h1>Meu Portfolio</h1>
                <p>Olá, meu nome é Marlon!</p>
                {
                    this.state.displayBio ? (
                        <div>
                            
                            <Title />
                            <p>Eu moro em Blumenau, sou Analista Desenvolvedor Python há 5 anos na empresa LINX S.A.</p>
                            <p>Este é o meu primeiro app fazendo parte do treinamento de react </p>
                            <button onClick={this.toggleDisplayBio}>Ver menos</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Ver mais</button>
                        </div>
                    )
                
                }
                <hr />
                <Projects />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;