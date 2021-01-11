import React, { Component } from 'react'
import { toast } from 'react-toastify'

import ButtonGroup from '../button/ButtonGroup'
import Display from '../display/Display';
import Message from '../display/Message';

export default class Timer extends Component {

    state = {
        initialValue: 10,
        duration: 10,
        message: '',
        handle: 0
    };

    // ajouter des toast
    notify = (text, type) => {
        toast[type]( text, {autoClose: 1500})
    }

    // ajouter un 0 devant si le chiffre est inférieur à 10
    preprendZero = value => {
        // si la valeur est inférieur à 10 on ajoute 0 devant la valeur qu'on convertit en string
        return value < 10 ? "0" + value.toString() : value.toString()
    }

    // durée en format munites : secondes
    formatDuration = () => {
        const minutes = Math.floor(this.state.duration / 60) ;
        const secondes = Math.floor(this.state.duration % 60) ;
        return `${this.preprendZero(minutes)}:${this.preprendZero(secondes)}`;
    }

    // Mis à jour de la durée en fonction de la pause désirée (On récupère les props de TimerGroup)
    componentDidMount() {
        this.setState({
            duration: parseInt(this.props.duration) * 60,
            initialValue: parseInt(this.props.duration) * 60
        })
    }
    

    componentWillUnmount() {
        this.clean();
    }

    count = () => {
        // on chage la duration à chaque seconde
        this.setState({
            duration: this.state.duration - 1
        });
        if (this.state.duration === 0) {
            this.clean('Terminé');
        }
    }

    // arrêter le compteur avec la fonction clearInterval
    clean = (message) => {
        clearInterval(this.state.handle);
        this.setState({
            message: message
        });
    }

    // gérer les événements click
    start = () => {
        // lancer un intervalle de temps grâce à la fonction JavaScript setInterval
        const handle = setInterval(() => {
            this.count()
        }, 1000);
        this.setState({
            handle: handle,
            message: ''

        });
    }

    stop = () => {
        this.notify('en pause', 'warn')
        this.clean('Mis en pause');
    }

    // arrêter et remettre la valeur de durée à initialValue
    reset = () => {
        this.notify('réinitialisation', 'error')
        this.clean('Réinitialisé')
        this.setState({
            duration: this.state.initialValue
        })
    }

    render() {
        return (
            <React.Fragment>
                <Display title = {this.props.title} timerValue = {this.formatDuration()} />
                <ButtonGroup 
                // on ajoute les props
                onStart = {this.start}
                onStop = {this.stop}
                onReset = {this.reset}
                />
                < Message text = {this.state.message}/>
            </React.Fragment>
        );
    }
}
